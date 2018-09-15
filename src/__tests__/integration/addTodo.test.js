import renderAppWithState from '../../utilities/testingUtilities/renderAppWithState';
import {
  SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED
} from '../../constants';
import { ExpansionPanelActions } from '@material-ui/core';

const initialState = {
  todos: [],
  visibilityFilter: SHOW_ALL,
  session: { testUser: { uid: '12345' } }
};

// to abstract to utilities
const flushPromises = () => new Promise(resolve => setImmediate(resolve));


describe('Adding a todo', () => {
  const [store, wrapper] = renderAppWithState(initialState);

  it('should initially render with the initialState', () => {
    expect(store.getState()).toEqual(initialState);
  });

  //const todoInput = wrapper.find('');

});