import axios from 'axios';
import { ADD_COMMENT } from './types';
import { getMd5Hash } from '../utils/utils';

const ROOT_URL = 'http://localhost:3090';
const GRAVATAR_URL = 'https://www.gravatar.com/avatar';

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
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
        dispatch({
          type: ADD_COMMENT,
          payload: {
            email,
            message,
            hash
          }
        });
      });
  };
}

// export function addComment({ email, message }) {
//   return (dispatch, getState) => {
//     axios
//       .get(`${ROOT_URL}/v1/${localStorage.getItem('userId')}/votes`, {
//         headers: { authorization: localStorage.getItem('token') }
//       })
//       .then(response => {
//         dispatch({
//           type: FETCH_VOTES,
//           payload: response.data.votes
//         });
//       })
//       .post(`${ROOT_URL}/v1/comments`, {
//         email,
//         message
//       })
//       .then(response => {
//         dispatch({ type: ADD_COMMENT });
//       });
//   };
// }
