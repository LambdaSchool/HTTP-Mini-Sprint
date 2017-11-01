import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
// http://localhost:5000/friends

export const getFriends = () => {
    // Add the code for this action
    const promise = axios.get('http://localhost:5000/friends'); 
    return {
        type: GET_FRIENDS,
        payload: promise
    }
};