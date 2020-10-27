import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function ComponentsScreen() {
  const name = 'Gotcha';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});
