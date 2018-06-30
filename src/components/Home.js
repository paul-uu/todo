import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import { USERS_SET } from '../constants';
import actionCreators from '../actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { onSetUsers } = this.props;
    db.onceGetUsers().then(snapshot => 
      onSetUsers(snapshot.val()));
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        { !!users && <UserList users={users} /> }
      </div>
    )
  }
}

const UserList = ({users}) => 
  <div>
    <h2>List of Usernames of users</h2>
    <p>(Saved on Sign Up in the Firebase Database)</p>

    {
      Object.keys(users).map(key =>
        <div key={key}>{users[key].username}</div>
      )
    }
  </div>

const mapStateToProps = state => ({
  users: state.user.users
});
const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch(actionCreators.setUsers(users))
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage)