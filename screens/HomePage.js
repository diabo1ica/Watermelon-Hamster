import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import CardSlider from '../components/HomeComponents/CardSlider';
import ColumnCardSlider from '../components/HomeComponents/ColumnCardSlider';

const HomePage = ( { navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.componentTitle}>{'Events Near You'}</Text>
      <CardSlider navigation={navigation}/>
      <Text style={styles.componentTitle}>{'New Group Recomendations'}</Text>
      <ColumnCardSlider navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 16,
    backgroundColor: '#1A1A1A',
  },
  componentTitle: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    lineHeight: 22,
    marginBottom: 15,
  }
});

export default HomePage;