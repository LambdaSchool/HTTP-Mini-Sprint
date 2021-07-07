import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: null,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => this.setState(() => ({ friends: response.data })))
      .catch(error => {
        console.error(error);
      });
  }


  render() {
    if(!this.state.friends) {
      return <div>Loading Friends information...</div>
    }
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
