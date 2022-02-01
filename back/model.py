import sqlite3


class Model:
    def __get_db(self, row_factory: bool = False):
        conn = sqlite3.connect("sql.db")
        if row_factory:
            conn.row_factory = sqlite3.Row
        return conn

    def find_images_by_keyword(self, keyword: str):
        conn = self.__get_db(True)
        cur = conn.cursor()
        cur.execute(
            "select id, filename from images where caption like :keyword limit 10",
            {"keyword": f"%{keyword}%"},
        )
        res = cur.fetchall()
        accumulator = []
        for item in res:
            accumulator.append({k: item[k] for k in item.keys()})

        cur.close()
        conn.close()

        return accumulator

    def get_random_image(self):
        conn = self.__get_db()
        cur = conn.cursor()
        cur.execute("select id, filename from images order by random() limit 1")
        res = cur.fetchone()
        cur.close()
        conn.close()

        return res
