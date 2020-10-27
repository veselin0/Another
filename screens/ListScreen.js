import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ListScreen() {
  const friends = [
    { name: 'Gotcha #1', age: 20 },
    { name: 'Gotcha #2', age: 45 },
    { name: 'Gotcha #3', age: 32 },
    { name: 'Gotcha #4', age: 27 },
    { name: 'Gotcha #5', age: 53 },
    { name: 'Gotcha #6', age: 30 },
    { name: 'Gotcha #7', age: 96 },
    { name: 'Gotcha #8', age: 25 },
    { name: 'Gotcha #9', age: 33 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
