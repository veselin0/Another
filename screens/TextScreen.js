import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function TextScreen() {
  return (
    <View>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 16,
    borderColor: 'green',
    borderWidth: 4,
  },
});
