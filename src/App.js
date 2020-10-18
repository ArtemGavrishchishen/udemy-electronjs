import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar';
import HomeView from './views/Home';
import ChatView from './views/Chat';
import SettingsView from './views/Settings';
import WelcomeView from './views/Welcome';

import routes from './configs/routes';
import { authActions } from './store/auth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.listenToAuthChanges())
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route exact path={routes.CHAT + '/:id'} component={ChatView} />
          <Route exact path={routes.SETTINGS} component={SettingsView} />
          <Route exact path={routes.HOME} component={HomeView} />

          <Route path={routes.WELCOME} component={WelcomeView} />
        </Switch>
      </div>
    </>
  );
};

export default App;
