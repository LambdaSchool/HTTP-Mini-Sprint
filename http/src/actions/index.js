import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    const apiUrl= 'http://localhost:5000/friends';
    const friendRequest = axios.get(apiUrl)
    console.log('actions', friendRequest);

    // redux-promise middleware takes care of resolving the promise  
    return {
        type: GET_FRIENDS,
        payload: friendRequest
    };
};

// enter redux-promise and axios

// http < is stateless --> server does not know who you are
// http methods are: GET, POST, PUT, and DELETE 
// GET = client wants information from server
// POST = create a resource on the server
// PUT = modify information on the server
// DELETE = remove information from the server
// most operations are asynchronous
// Promise: substitue for callbacks
// .then() --> promise succeeded .catch() --> handle that error