import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import type { Task, Appointment } from '@/assets/sampleData';

export default function Timeblock({ task }: { task: Task | Appointment }) {
  const startHour = task.startTime.getHours();
  const startMinutes = task.startTime.getMinutes();
  const endHour = task.endTime.getHours();
  const endMinutes = task.endTime.getMinutes();

  const duration = endHour * 60 + endMinutes - (startHour * 60 + startMinutes);
  const topPosition = startHour * 60 + startMinutes;

  return (
    <View
      //   key={task.id}
      style={[
        styles.taskBlock,
        {
          top: topPosition,
          height: duration,
        },
      ]}>
      <Text>{task.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskBlock: {
    position: 'absolute',
    left: 40, // Abstand von der Zeitachse
    right: 0,
    backgroundColor: 'lightblue',
    borderRadius: 4,
    padding: 5,
  },
});
