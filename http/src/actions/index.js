import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
  const endpoint = 'http://localhost:5000/friends';

  const friends = axios.get(endpoint);

  const friends2 = async () => await(await fetch(endpoint)).json();

  return {
    type: GET_FRIENDS,
    payload: friends2(),
  } 
};