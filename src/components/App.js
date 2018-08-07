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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <MuiThemeProvider>
      <div>
        <Navigation />
        <hr/>

        <Route exact path={routes.MYTODOS} component={() => <MyTodos />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      </div>
    </MuiThemeProvider>
  </Router>

export default withAuthentication(App);