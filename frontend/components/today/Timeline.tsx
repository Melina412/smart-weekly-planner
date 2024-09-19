import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../Themed';
import { tasks } from '@/assets/sampleData';

export default function Timeline() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Zeitachse */}
        <View style={styles.timeline}>
          {[...Array(24).keys()].map((hour) => (
            <View testID='hourBlock' key={hour} style={styles.hourBlock}>
              <View testID='hourTextWrapper' style={styles.hourTextWrapper}>
                <Text style={styles.hourText}>{String(hour).padStart(2, '0')}:00</Text>
              </View>
              <View testID='hourLine' style={styles.hourLine}></View>
            </View>
          ))}
        </View>

        {/* Zeitblöcke */}
        {tasks.map((task) => {
          // Berechne Position und Höhe des Blocks
          const startHour = task.startTime.getHours();
          const startMinutes = task.startTime.getMinutes();
          const endHour = task.endTime.getHours();
          const endMinutes = task.endTime.getMinutes();

          const duration = endHour * 60 + endMinutes - (startHour * 60 + startMinutes);
          const topPosition = startHour * 60 + startMinutes;

          return (
            <View
              key={task.id}
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
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1.5, // in dem fall für die relative höhe
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
  },
  timeline: {
    position: 'relative',
  },
  hourBlock: {
    height: 60, // 60px = 1 Stunde
    // borderBottomWidth: 1,
    // borderColor: '#ddd',
    // paddingLeft: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    // gap: 5,
  },
  hourTextWrapper: {
    flex: 0.1,
    paddingStart: 2,
  },
  hourText: {
    fontSize: 12,
    top: '-15%',
    color: 'slategrey',
  },
  hourLine: {
    // backgroundColor: 'teal',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    // paddingLeft: 10,
    flex: 0.9,
  },
  taskBlock: {
    position: 'absolute',
    left: 40, // Abstand von der Zeitachse
    right: 0,
    backgroundColor: 'lightblue',
    borderRadius: 4,
    padding: 5,
  },
});
