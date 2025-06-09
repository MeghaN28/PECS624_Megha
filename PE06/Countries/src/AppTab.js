// AppTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cities from './Cities/Cities';
import AddCountry from './AddCountry/AddCountry';
import CountriesNav from './Countries/CountriesNav';

const Tab = createBottomTabNavigator();

const AppTabs = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cities">
        {(tabProps) => <Cities {...tabProps} cities={props.cities} />}
      </Tab.Screen>
      <Tab.Screen name="AddCountry">
        {(tabProps) => <AddCountry {...tabProps} addCountry={props.addCountry} />}
      </Tab.Screen>
      <Tab.Screen name="Countries">
        {(tabProps) => <CountriesNav {...tabProps} countries={props.countries} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppTabs;
