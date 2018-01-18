import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    const endpoint = 'http://localhost:5000/friends';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({friends: response.data })
      })
      .catch(error => {
        console.log('ERROR: ', error);
      })

    const newFriend = {
      name: 'Perry',
      email: 'perry@lambdaschool.com',
      age: 49,
      id: this.state.friends.length,
    }
    axios.post(endpoint, newFriend)
      .then(response => {
        this.setState({friends: response.data })
      })
      .catch(error => {
        console.log('ERROR: ', error);
      })
    axios
      .get(endpoint)
      .then(response => {
        this.setState({friends: response.data })
      })
      .catch(error => {
        console.log('ERROR: ', error);
      })
  }

  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsList;
