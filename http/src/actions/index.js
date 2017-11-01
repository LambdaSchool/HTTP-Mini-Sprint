import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    const friendsEndpoint = 'http://localhost:5000/friends'; //endpoint is a specific url on server
    const friends = axios.get(friendsEndpoint);

    console.log('friends', friends);

    return {
        type: GET_FRIENDS,
        payload: friends,
    };
};