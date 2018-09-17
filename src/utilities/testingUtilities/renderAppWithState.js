// article: https://hackernoon.com/low-effort-high-value-integration-tests-in-redux-apps-d3a590bd9fd5

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from '../../components/App';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Boilerplate/utility function - accepts state object, 
// renders app and returns the enzyme wrapper object
export default function renderAppWithState(initialState) {
  //const store = createStore(state);

  const middleware = [thunk];
  const mockStore = configureStore(middleware);
  const store = mockStore(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return [store, wrapper];
};

/* Usage:

import renderAppWithState from './renderAppWithState';
const [, wrapper] = renderAppWithState({ foo: 'bar' });
wrapper
  .find('input')
  .simulate('change', { target: { value: 'hello' } });
*/


/* Nock example

import nock from 'nock';
nock('https://example.com/api')
  .get('/12345')
  .reply(200, { foo: 'bar' });
// the next request to https://example.com/api/12345 from anywhere
// in the code will succeed with { foo: ‘bar’ } as the response body
*/

/* Example for submission

describe('Submitting a form', () => {
  const [store, wrapper] = renderAppWithState({ name: 'John Doe' });

  // Part of testing STATE
  expect(store.getState()).toEqual({
    name: 'John Doe',
    confirmationVisible: false
  });

  const submitButton = wrapper.find('[type="submit"]');
  
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
  it('sends the data and shows the confirmation page' () => {
    nock('https://myapp.con/api').post('/12345').reply(200);
    submitButton.simulate('click');

    return flushAllPromises().then(() => {
      // verify what happened:

      // MARKUP - to make sure the UI is modified correctly
      // using Jest's snapshot feature - https://jestjs.io/docs/en/snapshot-testing

      // STATE - make sure state is correct
      expect(store.getState()).toEqual({
        name: 'John Doe',
        confirmationVisible: true // changes after submit
      });

      // DISPATCHED ACTIONS - assert on the sequence of actions dispatched
      // use redux-mock-store library, which creates an array of dispatched actions
      // once the mockStore is created, it can assert on the sequences of dispatche actions
      expect(store.getActions()).toEqual([
        { type: 'SUBMIT_FORM_START' },
        { type: 'SUBMIT_FORM_SUCCESS' }
      ])
    })
  })
})

*/