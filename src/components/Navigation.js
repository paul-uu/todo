import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux'; 
import { connect } from 'react-redux';
import SignOutLink from './SignOut';
import * as routes from '../constants/routes';
import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';

const Navigation = ({ authUser, todosQty, username }) => 
  <nav className='nav'>
  {
    authUser
      ? <NavigationAuthWithRouter todosQty={todosQty} username={username} />
      : <NavigationNonAuthWithRouter />
  }
  </nav>

const NavigationAuth = props => {
  const path = props.location.pathname;
  const username = `${props.username}'s` || 'My'
  return (
    <div>
      <ul>
        <li><Link className={'link ' + (path === routes.MYTODOS ? 'selected' : '')} to={routes.MYTODOS}>{username} Todos ({props.todosQty})</Link></li>
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


const mapStateToProps = state => {
  let todos, 
      todosQty = 0, 
      username = null;

  if ('users' in state.firestore.data && state.firebase.auth.uid) {
    const uid = state.firebase.auth.uid;
    todos = state.firestore.data.users[uid].todos;
    todosQty = Object.keys(todos).length;
    username = state.firestore.data.users[uid].username;
  }

  return {
    authUser: state.session.authUser,
    todosQty,
    username
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect( [{ collection: 'users' }] ) 
)(Navigation);