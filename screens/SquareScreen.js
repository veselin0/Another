import React, { useReducer } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: COLOR_INCREMENT || -COLOR_INCREMENT }

  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return  state;
  }
};

export default function SquareScreen() {
  const [stat, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Green"
      />
      <View
        style={[
          styles.colorBox,
          { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  colorBox: {
    height: 150,
    width: 150,
    marginVertical: 12,
  },
});
