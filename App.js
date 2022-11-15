import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListContact from './src/screens/ListContacts';

export default function App() {
  return (
    <View style={styles.container}>
      <ListContact/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2e0fa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:80
  },
});
