import React from 'react';
import './AuthForm.css';

function AuthForm({ FormTypeLogin }) {

    return (
        <form
            className="auth-form"
            noValidate
        >

            {!FormTypeLogin && (
                <label className="auth-form__label" htmlFor="name">
                    Имя
                    <input
                        className='auth-form__input'
                        required
                        minLength="2"
                        maxLength="30"
                        name="name"
                        type="text"
                        placeholder="Имя"
                        autoComplete="off"
                    />
                    <span className="auth-form__error"></span>
                </label>
            )}

            <label className="auth-form__label" htmlFor="email">
                Почта
        <input
                    className='auth-form__input'
                    required
                    name="email"
                    type="email"
                    placeholder="Почта"
                    autoComplete="off"
                />
            </label>
            <span className="auth-form__error"></span>

            <label className="auth-form__label" htmlFor="password">
                Пароль
        <input
                    className='auth-form__input'
                    required
                    name="password"
                    type="password"
                    minLength="8"
                    placeholder="Пароль"
                    autoComplete="off"
                />
                <span className="auth-form__error"></span>

            </label>
            <div className={FormTypeLogin
                ? 'auth-form__submit-wrapper auth-form__submit-wrapper_type_signin'
                : 'auth-form__submit-wrapper auth-form__submit-wrapper_type_signup'}
            >
                <button
                    className='submit-btn submit-btn submit-btn_is-active'
                >
                    {FormTypeLogin ? 'Войти' : 'Зарегистрироваться'}
                </button>
            </div>
        </form>
    );
}

export default AuthForm;