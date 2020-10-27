import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <View style={styles.space}>
        <Button
          title="Increase"
          onPress={() => {
            // don't do this!
            //counter++;
            setCounter(counter + 1);
            console.log(counter);
          }}
        />
      </View>
      <View style={styles.space}>
        <Button
          title="decrease"
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
      </View>
      <View style={styles.space}>
        <Text>Current Count:{counter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  space: {
    marginVertical: 12,
  },
});
