## HTTP Mini Sprint

### Topics
  * Axios for making HTTP requests
  * Redux-Promise library
  * JavaScript Promises

In this mini sprint, you'll be eased into the code base for the actual HTTP sprint. Upon cloning this repository down, take a moment to look over the different pieces that are already in here. There shouldn't be anything too scary; it's just another React app that was created with `create-react-app`. The important bits are the actions, components, and reducers directories.

To run the mini sprint code, first run `npm install` in the root directory. Then run `node server.js`. In _another_ terminal, cd into the `http` directory, run `npm install`, then `npm start`. You'll see that we have a non-functioning React/Redux app with some compilation errors. 

The FriendsList component renders an array of friend objects. This array needs to be fetched from an external server. Your job for this mini sprint is to complete the GET request in order to populate the FriendsList component. Inside `index.js` in the actions directory, there is a `getFriends` action creator. This is where the GET request should go. Since Redux-Promise is already in place (you can see it being applied in the app's main `index.js` file), you'll follow the pattern we talked about at the end of the lecture. In case you missed it, it looks like this:

```
const action = () => {
    const promise = axios.get('http://example.com');
    return {
        type: ACTION_TYPE,
        payload: promise
    };
};
```

Hint: The URL you want to be fetching from is `http://localhost:5000/friends`. 

Once you get through the sprint and have the list of friends being rendered by the FriendsList component, take some time to do some reading on Promises, Ajax, and any of the other topics we touched upon during the lecture. 

### Helpful Links
  * [Promises for Dummies](https://scotch.io/tutorials/javascript-promises-for-dummies) -- A pretty thorough and cohesive writeup on Promises. I would suggest starting here first.
  * [AJAX Documentation on MDN](https://developer.mozilla.org/en-US/docs/AJAX) -- A good place to start reading about and delving into the different parts that make up the AJAX standard.
  * [JavaScript Promises Plain and Simple](https://coligo.io/javascript-promises-plain-simple/) -- This article talks about using Promises in the context of making HTTP requests, which means it's pretty perfect for our use case. Note that in their examples they use the `fetch` API, which is an alternative to Axios.

