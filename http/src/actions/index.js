import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    let payload = {

    }
    const apiUrl = 'http://localhost:5000/friends';
    const friendsRequest = axios.get(apiUrl);

    return {
        type: GET_FRIENDS,
        payload: friendsRequest,
    };
};

// enter redux-promise and axios

// http is stateless
// Methods: 
// GET - client wants information from the server. 
// POST - create a resource
// PUT - modify information
// DELETE - remove information
// most operations are asynchronous
//Promise: substitute for callbacks

// var promise = new Promise();

// promise
// .then(function(results)) {
// //this means the promise succeeded
// })

// .catch(function(error)) {
//     //handle that error
// });
