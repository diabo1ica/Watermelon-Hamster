import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardSlider from '../components/HomeComponents/CardSlider';

const HomePage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.componentTitle}>{'Reccomendations Near You'}</Text>
        <CardSlider/>
        <Text style={styles.componentTitle}>{'New Group Reccomendations'}</Text>
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
    marginBottom: 15
  }
});

export default HomePage;