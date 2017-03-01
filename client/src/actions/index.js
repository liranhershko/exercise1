import axios from 'axios';
import { ADD_COMMENT, FETCH_COMMENTS, FILTER_COMMENTS } from './types';
import { getMd5Hash } from '../utils/utils';

const ROOT_URL = 'http://localhost:3090';
const GRAVATAR_URL = 'https://www.gravatar.com/avatar';

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

export function onFilterChange(filter) {
  return {
    type: FILTER_COMMENTS,
    payload: filter
  };
}

export function addComment({ email, message }) {
  const hash = getMd5Hash(email);
  return dispatch => {
    axios
      .post(`${ROOT_URL}/v1/comment`, {
        email,
        message,
        hash
      })
      .then(response => {
        const c = response.data.comment;
        dispatch({
          type: ADD_COMMENT,
          payload: {
            _id: c._id,
            email,
            message,
            hash
          }
        });
      });
  };
}

export function fetchComments() {
  return (dispatch, getState) => {
    axios.get(`${ROOT_URL}/v1/comment`).then(response => {
      dispatch({
        type: FETCH_COMMENTS,
        payload: response.data
      });
    });
  };
}
