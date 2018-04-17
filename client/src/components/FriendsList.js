import React, { Component } from 'react';
import axios from 'axios';
import './Friends.css';

// so this is a way of exporting a class the moment it is built
export default class FriendsList extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }
  // if the component is mounted to the DOM,
  // then perform this action on it
  // in this case fetchUsers()
  componentDidMount(){
    this.fetchUsers()
  }

  fetchUsers = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err))
  }
}

export default FriendsList;
