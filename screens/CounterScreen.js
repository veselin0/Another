import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { count: number Ç
  // action === { typa: 'icremenmt' || 'decrement', payload: 1 }

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <View style={styles.space}>
        <Button title="Increase" onPress={() => dispatch({ type: 'increment', payload: 1 })} />
      </View>
      <View style={styles.space}>
        <Button title="decrease" onPress={() => dispatch({ type: 'decrement', payload: 1 })} />
      </View>
      <View style={styles.space}>
        <Text style={styles.text}>Current Count: {state.count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  space: {
    marginVertical: 12,
  },
  text: {
    fontSize: 30,
  },
});
