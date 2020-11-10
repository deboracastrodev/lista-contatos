import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
//https://randomuser.me/api/?nat=BR&results=5
export default function App() {
  return (
    <View>
      <Header title="Contatos"></Header>

    </View>
  );
}
