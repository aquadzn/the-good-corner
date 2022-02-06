from model import Model
from flask import Flask, request
from flask_cors import cross_origin
from flask_restx import Api, Resource, fields
from werkzeug.exceptions import BadRequest


app = Flask(__name__)
api = Api(app)
model = Model()


ns = api.namespace(
    "images", description="The Good Corner images", decorators=[cross_origin()]
)


@ns.route("/homepage")
class Homepage(Resource):
    def get(self):
        res = model.get_homepage_images()
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
            res = dict(res)
            res.update({"size": size})
            return res
        raise BadRequest()


@ns.route("/random/<int:width>/<int:height>")
class RandomWidthHeight(Resource):
    def get(self, width, height):
        res = model.get_random_image()
        if res:
            res = dict(res)
            res.update({"width": width, "height": height})
            return res
        raise BadRequest()


@ns.route("/search/<string:keyword>")
@ns.param("keyword", "The search query keyword")
class SearchByKeyword(Resource):
    def get(self, keyword):
        res = model.search_by_keyword(keyword)
        if res:
            return res
        raise BadRequest()


if __name__ == "__main__":
    app.run(debug=True)
