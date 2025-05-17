import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

const userImage = require('../assets/user.png');

const data = [
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description:
      'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Jane Smith',
    occupation: 'Frontend Engineer',
    description:
      'Jane is a passionate UI/UX developer and enjoys building beautiful interfaces with React Native.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Mark Wilson',
    occupation: 'Software Architect',
    description:
      'Mark designs scalable mobile architecture and mentors junior React Native devs.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Emily Johnson',
    occupation: 'Mobile Dev',
    description:
      'Emily builds seamless experiences with React Native for cross-platform apps.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Chris Evans',
    occupation: 'App Designer',
    description:
      'Chris blends design and development skills to ship amazing mobile experiences.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Sara Lee',
    occupation: 'Engineer',
    description:
      'Sara enjoys coding and designing mobile apps that solve real-world problems.',
    showThumbnail: true
  }
];

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [index]: { showThumbnail: { $set: showThumbnail } }
      })
    });
  };

  render() {
    const list = this.state.data.map((item, index) => {
      const { image, name, occupation, description, showThumbnail } = item;
      return (
        <View style={styles.cardWrapper} key={'card-' + index}>
          <ProfileCard
            image={image}
            name={name}
            occupation={occupation}
            description={description}
            onPress={() => this.handleProfileCardPress(index)}
            showThumbnail={showThumbnail}
          />
        </View>
      );
    });

    return (
      <ScrollView contentContainerStyle={styles.galleryContainer}>
        {list}
      </ScrollView>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
  },
  cardWrapper: {
    width: '48%', // two columns
    marginBottom: 15
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: profileCardColor,
    padding: 15,
    height: 360,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    paddingTop: 10,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 5 },
        shadowOpacity: 1
      },
      android: {
        elevation: 10
      }
    })
  },
  cardImage: {
    width: 70,
    height: 70
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center'
  },
  cardOccupationContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: 5
  },
  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  cardDescription: {
    fontStyle: 'italic',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5
  },
  cardThumbnail: {
    transform: [{ scale: 0.2 }]
  }
});
