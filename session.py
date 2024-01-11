from sqlalchemy.orm import sessionmaker
from db import engine
from model import login
from sqlalchemy import text
SessionClass = sessionmaker(engine)  # セッションを作るクラスを作成
session = SessionClass()
connection = engine.connect()
#user_a = login(email="bukbjrafu@gmail.com", password="87134yanai")
#session.add(user_a)
#session.commit()

def selectAllLogin():
    users = session.query(login).all()
    return users

def getLoginUser(email, password):
    query = text(f'SELECT * FROM login WHERE email = "{email}" AND password="{password}"')
    result = connection.execute(query)
    row = result.fetchall()
    return row

