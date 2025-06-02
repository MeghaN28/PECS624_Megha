import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './src/AppTab';

export default class App extends React.Component {
  state = {
    cities: [],
    countries: [],
  };

  addCity = (city) => {
    this.setState((prevState) => ({
      cities: [...prevState.cities, city],
    }));
  };

  addCountry = (country) => {
    this.setState((prevState) => ({
      countries: [...prevState.countries, country],
    }));
  };

  render() {
    return (
      <NavigationContainer>
        <AppTabs
          cities={this.state.cities}
          addCity={this.addCity}
          countries={this.state.countries}
          addCountry={this.addCountry}
        />
      </NavigationContainer>
    );
  }
}
