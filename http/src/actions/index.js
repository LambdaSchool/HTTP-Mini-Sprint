import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

// // original
// export const getFriends = () => {
//     // Add the code for this action
// };

// // paste from README.md
// export const getFriends = () => {
//   const promise = axios.get('http://example.com');
//   return {
//       type: ACTION_TYPE,
//       payload: promise
//   };
// };

// Hint: The URL you want to be fetching from is http://localhost:5000/friends.
export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
      type: GET_FRIENDS,
      payload: promise
  };
};
