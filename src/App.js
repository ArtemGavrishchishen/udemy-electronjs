import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeView from './views/Home';
import ChatView from './views/Chat';
import SettingsView from './views/Settings';
import LoginView from './views/Login';
import RegisterView from './views/Register';

import routes from './configs/routes';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route exact path={routes.CHAT + '/:id'} component={ChatView} />
          <Route exact path={routes.SETTINGS} component={SettingsView} />
          <Route exact path={routes.LOGIN} component={LoginView} />
          <Route exact path={routes.REGISTER} component={RegisterView} />

          <Route path={routes.HOME} component={HomeView} />
        </Switch>
      </div>
    </>
  );
};

export default App;
