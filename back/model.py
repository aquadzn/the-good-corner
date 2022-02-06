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

    def get_image_by_id(self, photo_id: str):
        conn = self.__get_db(True)
        cur = conn.cursor()
        cur.execute(
            "select * from images where photo_id = ?", (photo_id,)
        )
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

    def search_by_keyword(self, keyword: str):
        conn = self.__get_db(True)
        cur = conn.cursor()
        cur.execute(
            "select rank, * from images where images match ? order by rank limit 6",
            (keyword,),
        )
        res = cur.fetchall()
        accumulator = []
        for item in res:
            accumulator.append({k: item[k] for k in item.keys()})

        cur.close()
        conn.close()

        return accumulator
