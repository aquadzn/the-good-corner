import sqlite3
import cloudinary.uploader


class Model:
    def __init__(self, db_name: str) -> None:
        self.db_name = db_name

    def __get_db(self, row_factory: bool = False):
        conn = sqlite3.connect(self.db_name)
        if row_factory:
            conn.row_factory = sqlite3.Row
        return conn

    # Auth
    # ----

    def check_username(self, username):
        conn = self.__get_db(True)
        cur = conn.cursor()
        cur.execute("select * from users where username = ? ", (username,))
        res = cur.fetchone()
        cur.close()
        conn.close()

        return res

    def create_user(self, username, password):
        conn = self.__get_db()
        cur = conn.cursor()
        cur.execute(
            "insert into users (username, password) values (?,?)",
            (
                username,
                password,
            ),
        )
        conn.commit()
        cur.close()
        conn.close()

    # Images
    # ------

    def get_homepage_images(self):
        conn = self.__get_db(True)
        cur = conn.cursor()
        cur.execute("select * from images limit 6")
        res = cur.fetchall()
        accumulator = []
        for item in res:
            accumulator.append({k: item[k] for k in item.keys()})

        cur.close()
        conn.close()

        return accumulator

    def get_gallery_images(self, offset: int, limit: int):
        conn = self.__get_db(True)
        cur = conn.cursor()
        cur.execute(
            "select * from images limit ? offset ?",
            (
                limit,
                offset,
            ),
        )
        res = cur.fetchall()
        accumulator = []
        for item in res:
            accumulator.append({k: item[k] for k in item.keys()})

        cur.close()
        conn.close()

        return accumulator

    def get_image_by_id(self, photo_id: str):
        conn = self.__get_db(True)
        cur = conn.cursor()
        cur.execute("select * from images where photo_id = ?", (photo_id,))
        res = cur.fetchone()
        cur.close()
        conn.close()

        return res

    def get_random_image(self):
        conn = self.__get_db(True)
        cur = conn.cursor()
        cur.execute(
            "select photo_id, photo_image_url from images order by random() limit 1"
        )
        res = cur.fetchone()
        cur.close()
        conn.close()

        return res

    def search_by_keyword(
        self, keyword: str, offset: int, limit: int, color: str = None
    ):
        conn = self.__get_db(True)
        cur = conn.cursor()
        if color:
            cur.execute(
                "select rank, * from images where images match ? and colors match ? order by rank limit ? offset ?",
                (
                    keyword,
                    color,
                    limit,
                    offset,
                ),
            )
        else:
            cur.execute(
                "select rank, * from images where images match ? order by rank limit ? offset ?",
                (
                    keyword,
                    limit,
                    offset,
                ),
            )
        res = cur.fetchall()
        accumulator = []
        for item in res:
            accumulator.append({k: item[k] for k in item.keys()})

        cur.close()
        conn.close()

        return accumulator

    def upload_image(
        self,
        file,
        photo_id,
        photographer_name,
        exif_camera_model,
        photo_description,
        keyword,
        colors,
    ):
        res = cloudinary.uploader.upload(
            file,
            public_id=photo_id,
        )
        if res:
            conn = self.__get_db()
            cur = conn.cursor()
            cur.execute(
                "insert into images values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (
                    photo_id,
                    photographer_name,
                    f"{photo_id}.{res['format']}",
                    res["url"],
                    exif_camera_model,
                    res["width"],
                    res["height"],
                    round(res["width"] / res["height"], 1),
                    photo_description,
                    keyword,
                    colors,
                ),
            )

            conn.commit()
            cur.close()
            conn.close()

        return res
