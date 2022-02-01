import uuid
import sqlite3
import pandas as pd


df = pd.read_csv("~/Downloads/flickr8k_images/captions.txt")
df = df.groupby(["image"])["caption"].apply(" ".join).reset_index()

con = sqlite3.connect("sql.db")
cur = con.cursor()

cur.execute("create table images(id text, filename text, caption text)")
con.commit()

for _, row in df.iterrows():
    cur.execute(
        "insert into images values (?, ?, ?)",
        (uuid.uuid4().hex, row["image"], row["caption"]),
    )

con.commit()
con.close()
