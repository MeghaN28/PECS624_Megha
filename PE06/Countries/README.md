# Input

The application takes user inputs through forms where users can add new cities with their respective countries, or add new countries along with the currency they use. These inputs are collected via `TextInput` components in React Native. The inputs are validated to ensure no field is left blank before submission.

# Process

Upon form submission, a unique ID is generated using `uuid.v4()` and a new object representing the city or country is created. This object is then passed to a prop function (`addCity` or `addCountry`) which updates the parent component’s state. Navigation is used to move between screens using stack and tab navigators provided by `@react-navigation`.

# Output

The updated lists of Cities and Countries are displayed using scrollable views. Each entry shows relevant data such as city name and country, or country and currency. A message is shown when no data is available.


