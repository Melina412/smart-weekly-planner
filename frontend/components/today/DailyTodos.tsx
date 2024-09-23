import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import Todo from '@/components/today/Todo';
import { todos } from '@/assets/sampleData';

export default function DailyTodos() {
  return (
    <View style={styles.container}>
      <Text>Daily Todos</Text>
      <View style={styles.wrapper}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginHorizontal: 5,
    // border
    // borderWidth: 1,
    // borderStyle: 'dashed',
    // borderColor: 'lightgreen',
  },
  wrapper: {
    gap: 5,
  },
});
