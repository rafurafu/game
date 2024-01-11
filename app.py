from flask import Flask, render_template,request,redirect,session,jsonify
import random as rd
import session as ss
import json
from model import login
from collections import Counter
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.secret_key = 'your_secret_key'


 #ログインシステム
def login_required(func):
    def wrapper(*args, **kwargs):
        if 'email' in session:
            #ユーザーネームがある場合はhomeに移動
            return func(*args, **kwargs)
        else:
            #ユーザーネームがない場合はログイン画面に移動
            return redirect('/')
    return wrapper
 
 #ログイン処理　、ユーザー情報の照合 #mysql
def loginCheck(email, password):
    users = ss.getLoginUser(email, password)
    
    if users[0][1] == email and users[0][2] == password:
        session['email'] = email
        session['id'] = users[0][0]
        return True
    else:
        return False


 #ログイン
@app.route('/')
def login():
    return render_template("login.html")

@app.route('/login', methods = ["POST"])
def loginProcess():
    email = request.form["email"]
    password = request.form["password"]
    
    print(f"Email: {email}")
    print(f"Password:{password}")
    #username一時的に保存
    #username = セッション
    if loginCheck(email, password):
        return redirect("/home")

    else:
        return redirect()
    

 #ログアウト  
@app.route('/logout')
def logout():
    #ログアウトするときにセッションを消す
    session.clear()
    return redirect('/')


@app.route('/home')
def home():
    return render_template("home.html")

@app.route('/valorant')
def valorant():
    return render_template("valorant.html")


if __name__ == '__main__':
    app.run()
