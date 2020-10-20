import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListItem({ item, deleteItem }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: 'lightgrey',
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
  },
});
