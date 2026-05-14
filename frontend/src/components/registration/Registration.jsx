import './Registration.css'
import { useState } from 'react'

export default function Registration() {

    const [mode, setMode] = useState('login')

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    async function handleLogin() {

        try {

            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    login,
                    password
                })
            })

            const data = await response.json()

            console.log(data.message)

            if (response.ok) {

                console.log('Успешный вход')

                setLogin('')
                setPassword('')
                setRepeatPassword('')
            }

        } catch (error) {

            console.log('Ошибка сервера:', error)

        }
    }

    async function handleRegister() {

        if (password !== repeatPassword) {
            console.log('Пароли не совпадают')
            return
        }

        try {

            const response = await fetch('http://127.0.0.1:5000/register', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    login,
                    password
                })
            })

            const data = await response.json()

            console.log(data.message)

            if (response.ok) {

                console.log('Регистрация успешна')

                setMode('login')

                setLogin('')
                setPassword('')
                setRepeatPassword('')
            }

        } catch (error) {

            console.log('Ошибка сервера:', error)

        }
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

                {mode === 'register' && (
                    <input
                        className="Password-input"
                        type="password"
                        placeholder="Repeat password"

                        value={repeatPassword}

                        onChange={(event) => {
                            setRepeatPassword(event.target.value)
                        }}
                    />
                )}

                <section className="Buttons-container">

                    {mode === 'login' ? (
                        <>
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
                                onClick={() => {
                                    setMode('register')
                                }}
                            >
                                Регистрация
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="Login-button"
                                type="button"
                                onClick={handleRegister}
                            >
                                Создать аккаунт
                            </button>

                            <button
                                className="Register-button"
                                type="button"
                                onClick={() => {
                                    setMode('login')
                                }}
                            >
                                Назад
                            </button>
                        </>
                    )}

                </section>

            </section>

        </section>
    )
}