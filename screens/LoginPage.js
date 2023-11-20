import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import PasswordInput from '../components/PasswordInput';
import FormInputs from '../components/FormInputs';

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
      <FormInputs placeholder='Email' onChangeText={setEmail} />
      <PasswordInput placeholder='Password' onChangeText={setPassword}/>
      <Button text='Login' onPress={handleLogin} />
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
});

export default LoginPage;
