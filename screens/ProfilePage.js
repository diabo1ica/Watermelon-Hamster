// ProfileScreen.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ColumnCardSlider from '../components/HomeComponents/ColumnCardSlider';
import CardSlider from '../components/HomeComponents/CardSlider';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
        {/* Profile Photo and User Info */}
        <View style={styles.profileContainer}>
            {/* Profile Photo */}
            <View style={styles.profilePhotoContainer}>
            <Image
                style={styles.profilePhoto}
                source={require('../assets/homeImages/badmin.jpg')} // Update with the actual path to profile photo
            />
            </View>

            {/* User Info */}
            <View style={styles.userInfoContainer}>
            <Text style={styles.username}>James Smith</Text>
            <View style={styles.countsContainer}>
                <View style={styles.countColumn}>
                <Text style={styles.countsLabel}>120</Text>
                <Text style={styles.counts}>Followers</Text>
                </View>
                <View style={styles.countColumn}>
                <Text style={styles.countsLabel}>50</Text>
                <Text style={styles.counts}>Groups</Text>
                </View>
            </View>
            </View>
        </View>

        {/* Edit Profile Button */}
        <View style={styles.editProfileButtonContainer}>
            <Button
            title="Edit Profile"
            onPress={() => navigation.navigate('EditProfilePage')}
            color="#3897f1" // Instagram blue color
            />
        </View>
        <ScrollView style={styles.container}>
        <Text style={styles.componentTitle}>{'Your Groups'}</Text>
        <ColumnCardSlider/>
        </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1A1A1A'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%', // Ensure that the container does not exceed the screen width
    marginVertical: 20,
  },
  profilePhotoContainer: {
    marginRight: 20,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  userInfoContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'right',
    marginBottom: 5,
  },
  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
  },
  countColumn: {
    alignItems: 'center',
  },
  countsLabel: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
  counts: {
    fontSize: 14,
    color: 'white',
  },
  editProfileButtonContainer: {
    marginTop: 20,
    width: '50%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  container: {
    height: '100%',
    padding: 10,
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

export default ProfileScreen;
