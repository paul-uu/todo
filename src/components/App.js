import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import MyTodos from './MyTodos';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div className='App'>

      <Navigation />
      <hr/>

      <Route exact path={routes.MYTODOS} component={() => <MyTodos />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </Router>

export default withAuthentication(App);