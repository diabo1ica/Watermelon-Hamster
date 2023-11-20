import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import * as ImagePicker from "expo-image-picker";

const UploadImageComponent = ({selectedImage, setSelectedImage}) => {

  const checkPermissions = async () => {
    // we don't need to request permission for Media library
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      alert("Please grant camera permissions in settings.");
    }
  };


  useEffect(() => {
    checkPermissions();
  }, []);

    // Show image picker
    const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      console.log(result.assets);
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    };
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Upload group image</Text>
      {selectedImage && (
        <Image source={{uri:selectedImage}} style={styles.previewImage} />
      )}
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
