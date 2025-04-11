import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View,Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
        <View style={styles.yellowBox}>
      <Text style={styles.text}>Megha</Text>
      <Text style={styles.text}>Master in Computer Science</Text>
      <Text style={styles.text}>City University of Seattle</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  yellowBox: {
    width: 250,
    height: 250,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, 
  },
  text: {
    backgroundColor: 'yellow',
    padding: 10,
    margin: 5,
    fontSize: 18,
  },});
