import './Registration.css'
import { useState } from 'react'

export default function Registration({ setIsAuth }) {

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
            }
            setLogin('')
            setPassword('')
            setRepeatPassword('')

        } catch (error) {

            console.log('Ошибка сервера:', error)

        }
    }

    async function handleRegister() {
        if (login.length < 4 || login.length > 20) {
            console.log('Логин должен быть от 4 до 20 символов')
            return
        }

        if (password.length < 6) {
            console.log('Пароль должен быть не менее 6 символов')
            return
        }
        if (password.length > 20) {
            console.log('Пароль должен быть не более 20 символов')
            return
        }
        if (!/[A-Z]/.test(password)) {
            console.log('Пароль должен содержать хотя бы одну заглавную букву')
            return
        }
        if (!/[a-z]/.test(password)) {
            console.log('Пароль должен содержать хотя бы одну строчную букву')
            return
        }
        if (!/[0-9]/.test(password)) {
            console.log('Пароль должен содержать хотя бы одну цифру')
            return
        }
        if (!/[!@#$%^&*]/.test(password)) {
            console.log('Пароль должен содержать хотя бы один специальный символ (!@#$%^&*)')
            return
        }

        if (login.includes(' ') || password.includes(' ')) {
            console.log('Логин и пароль не должны содержать пробелов')
            return
        }
        if (login.includes('"') || password.includes('"')) {
            console.log('Логин и пароль не должны содержать кавычек')
            return
        }
        if (!/^[A-Za-z0-9_]+$/.test(login)) {
            console.log('Логин может содержать только латиницу, цифры и _')
            return
        }
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
                setIsAuth(true)
                setMode('login')
            }

            setLogin('')
            setPassword('')
            setRepeatPassword('')

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
                    placeholder="Логин"

                    value={login}

                    onChange={(event) => {
                        setLogin(event.target.value)
                    }}
                />

                <input
                    className="Password-input"
                    type="password"
                    placeholder="Пароль"

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
                <p className="Placeholder-simvol">
                    Допустимые символы: латиница, цифры и _
                </p>
            </section>

        </section>
    )
}