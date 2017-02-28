import { ADD_COMMENT } from '../actions/types';

const initialState = { all: [], filter: null };

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
    debugger;
      return { ...state, all: [ ...state.all, action.payload ] };
  }

  return state;
}
