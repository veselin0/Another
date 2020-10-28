import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function TextScreen() {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue) }
      />
      <Text>Password must be longer than 5 characters</Text>
      {password === 'gotcha' ? <Text>Access Granted!</Text> : <Text>Wrong! Try again!</Text>  }
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
