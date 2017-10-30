import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <FriendsList />
       <NewFriend />
      </div>
    );
  }
}

export default App;
