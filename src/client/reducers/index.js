import { combineReducers } from 'redux';
import toggle from './toggle-reducer';

const reducer = combineReducers({
  toggle
  // all our reducers go here
});

export default reducer;
