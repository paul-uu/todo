import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from '../constants/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

const App = (props) => {
  return (
    <MuiThemeProvider>
      <Router>
        <div>
          <Navigation />
          <hr/>
          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
        </div>
      </Router>
      <Paper className='App App--Paper' zDepth={2}>
          <TodoForm />
          <TodoList />
          <Footer />
        </Paper>
    </MuiThemeProvider>
  )
}

export default App;
