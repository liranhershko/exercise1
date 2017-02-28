import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import comments from './comments_reducer';

const rootReducer = combineReducers({
  form,
  comments
});

export default rootReducer;
