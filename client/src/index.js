import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FriendsList from './components/FriendsList';
import { BrowserRouter as Router, Route } from 'react-router-dom';



ReactDOM.render(
    <Router>
        <div>
            <h2>Friends List</h2>
            <Route exact path="/friends" component={FriendsList} />
            {/* <Route path="/friends/:id" component={friend} /> */}
        </div>
    </Router>,
    document.getElementById('root')
);