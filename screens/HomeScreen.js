import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>Hi Gotcha!</Text>
      <View style={styles.btn}>
        <Button
          title="Go to Components demo"
          onPress={() => navigation.navigate('Components')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate('List')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Go to Image Demo"
          onPress={() => navigation.navigate('Image')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Go to Counter Demo"
          onPress={() => navigation.navigate('Counter')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Go to Color Demo"
          onPress={() => navigation.navigate('Color')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Go to Square Demo"
          onPress={() => navigation.navigate('Square')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Go to Text Input Demo"
          onPress={() => navigation.navigate('Text')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Go to Box Demo"
          onPress={() => navigation.navigate('Box')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  btn: {
    marginVertical: 10,
  },
});
