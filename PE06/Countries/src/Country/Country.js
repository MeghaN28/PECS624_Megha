// Country.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const Country = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{country.country}</Text>
      <Text style={styles.text}>Currency: {country.currency}</Text>
      <Text style={styles.text}>Currency Used: {country.currencyUsed ? 'Yes' : 'No'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    color: 'white',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default Country;
