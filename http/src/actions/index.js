import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

export const getFriends = () => {
    // Add the code for this action
    const getFriendsPromise = axios.get('http://localhost:5000/friends');
    return {
        type: GET_FRIENDS,
        payload: getFriendsPromise
    }
};

export const addFriend = (friend) => {
    const addFriendPromise = axios.post('http://localhost:5000/new-friend', {
        name: friend.name,
        age: friend.age,
        email: friend.email
    });
    return {
        type: ADD_FRIEND,
        payload: addFriendPromise
    }
};

export const removeFriend = (friendID) => {
    const removeFriendPromise = axios.post('http://localhost:5000/remove-friend', {
        friendID: friendID
    });
    return {
        type: REMOVE_FRIEND,
        payload: removeFriendPromise
    }
};
