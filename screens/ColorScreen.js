import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList, Dimensions } from 'react-native';

export default function ColorScreen() {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        numColumns={4}
        renderItem={({ item }) => {
          return (
            <View
              style={[
                styles.colorBox,
                {
                  backgroundColor: item,
                },
              ]}
            />
          );
        }}
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  colorBox: {
    height: SCREEN_WIDTH / 4,
    width: SCREEN_WIDTH / 4,
    marginVertical: 0,
  },
});
