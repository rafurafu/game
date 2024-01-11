from sqlalchemy import create_engine

# 以下の値を MySQL データベースの認証情報に置き換えます。
email ="root"
password = "root"
host = "localhost"
database = "game_match"
port = "8889"

# MySQLドライバーを使用して接続URLを作成します。
url = f'mysql+pymysql://{email}:{password}@{host}:{port}/{database}'

# 接続URLを使用してエンジンを作成します
engine = create_engine(url)

# Use the engine to perform database operations
# For example, you can execute SQL queries using the `engine.execute()` method