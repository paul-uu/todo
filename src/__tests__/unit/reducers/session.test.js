import reducer from '../../../reducers/session';
import { AUTH_USER_SET } from '../../../constants';

const initialState = null;
const firebaseUser = {
  email: "user@test.com",
  uid: "abc123"
};
const action = {
  type: AUTH_USER_SET,
  user: firebaseUser
};

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({authUser: initialState});
});

it('should set the authenticated user when then AUTH_USER_SET action is dispatched', () => {
  expect(reducer(initialState, action)).toEqual({ authUser: firebaseUser })
});