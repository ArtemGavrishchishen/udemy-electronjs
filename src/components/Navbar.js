import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import routes from '../configs/routes';

const Navbar = () => {
  const history = useHistory();
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
          <Link to={routes.REGISTER} className="btn btn-outline-danger ml-2">
            Register
          </Link>
          <Link to={routes.LOGIN} className="btn btn-outline-success ml-2">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
