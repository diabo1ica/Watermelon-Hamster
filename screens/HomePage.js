import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardSlider from '../components/HomeComponents/CardSlider';
import ColumnCardSlider from '../components/HomeComponents/ColumnCardSlider';
import LogoutButton from '../components/LogoutButton';
import { auth } from '../components/AuthUtils';
import { signOut } from 'firebase/auth';

const handleLogout = async () => {
  try {
    await signOut(auth);
    // Additional logic after successful logout (if needed)
  } catch (error) {
    console.error('Error logging out:', error.message);
  }
};

const HomePage = ( { navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutButton onPress={() => handleLogout()} />
      ),
    });
  }, [navigation]);
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