import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ leftComponent, centerComponent, rightComponent }) => {
  return (
    <View style={styles.header}>
      <View style={styles.section}>{leftComponent}</View>
      <View style={styles.section}>{centerComponent}</View>
      <View style={styles.section}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    backgroundColor: '#f7287b',
    paddingHorizontal: 10,
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Header;
