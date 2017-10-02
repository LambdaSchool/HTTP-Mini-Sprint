import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    const data = axios.get('http://localhost:5000/friends');
    console.log(data);
    return{
        type:GET_FRIENDS,
        payload: data


    };

};