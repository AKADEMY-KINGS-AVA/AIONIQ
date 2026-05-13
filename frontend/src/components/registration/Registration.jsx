import './Registration.css'
import { useState } from 'react'

export default function Registration() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        const response = await fetch('http://127.0.0.1:5000/send-login', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                login: login,
                password: password
            })
        })

        const data = await response.json()

        console.log(data.message)
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