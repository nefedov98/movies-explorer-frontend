import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import MainLogoLink from '../MainLogoLink/MainLogoLink';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Register.css';

function Register({ signUpHandler, isSignUpError, onLogoClick, loggedIn }) {
  const formWithValidation = useFormWithValidation();
  const { name, email, password } = formWithValidation.values;

  const submitHandler = (e) => {
    e.preventDefault();
    signUpHandler(name, email, password);
    formWithValidation.resetForm();
  };

  return (
    <div>
      { !loggedIn ? (<div className="register">
      <MainLogoLink onClick={onLogoClick} />
      <h2 className="register__title">Добро пожаловать!</h2>
      <AuthForm
        onSubmit={submitHandler}
        formData={formWithValidation}
        isSignUpError={isSignUpError}
      />
      <p className="register__footer">
        Уже зарегистрированы?
        <Link className="register__link" to="/signin">Войти</Link>
      </p>
    </div>) : <Redirect to="./" />}
    </div>
  
  );
}

export default Register;