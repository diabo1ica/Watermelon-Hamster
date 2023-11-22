import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, Alert } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import PasswordInput from '../components/PasswordInput';
import FormInputs from '../components/FormInputs';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/AuthUtils';

const LoginPage = () => {
  // Navigate
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email !== '' || password !== '') {
      // Perform login logic here
      console.log('Logging in...');
      console.log('Username:', email);
      console.log('Password:', password);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Logged in successfully!');
      } catch (error) {
        // Handle specific authentication errors
        switch (error.code) {
          case 'auth/invalid-login-credentials':
            Alert.alert('Invalid Login Credentials', 'Please check your username and password.');
            break;
          case 'auth/invalid-email':
            Alert.alert('Invalid Email', 'Please enter a valid email.');
            break;
          default:
            Alert.alert('Login Error', 'An error occurred during login. Please try again.');
            console.error(error.message)
            break;
        }
      }
    } else {
      // Show an alert if not all forms are filled
      Alert.alert('Incomplete Form', 'Please fill in all the required fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Welcome Back!</Text>
      <Text style={styles.header2}>Login to your account</Text>
      <FormInputs placeholder='Email' onChangeText={setEmail} />
      <PasswordInput placeholder='Password' onChangeText={setPassword} />
      <SubmitButton disabled={false} text='Login' onPress={handleLogin} />
      {/* Already have an account */}
      <Text style={styles.noAccount}>Don't have an account?</Text>
      <Button
        title='Sign Up'
        style={styles.signUpButton}
        onPress={() => navigation.navigate('SignUp')}
      />
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
    marginBottom:10,
    color: 'white',
  },
  header2: {
    fontSize: 16,
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
  },
  signUpButton: {
    color: '#AF66CC',
    fontWeight: 'bold',
  },
});

export default LoginPage;
