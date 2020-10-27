import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';

export default function SquareScreen() {
  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Blue" />
      <ColorCounter color="Green" />
    </View>
  );
}

const styles = StyleSheet.create({});
