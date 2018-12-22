import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signUp } from '../actions';

const SignUpPage = (props) => {
  const { history, signUp } = props;
  return (
    <div className='content-container'>
      <h1>SignUp</h1>
      <SignUpForm history={history} signUp={signUp} />
    </div>
  )
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

const mapDispatchToProps = dispatch => ({
  signUp: newUser => dispatch(signUp(newUser))
})

/* withRouter is a HOC that is given access to the Router properties */
/* in this case, the history object is used in the SignUpPage component */
/* which enables redirects to other pages/routes */
export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};