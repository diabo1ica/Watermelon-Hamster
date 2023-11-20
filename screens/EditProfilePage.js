// EditProfilePage.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditProfilePage = () => {
  return (
    <View style={styles.container}>
      {/* Input Fields for Editing Profile */}
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      {/* Save Changes Button */}
      <Button title="Save Changes" onPress={() => console.log('Saving changes')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default EditProfilePage;