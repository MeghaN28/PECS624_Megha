// index.js (or App.js)
import React from 'react';
import { registerRootComponent } from 'expo'; // If using Expo
import CoursesComponent from './courses';

const App = () => {
  return <CoursesComponent />;
};

export default App;
