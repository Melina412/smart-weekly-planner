import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../Themed';
import { tasks } from '@/assets/sampleData';
import Timeblock from '@/components/today/Timeblock';

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

        {/* Timeblock */}
        {tasks.map((task) => (
          <Timeblock key={task.id} task={task} />
        ))}
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
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  hourTextWrapper: {
    // flex: 0.1, // bei flex relationen verschiebt sich die lücke auf größeren screens -> entweder fixe größe lassen oder später für andere screens responsive machen
    width: 40,
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
    // flex: 0.9,
    width: '100%',
  },
});
