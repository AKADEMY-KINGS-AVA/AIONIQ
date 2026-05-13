from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/send-login", methods=["POST"])
def send_login():
    data = request.get_json()

    login = data.get("login")
    password = data.get("password")

    print("Пользователь отправил логин:", login)
    print("Пользователь отправил пароль:", password)

    return jsonify({
        "message": f"Сервер получил логин: {login}, пароль: {password}"
    })


if __name__ == "__main__":
    app.run(port=5000, debug=True)