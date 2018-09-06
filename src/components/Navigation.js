import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignOutButton from './SignOut';
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
      <SignOutButton />
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
    <ul>
      <li><Link className={'link ' + (path === routes.MYTODOS ? 'selected' : '')} to={routes.MYTODOS}>My Todos</Link></li>
      <li><Link className={'link ' + (path === routes.SIGN_IN ? 'selected' : '')} to={routes.SIGN_IN}>Sign In</Link></li>
    </ul>
  )
}
const NavigationNonAuthWithRouter = withRouter(NavigationNonAuth);

const mapStateToProps = state => ({
  authUser: state.session.authUser,
  todosQty: state.todos.length
});

export default withRouter(connect(mapStateToProps)(Navigation));