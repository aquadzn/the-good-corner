from uuid import uuid4

from flask import Flask, request
from flask_cors import cross_origin
from flask_restx import Api, Resource
from werkzeug.exceptions import BadRequest
from werkzeug.datastructures import FileStorage
import cloudinary

import config
from model import Model


cloudinary.config(
    cloud_name=config.CLOUDINARY_CLOUD_NAME,
    api_key=config.CLOUDINARY_API_KEY,
    api_secret=config.CLOUDINARY_API_SECRET,
)

app = Flask(__name__)
api = Api(app)
model = Model(config.DB_NAME)


ns = api.namespace(
    "images", description="The Good Corner images", decorators=[cross_origin()]
)

parser = ns.parser()
parser.add_argument("offset", default=0, type=int)
parser.add_argument("limit", default=6, type=int)
search_parser = parser.copy()
search_parser.add_argument("color", type=str)
upload_parser = ns.parser()
upload_parser.add_argument("file", type=str, required=True, location="json")
upload_parser.add_argument(
    "photographer_name", type=str, required=True, location="json"
)
upload_parser.add_argument(
    "photo_description", type=str, required=True, location="json"
)
upload_parser.add_argument("keyword", type=str, location="json")
upload_parser.add_argument("exif_camera_model", type=str, location="json")
upload_parser.add_argument("colors", type=str, location="json")


@ns.route("/homepage")
class Homepage(Resource):
    def get(self):
        res = model.get_homepage_images()
        if res:
            return res
        raise BadRequest()


@ns.route("/gallery")
@ns.expect(parser)
class Gallery(Resource):
    def get(self):
        args = parser.parse_args()
        res = model.get_gallery_images(**args)
        if res:
            return res
        raise BadRequest()


@ns.route("/id/<string:photo_id>")
class GetImageById(Resource):
    def get(self, photo_id):
        res = model.get_image_by_id(photo_id)
        if res:
            return dict(res)
        raise BadRequest("The image wasn't found.")


@ns.route("/random")
class Random(Resource):
    def get(self):
        res = model.get_random_image()
        if res:
            return dict(res)
        raise BadRequest()


@ns.route("/random/<int:size>")
class RandomSize(Resource):
    def get(self, size):
        res = model.get_random_image()
        if res:
            return dict(res)
        raise BadRequest()


@ns.route("/random/<int:width>/<int:height>")
class RandomWidthHeight(Resource):
    def get(self, width, height):
        res = model.get_random_image()
        if res:
            return dict(res)
        raise BadRequest()


@ns.route("/search/<string:keyword>")
@ns.param("keyword", "The search query keyword")
@ns.expect(search_parser)
class SearchByKeyword(Resource):
    def get(self, keyword):
        args = search_parser.parse_args()
        res = model.search_by_keyword(keyword, **args)
        if res:
            return res
        raise BadRequest()


@ns.route("/upload")
@ns.expect(upload_parser)
class UploadImage(Resource):
    def post(self):
        args = upload_parser.parse_args()
        # args = request.get_json()

        # file_to_upload = request.files["file"]
        photo_id = uuid4().hex

        res = model.upload_image(
            args["file"],
            photo_id,
            args["photographer_name"],
            args["exif_camera_model"],
            args["photo_description"],
            args["keyword"],
            args["colors"],
        )
        if res:
            return res
        raise BadRequest()


if __name__ == "__main__":
    app.run(debug=True)
