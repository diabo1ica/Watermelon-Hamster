import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubmitButton = ({ text, onPress, disabled }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.loginContainer, disabled && styles.disabledContainer]}
        onPress={onPress}
      >
        <Text style={[styles.loginText, disabled && styles.disabledText]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 360,
    height: 46,
  },
  loginContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AF66CC', // Change the background color as needed
    borderRadius: 25,
    color: 'white',
    flex: 1,
    width: '100%',
    height: 46,
  },
  loginText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  disabledContainer: {
    backgroundColor: '#CCCCCC', // Change the background color for disabled state
    opacity: 0.7, // Adjust opacity for disabled state
  },
  disabledText: {
    color: '#999999', // Change the text color for disabled state
  },
});

export default SubmitButton;
