import React, { useState } from 'react';
import {
  Alert,
  Text,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import UploadImageComponent from '../../components/UploadImageComponent';
import FormInputs from '../../components/FormInputs';
import SubmitButton from '../../components/SubmitButton';
import DescriptionInput from '../../components/DescriptionInput';
import {
  ref,
  push,
  set,
  serverTimestamp,
} from 'firebase/database';
import { db } from '../../components/AuthUtils';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';

const CreateGroup = () => {
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState('');
  const [groupLocation, setGroupLocation] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
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

      setLoading(true);

      const newGroupRef = push(groupsRef);

      const groupData = {
        name: groupName,
        location: groupLocation,
        description: groupDescription,
        image: selectedImage, // Directly use the base64 string
        createdAt: serverTimestamp(),
      };

      await set(newGroupRef, groupData);

      setLoading(false);

      Alert.alert('Success', 'Group created successfully.');

      navigation.navigate('Groups');
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      Alert.alert('Error', 'Failed to create the group. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header1}>Create Group</Text>
      <UploadImageComponent
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <FormInputs placeholder='Group Name' onChangeText={setGroupName} />
      <FormInputs
        placeholder='Group Location'
        onChangeText={setGroupLocation}
      />
      <DescriptionInput
        placeholder='Group Description'
        onChangeText={setGroupDescription}
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <Progress.CircleSnail color={['red', 'green', 'blue']} />
          <Text style={styles.newGroup}>Creating Group</Text>
        </View>
      )}
      <SubmitButton
        disabled={loading}
        text='Create Group'
        onPress={handleCreateGroup}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: '#1A1A1A',
    padding: 16,
    paddingBottom: 100,
  },
  progressBar: {
    marginTop: 10,
    marginBottom: 10,
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
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
