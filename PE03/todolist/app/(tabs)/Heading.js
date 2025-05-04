import { View, Text, StyleSheet } from 'react-native'

/*
Displays a heading (like “Todo List”).

The component serves only for visual presentation of the title.
*/
const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>todos</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 80
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175, 47, 47, 0.25)',
    fontWeight: '100'
  },
});

export default Heading;