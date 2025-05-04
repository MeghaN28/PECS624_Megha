import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Heading from './Heading';
import Input from './Input';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [type, setType] = useState<'All' | 'Active' | 'Completed'>('All');

  const handleInputChange = (text: string) => {
    console.log('Input Value:', text);
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.content}
      >
        <View>
          <Heading />
          <Input 
            inputValue={inputValue}
            inputChange={handleInputChange} 
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
