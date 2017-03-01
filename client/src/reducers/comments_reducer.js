import { ADD_COMMENT, FETCH_COMMENTS, FILTER_COMMENTS } from '../actions/types';

const initialState = { all: [], filter: '' };

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, all: [...state.all, action.payload] };
    case FETCH_COMMENTS:
      return { ...state, all: action.payload.comments };
    case FILTER_COMMENTS:
      return { ...state, filter: action.payload };
  }

  return state;
}
