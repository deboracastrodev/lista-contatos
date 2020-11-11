import Axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import axios from 'axios';

import Header from './src/components/Header';
import UsersList from './src/components/UsersList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    axios
      .get('https://randomuser.me/api/?nat=BR&results=5')
      .then(response => {
        const { results } = response.data;
        this.setState({
          users: results
        });
      });
  }

  render() {
    return (
      <View>
        <Header title="Contatos"></Header>
        <UsersList users={ this.state.users } />
      </View>
    );
  }

}
