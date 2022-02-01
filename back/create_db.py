import sqlite3
import pandas as pd


df = pd.read_csv("~/Downloads/flickr8k_images/captions.txt")

con = sqlite3.connect("sql.db")
cur = con.cursor()

cur.execute("create table images(id integer primary key, name text, comment text)")
con.commit()

for i, row in df.iterrows():
    cur.execute(
        "insert into images values (?, ?, ?)", (i, row["image"], row["caption"])
    )

con.commit()
con.close()
