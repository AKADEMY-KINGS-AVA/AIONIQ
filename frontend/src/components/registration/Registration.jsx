import './Registration.css'
import { useState } from 'react'

export default function Registration() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const ADMIN_LOGIN = 'vados'
    const ADMIN_PASSWORD = 'vados+7789878'

    function handleLogin() {

        if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {

            console.log('Вы успешно вошли в систему!')

        } else {

            console.log('Неверный логин или пароль.')

        }
    }

    function handleRegister() {

        console.log('Переход к регистрации')

    }

    return (
        <section className="Registration">

            <h2 className="Registration-heading">
                AIONIQ
            </h2>

            <section className="Registration-content">

                <input
                    className="Username-input"
                    type="text"
                    placeholder="Username"

                    value={login}

                    onChange={(event) => {
                        setLogin(event.target.value)
                    }}
                />

                <input
                    className="Password-input"
                    type="password"
                    placeholder="Password"

                    value={password}

                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />

                <section className="Buttons-container">

                    <button
                        className="Login-button"
                        type="button"
                        onClick={handleLogin}
                    >
                        Вход
                    </button>

                    <button
                        className="Register-button"
                        type="button"
                        onClick={handleRegister}
                    >
                        Регистрация
                    </button>

                </section>

            </section>

        </section>
    )
}