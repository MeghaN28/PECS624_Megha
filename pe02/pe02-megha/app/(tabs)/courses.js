//Importing necessary modules and assets
import styles from './styles';
import Icon from '../../assets/images/icon.png';
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';

const CoursesComponent = () => { //arrow function
    // State to store the user's favorite course
    const [favoriteCourse, setFavoriteCourse] = useState('');
  
    return (
      <ScrollView style={styles.container}> {/*scroll view to make content scrollable*/}
        <Image source={Icon} style={styles.logo} />
  
        <View style={styles.inputSection}>{/* View for input section */}
          <Text style={styles.label}>Which course did you like?</Text>
          <TextInput
            style={styles.input}
            placeholder="ex. CS624"
            value={favoriteCourse}
            onChangeText={setFavoriteCourse}
          />
            {/* Display user's favorite course if they have entered one */}
          {favoriteCourse ? (
            <Text style={styles.favorite}>You like: {favoriteCourse}</Text>
          ) : null}
        </View>
         {/* Section for core course requirements */}
        <View style={styles.section}>
          <Text style={styles.header}>Core Requirements (24 credits)</Text>
          <Text style={styles.course}>CS 504 Software Engineering</Text>
          <Text style={styles.course}>CS 506 Programming for Computing</Text>
          <Text style={styles.course}>CS 519 Cloud Computing Overview</Text>
          <Text style={styles.course}>CS 533 Computer Architecture</Text>
          <Text style={styles.course}>CS 547 Secure Systems and Programs</Text>
          <Text style={styles.course}>CS 622 Discrete Math and Algorithms for Computing</Text>
          <Text style={styles.course}>DS 510 Artificial Intelligence for Data Science</Text>
          <Text style={styles.course}>DS 620 Machine Learning & Deep Learning</Text>
        </View>
         {/* Section for depth of study */}
        <View style={styles.section}>
          <Text style={styles.header}>Depth of Study (6 credits)</Text>
          <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
          <Text style={styles.course}>CS 628 Full-Stack Development - Web App</Text>
        </View>
          {/* Section for capstone course */}
        <View style={styles.section}>
          <Text style={styles.header}>Capstone (6 credits)</Text>
          <Text style={styles.course}>CS 690 Computer Science Capstone</Text>
        </View>
      </ScrollView>
    );
  };
  
  export default CoursesComponent;

