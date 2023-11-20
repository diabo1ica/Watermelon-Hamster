// ProfileScreen.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const ProfileScreen = () => {
  const navigation = useNavigation(); // Use the useNavigation hook

  return (
    <View style={styles.container}>
      {/* Profile Photo */}
      

      {/* User Info */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.counts}>Followers: 100 | Groups: 20</Text>
      </View>

      {/* Edit Profile Button */}
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('EditProfilePage')} // Use navigation.navigate
      />

      {/* Groups Section */}
      {/* Add code to display user's groups */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#1A1A1A',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  counts: {
    fontSize: 14,
    color: 'white',
  },
});

export default ProfileScreen;

