import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadImageComponent = ({ selectedImage, setSelectedImage }) => {
  const checkPermissions = async () => {
    // we don't need to request permission for the Media library
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert('Please grant media library permissions in settings.');
    }
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  // Show image picker
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
      });
      console.log(result.assets);
      if (!result.canceled) {
        setSelectedImage(result.base64);
        // Call the handleImagePicked function when an image is picked
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Upload group image</Text>
      {selectedImage && <Image source={{ uri: `data:image/jpeg;base64,${selectedImage}` }} style={styles.previewImage} />}
      <Button title="Upload" onPress={pickImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#333333',
    padding: 10,
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  previewImage: {
    width: 200,
    height: 300,
    marginVertical: 10,
  },
});

export default UploadImageComponent;
