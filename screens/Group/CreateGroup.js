import React, { useState } from 'react';
import { Alert, Text, StyleSheet, ScrollView } from 'react-native';
import UploadImageComponent from '../../components/UploadImageComponent';
import FormInputs from '../../components/FormInputs';
import SubmitButton from '../../components/SubmitButton';
import DescriptionInput from '../../components/DescriptionInput';
import { ref, push, set, serverTimestamp } from 'firebase/database';
import { ref as sRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../components/AuthUtils';

const CreateGroup = () => {
  const [groupName, setGroupName] = React.useState('');
  const [groupLocation, setGroupLocation] = React.useState('');
  const [groupDescription, setGroupDescription] = React.useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const groupsRef = ref(db, 'groups');

  const handleCreateGroup = async () => {
    try {
      if (!groupName || !groupLocation || !groupDescription || !selectedImage) {
        Alert.alert(
          'Incomplete Form',
          'Please fill in all the required fields, including the image.'
        );
        return;
      }

      const newGroupRef = push(groupsRef);
      const newGroupId = newGroupRef.key;

      // Upload the image to Firebase Storage
      const imageRef = sRef(storage, `groupImages/${newGroupId}`);
      await uploadBytes(imageRef, selectedImage)

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(imageRef);

      const groupData = {
        name: groupName,
        location: groupLocation,
        description: groupDescription,
        image: imageUrl,
        createdAt: serverTimestamp(),
      };

      // Use set to create or overwrite the data at the specified location
      await set(newGroupRef, groupData);

      console.log('Group created with ID: ', newGroupId);

      // Additional logic after group creation (e.g., navigation)
    } catch (error) {
      console.error('Error creating group:', error.message);
      Alert.alert('Error', 'Failed to create the group. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header1}>Create Group</Text>
      {/* Upload Image */}
      <UploadImageComponent
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      {/* Group Name */}
      <FormInputs placeholder='Group Name' onChangeText={setGroupName} />
      {/* Group Location */}
      <FormInputs
        placeholder='Group Location'
        onChangeText={setGroupLocation}
      />
      {/* Group Description */}
      <DescriptionInput
        placeholder='Group Description'
        onChangeText={setGroupDescription}
      />
      {/* Create Group Button */}
      <SubmitButton
        disabled={false}
        text='Create Group'
        onPress={handleCreateGroup}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Use flexGrow instead of flex
    backgroundColor: '#1A1A1A',
    padding: 16,
    paddingBottom: 100,
  },
  newGroup: {
    color: 'white',
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: 'white',
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#1A1A1A',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAccount: {
    color: 'white',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333333',
    borderRadius: 100,
  },
  signUpButton: {
    color: '#AF66CC',
    fontWeight: 'bold',
  },
});

export default CreateGroup;
