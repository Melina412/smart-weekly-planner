import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';

export default function DailyTodos() {
  return (
    <View style={styles.container}>
      <Text>Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // border
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'lightgreen',
  },
});
