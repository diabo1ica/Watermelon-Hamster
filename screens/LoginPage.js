import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginButton from '../components/LoginComponents/LoginButton';
import LoginEmailInput from '../components/LoginComponents/LoginEmailInput';
import LoginPasswordInput from '../components/LoginComponents/LoginPasswordInput';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in...');
    console.log('Username:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <LoginEmailInput placeholder='Email' onChangeText={setEmail} />
      <LoginPasswordInput placeholder='Password' onChangeText={setPassword}/>
      <LoginButton onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1A1A1A',
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
});

export default LoginPage;
