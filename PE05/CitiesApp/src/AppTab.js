import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cities from './Cities/Cities'; // your existing Cities screen
import AddCountry from './AddCountry/AddCountry';
import Countries from './Countries/Countries';

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
        {(tabProps) => <Countries {...tabProps} countries={props.countries} />
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppTabs;
