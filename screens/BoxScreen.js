import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BoxScreen() {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}>
        <Text>Child #1</Text>
      </View>
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle}>
          <Text>Child #2</Text>
        </View>
      </View>
      <View style={styles.viewThreeStyle}>
        <Text>Child #3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    borderWidth: 1,
    backgroundColor: 'pink',
    height: 50,
    width: 50,
  },
  viewTwoStyle: {
    borderWidth: 1,
    backgroundColor: 'lightgreen',
    height: 50,
    width: 50,
    
  },
  viewThreeStyle: {
    borderWidth: 1,
    backgroundColor: 'blueviolet',
    height: 50,
    width: 50,
  },
  viewTwoParent: {
    height: 100,
    justifyContent: 'flex-end',
  },
});
