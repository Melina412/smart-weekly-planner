import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import type { Todo } from '@/assets/sampleData';

export default function Todo({ todo }: { todo: Todo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.date}>due: {todo.dueDate?.toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: 'lightgreen',
    borderRadius: 4,
    padding: 5,
  },
  title: {
    fontSize: 14,
  },
  date: {
    fontSize: 12,
    color: 'slategrey',
  },
});
