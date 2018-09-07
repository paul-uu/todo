import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignOutLink from './SignOut';
import * as routes from '../constants/routes';
import PropTypes from 'prop-types';

const Navigation = ({ authUser, todosQty }) =>
  <nav className='nav'>
  {
    authUser 
      ? <NavigationAuthWithRouter todosQty={todosQty} />
      : <NavigationNonAuthWithRouter />
  }
  </nav>

const NavigationAuth = props => {
  const path = props.location.pathname;
  return (
    <div>
      <ul>
        <li><Link className={'link ' + (path === routes.MYTODOS ? 'selected' : '')} to={routes.MYTODOS}>My Todos ({props.todosQty})</Link></li>
        <li><Link className={'link ' + (path === routes.ACCOUNT ? 'selected' : '')} to={routes.ACCOUNT}>Account</Link></li>
      </ul>
      <SignOutLink />
    </div>
  )
};
const NavigationAuthWithRouter = withRouter(props => <NavigationAuth {...props} />);


NavigationAuth.propTypes = {
  todosQty: PropTypes.number
}

const NavigationNonAuth = props => {
  const path = props.location.pathname;
  return (
    <div>
      <ul>
        <li><Link className={'link ' + (path === routes.MYTODOS ? 'selected' : '')} to={routes.MYTODOS}>My Todos</Link></li>
      </ul>
      <Link className={'link sign-in ' + (path === routes.SIGN_IN ? 'selected' : '')} to={routes.SIGN_IN}>Sign In</Link>
    </div>
  )
}
const NavigationNonAuthWithRouter = withRouter(NavigationNonAuth);

const mapStateToProps = state => ({
  authUser: state.session.authUser,
  todosQty: state.todos.length
});

export default withRouter(connect(mapStateToProps)(Navigation));