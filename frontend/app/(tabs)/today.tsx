import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import Timeline from '@/components/today/Timeline';
import DailyTodos from '@/components/today/DailyTodos';
import DailyReminder from '@/components/today/DailyReminder';

export default function TabTodayScreen() {
  return (
    <View style={styles.container}>
      <Timeline />

      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />

      <View style={styles.section}>
        <DailyTodos />
        <DailyReminder />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    flex: 1, // hier auch die höhe
    gap: 10,
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 2,
    height: 1,
    width: '80%',
  },
});
