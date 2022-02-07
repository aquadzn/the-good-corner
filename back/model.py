import sqlite3


class Model:
    def __get_db(self, row_factory: bool = False):
        conn = sqlite3.connect("sql.db")
        if row_factory:
            conn.row_factory = sqlite3.Row
        return conn

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
        cur.execute("select photo_id, filename from images order by random() limit 1")
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
