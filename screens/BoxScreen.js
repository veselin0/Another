import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 300,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});
