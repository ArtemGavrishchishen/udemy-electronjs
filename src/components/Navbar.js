import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import routes from '../configs/routes';
import { authActions } from '../store/auth'

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user)

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            onClick={() => history.goBack()}
            className="btn btn-outline-primary"
          >
            Back
          </button>
          <Link to={routes.SETTINGS} className="btn btn-outline-success ml-2">
            Settings
          </Link>
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <Link to={routes.WELCOME} className="btn btn-outline-success ml-2">
            Login
          </Link>
          {user &&
            <button
              onClick={() => dispatch(authActions.logout())}
              className="btn btn-outline-danger ml-2">
              Logout
            </button>
          }

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
