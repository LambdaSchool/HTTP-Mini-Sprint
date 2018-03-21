import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  state = {
    friends : [],
  };

componentDidMount() {
  axios.get('http://localhost:5000/friends')
  .then(response => response.data)
  .then(data => this.setState({ data }))
  .catch(err => console.log((err))
  )};
}

  render() 
      return (
      <div>
        <div className="friend-title">Lambda Friends</div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friends.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );

export default FriendsList;
