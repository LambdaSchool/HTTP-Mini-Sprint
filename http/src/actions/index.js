import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    // get particular url for a paritcular data or resource from the server 
    const friendsEndPoint = 'http://localhost:5000/friends';
    //the get action 
    const friends = axios .get(friendsEndPoint);
    // some time passes between sending request and getting back data or promises and the payload 
    // will be friends, which update the state and store updated and re render the application. We 
    // can use any method as long it returns a promise or even do it manually using then and catch. 
    console.log('friends', friends);
    return {
        type: GET_FRIENDS,
        payload: friends,
    }
};