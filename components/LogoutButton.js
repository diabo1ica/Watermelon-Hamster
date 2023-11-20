// LogoutButton.js
import React from 'react';
import { Button } from 'react-native';



const LogoutButton = ({ onPress }) => {
  return (
    <Button title="Logout" color="red" onPress={onPress} accessibilityLabel="Logout button"/>
  );
};

export default LogoutButton;
