from typing import Any
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, BLOB


 #ログインデータ
class login(Base):
    __tablename__ = "login"  # テーブル名を指定
    id = Column(Integer, primary_key=True)
    email = Column(String(255))
    password = Column(String(18))