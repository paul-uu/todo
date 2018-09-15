import reducer from '../../../reducers/visibilityFilter';
import { SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_ACTIVE } from '../../../constants';

const initialState = SHOW_ALL;

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it('should update the visibility filter state when the SET_VISIBILITY_FILTER action is dispatched', () => {
  expect(reducer(initialState, {
    type: SET_VISIBILITY_FILTER,
    filter: SHOW_ACTIVE
  }))
  .toEqual(SHOW_ACTIVE)
});