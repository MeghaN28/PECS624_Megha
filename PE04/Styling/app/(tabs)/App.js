// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import ProfileGallery from './ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileGallery />
    </SafeAreaView>
  );
}
