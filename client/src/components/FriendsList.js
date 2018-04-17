import React, { Component } from 'react';
import axios from 'axios';
import './Friends.css';

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
}

export default FriendsList;
