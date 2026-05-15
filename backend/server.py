from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# временная база пользователей
users = {}


@app.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    login = data.get("login")
    password = data.get("password")

    # проверка пустых полей
    if not login or not password:
        return jsonify({
            "message": "Заполните все поля"
        }), 400

    # пользователь уже существует
    if login in users:
        return jsonify({
            "message": "Пользователь уже существует"
        }), 400

    # сохраняем пользователя
    users[login] = password

    return jsonify({
        "message": "Регистрация успешна"
    })


@app.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    login = data.get("login")
    password = data.get("password")

    # проверка существования
    if login not in users:
        return jsonify({
            "message": "Пользователь не найден"
        }), 404

    # проверка пароля
    if users[login] != password:
        print(f'Попытка входа {login}: Неверный пароль')
        return jsonify({
            "message": "Неверный пароль"
        }), 401
    return jsonify({
        "message": "Вход выполнен"
    })


if __name__ == "__main__":
    app.run(port=5000, debug=True)