// EditProfilePage.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditProfilePage = () => {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        {/* Profile Photo */}
        <View style={styles.profilePhotoContainer}>
            <Image
            style={styles.profilePhoto}
            source={require('../assets/badmin.jpg')}
            />
        </View>
        {/* Input Fields for Editing Profile */}
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />

        {/* Save Changes Button */}
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('ProfilePage')}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items at the top of the container
    padding: 16,
    backgroundColor: '#1A1A1A',
  },
  profilePhotoContainer: {
    flex: 0.6,
    justifyContent: 'center', // Center the content vertically
  },
  profilePhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white', // Text color
    borderRadius: 15,
  },
  saveButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#1A1A1A',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '30%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgb(241, 71, 248)',
    marginBottom: 20,
  },
  saveButtonText: {
    color: 'white',
  },
});

export default EditProfilePage;
