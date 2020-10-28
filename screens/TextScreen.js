import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function TextScreen() {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue) }
      />
      <Text>My name is: {name}</Text>
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
