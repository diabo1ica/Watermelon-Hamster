import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import FormInputs from '../components/FormInputs';
import PasswordInput from '../components/PasswordInput';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform login logic here
    console.log('Logging in...');
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNum);
    console.log('Full Name:', name);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <FormInputs placeholder='Email' onChangeText={setEmail} />
      <FormInputs placeholder='MobileNum' onChangeText={setMobileNum} />
      <FormInputs placeholder='Name' onChangeText={setName} />
      <PasswordInput placeholder='Password' onChangeText={setPassword}/>
      <Button text='Register' onPress={handleSignUp} />
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

export default SignUp;
