import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

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

const styles = StyleSheet.create({
  colorBox: {
    height: 100,
    width: 100,
    marginVertical: 12,
  },
});
