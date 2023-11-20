import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({text ,onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginContainer} onPress={onPress}>
        <Text style={styles.loginText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 340,
    height: 46,
    position: 'relative',
  },
  loginContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AF66CC', // Change the background color as needed
    borderRadius: 25,
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
});

export default Button;
