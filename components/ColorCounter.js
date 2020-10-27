import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

export default function ColorCounter({ color }) {
  return (
    <View style={styles.space}>
      <Text>{color}</Text>
      <View style={styles.space}>
        <Button title={`Increase ${color}`} />
      </View>
      <View style={styles.space}>
        <Button title={`Decrease ${color}`} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  space: {
    marginVertical: 12,
  },
});
