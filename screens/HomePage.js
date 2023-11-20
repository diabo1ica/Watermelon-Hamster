import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import CardSlider from '../components/HomeComponents/CardSlider';
import ColumnCardSlider from '../components/HomeComponents/ColumnCardSlider';

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.componentTitle}>{'Recomendations Near You'}</Text>
        <CardSlider/>
        <Text style={styles.componentTitle}>{'New Group Recomendations'}</Text>
        <ColumnCardSlider/>
    </ScrollView>
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