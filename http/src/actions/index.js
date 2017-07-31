import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    const promise = axios.get('http://localhost:5000/friends')
    .then((res) => {
        return res;
    })
    .catch((err) => {
        console.log(err);
    });
    return {
        type: GET_FRIENDS,
        payload: promise
    };
};
