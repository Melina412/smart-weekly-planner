import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';

export default function DailyReminder() {
  return (
    <View style={styles.container}>
      <Text>Reminder</Text>
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
    borderColor: 'lightpink',
  },
});
