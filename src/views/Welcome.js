import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import LoadingViews from '../components/shared/LoadingViews'

import routes from '../configs/routes';

const Welcome = () => {
  const [isLoginView, setIsLogin] = useState(true);
  const user = useSelector(({ auth }) => auth.user);
  const isChecking = useSelector(({ auth }) => auth.isChecking);

  const optInText = isLoginView ?
    ['Need an account?', 'Register'] :
    ['Already registered?', 'Login'];

  if (isChecking) {
    return <LoadingViews />
  }

  if (user) {
    return <Redirect to={routes.HOME} />
  }

  return (
    <div className="centered-view">
      <div className="centered-container">
        {isLoginView ? <LoginForm /> : <RegisterForm />}
        <small className="form-text text-muted mt-2">
          {optInText[0]}
          <span
            onClick={() => setIsLogin(!isLoginView)}
            className="btn-link ml-2">{optInText[1]}
          </span>
        </small>
      </div>
    </div>
  )
}

export default Welcome;