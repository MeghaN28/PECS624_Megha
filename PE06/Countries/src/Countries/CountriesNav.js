// Countries/CountriesNav.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Countries from './Countries';
import Country from '../Country/Country';

const Stack = createStackNavigator();

const CountriesNav = (props) => (
  <Stack.Navigator>
    <Stack.Screen name="Countries">
      {(stackProps) => <Countries {...stackProps} countries={props.countries} />}
    </Stack.Screen>
    <Stack.Screen
      name="Country"
      component={Country}
      options={({ route }) => ({
        title: route.params.country.country,
        headerStyle: { backgroundColor: '#1976D2' },
        headerTintColor: 'white',
      })}
    />
  </Stack.Navigator>
);

export default CountriesNav;
