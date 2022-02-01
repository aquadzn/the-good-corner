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


@ns.route("/")
class Root(Resource):
    def get(self):
        return {"response": "Hello world!"}


@ns.route("/random")
class Random(Resource):
    def get(self):
        res = model.get_random_image()
        if res:
            return {"id": res[0], "image": res[1]}
        raise BadRequest()


@ns.route("/random/<int:size>")
class RandomSize(Resource):
    def get(self, size):
        res = model.get_random_image()
        if res:
            return {"id": res[0], "image": res[1], "size": size}
        raise BadRequest()


@ns.route("/random/<int:width>/<int:height>")
class RandomWidthHeight(Resource):
    def get(self, width, height):
        res = model.get_random_image()
        if res:
            return {
                "id": res[0],
                "image": res[1],
                "width": width,
                "height": height,
            }
        raise BadRequest()


@ns.route("/find/<string:keyword>")
@ns.param("keyword", "The search query keyword")
class FindByKeyword(Resource):
    def get(self, keyword):
        res = model.find_images_by_keyword(keyword)
        if res:
            return res
        raise BadRequest()


if __name__ == "__main__":
    app.run(debug=True)
