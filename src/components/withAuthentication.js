import React from 'react';
import { firebase } from '../firebase';
import { connect } from 'react-redux';
import { userAuthenticated } from '../actions';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
 
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => { // observer for changes to the user's sign-in state
        authUser
            ? this.props.onSetAuthUser(authUser)
            : this.props.onSetAuthUser(null);
      });
    }

    render() {
      return (
        <Component />
      )
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: authUser => 
      dispatch(userAuthenticated(authUser))
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;