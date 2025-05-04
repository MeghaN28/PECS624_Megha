import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
/*Displays three tabs: All, Active, and Completed.

Clicking a tab updates the filter state in App.js to show the desired todos.

Highlights the currently selected tab. */
const TabBar = ({ type, setType }) => {
  return (
    <View style={styles.container}>
      {['All', 'Active', 'Completed'].map((t) => (
        <TouchableHighlight
          key={t}
          onPress={() => setType(t)}
          style={[styles.tab, type === t && styles.activeTab]}
          underlayColor="#efefef"
        >
          <Text style={[styles.tabText, type === t && styles.activeTabText]}>
            {t}
          </Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  tabText: {
    color: '#666',
  },
  activeTab: {
    backgroundColor: '#666',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TabBar;
