// Countries/Countries.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Countries extends React.Component {
  navigate = (countryItem) => {
    this.props.navigation.navigate('Country', { country: countryItem });
  };

  render() {
    const { countries } = this.props;

    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {!countries.length && <CenterMessage message="No countries added yet!" />}
          {countries.map((item, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => this.navigate(item)}>
              <View style={styles.countryContainer}>
                <Text style={styles.countryName}>{item.country}</Text>
                <Text style={styles.currency}>{item.currency}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  countryName: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
});
