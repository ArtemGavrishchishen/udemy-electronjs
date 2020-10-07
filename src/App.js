import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeView from './views/Home';

import routes from './configs/routes';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route exact path={routes.HOME} component={HomeView} />
          <Route exact path={routes.SETTINGS}>
            <h1>I am SETTINGS</h1>
          </Route>
          <Route exact path={routes.LOGIN}>
            <h1>I am LOGIN</h1>
          </Route>
          <Route exact path={routes.REGISTER}>
            <h1>I am REGISTER</h1>
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};

export default App;
