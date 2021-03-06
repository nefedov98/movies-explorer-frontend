import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import MainLogoLink from '../MainLogoLink/MainLogoLink';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Login.css';

function Login({ signInHandler, isSignInError, loggedIn}) {
  const formWithValidation = useFormWithValidation();
  const { email, password } = formWithValidation.values;

  const submitHandler = (e) => {
    e.preventDefault();
    signInHandler(email, password);
    formWithValidation.resetForm();
  };
  
  return (
    <div>
      { !loggedIn ? (<div className="login">
      <MainLogoLink />
      <h2 className="login__title">Рады видеть!</h2>
      <AuthForm
        FormTypeLogin
        formData={formWithValidation}
        onSubmit={submitHandler}
        isSignInError={isSignInError}
      />
      <p className="login__footer">
        Ещё не зарегистрированы?
        <Link className="login__link" to="/signup">Регистрация</Link>
      </p>
    </div>) : <Redirect to="./" />}
    </div>
  );
}

export default Login;