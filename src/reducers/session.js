import { AUTH_USER_SET } from '../constants';

const INITIAL_STATE = {
  authUser: null,
};

const applySetAuthUser = (state, action) => ({
    ...state,
    authUser: action.user
});

function sessionReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH_USER_SET:
      return applySetAuthUser(state, action);
    default: 
      return state;
  }
}

export default sessionReducer;