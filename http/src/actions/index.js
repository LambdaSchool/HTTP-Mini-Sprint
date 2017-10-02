import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    const promise = axios.get('http://localhost:5000/friends'); // get data from URL
    return { // firing action object
      type:GET_FRIENDS,
      payload: promise
    }
};