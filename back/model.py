import sqlite3


class Model:
    def __get_db(self):
        conn = sqlite3.connect("sql.db")
        return conn

    def find_images_by_keyword(self, keyword: str):
        conn = self.__get_db()
        cur = conn.cursor()
        cur.execute(
            "select distinct name from images where comment like :keyword limit 10",
            {"keyword": f"%{keyword}%"},
        )
        res = cur.fetchall()
        cur.close()
        conn.close()

        return res

    def get_random_image(self):
        conn = self.__get_db()
        cur = conn.cursor()
        cur.execute("select name from images order by random() limit 1")
        res = cur.fetchone()[0]
        cur.close()
        conn.close()

        return res
