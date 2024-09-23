import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import type { Task, Appointment, Item } from '@/constants/types';

export default function Timeblock({ item }: { item: Item }) {
  const startHour = new Date(item?.startTime).getHours();
  const startMinutes = new Date(item?.startTime).getMinutes();
  const endHour = new Date(item?.endTime).getHours();
  const endMinutes = new Date(item?.endTime).getMinutes();

  const duration = endHour * 60 + endMinutes - (startHour * 60 + startMinutes);
  const topPosition = startHour * 60 + startMinutes;

  return (
    <View
      //   key={item.id}
      style={[
        styles.itemBlock,
        {
          top: topPosition,
          height: duration,
        },
      ]}>
      <Text>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemBlock: {
    position: 'absolute',
    left: 40, // Abstand von der Zeitachse
    right: 0,
    backgroundColor: 'lightblue',
    borderRadius: 4,
    padding: 5,
  },
});
