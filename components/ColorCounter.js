import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

export default function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View style={styles.space}>
      <Text>{color}</Text>
      <View style={styles.space}>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      </View>
      <View style={styles.space}>
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  space: {
    marginVertical: 12,
  },
});
