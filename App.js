import 'react-native-get-random-values';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'milk' },
    { id: uuidv4(), text: 'eggs' },
    { id: uuidv4(), text: 'bread' },
    { id: uuidv4(), text: 'juice' },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
