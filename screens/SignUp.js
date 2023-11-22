import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text, Alert } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import FormInputs from '../components/FormInputs';
import PasswordInput from '../components/PasswordInput';
import { useNavigation } from '@react-navigation/native';
import Selector from '../components/Selector';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/AuthUtils';

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [allFormsFilled, setAllFormsFilled] = useState(false);

  // Check if all forms are filled
  const checkForms = () => {
    if (email === '' || mobileNum === '' || name === '' || password === '') {
      setAllFormsFilled(false);
    } else {
      setAllFormsFilled(true);
    }
  };

  useEffect(() => {
    checkForms();
  }, [email, mobileNum, name, password]);


  const handleSignUp = async () => {
    // Perform sign-up logic here if all forms are filled
    if (allFormsFilled) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User registered successfully!');
      } catch (error) {
        // Use curly braces to wrap the switch statement
        switch (error.code) {
          case 'auth/email-already-in-use':
            Alert.alert('Email already in use', 'Please use another email.');
            break;
          case 'auth/invalid-email':
            Alert.alert('Invalid Email', 'Please use a valid email.');
            break;
          case 'auth/weak-password':
            Alert.alert('Weak Password', 'Please use a stronger password.');
            break;
          default:
            Alert.alert('Error', error.message);
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
      <Text style={styles.header1}>Welcome to RealLife!</Text>
      <FormInputs placeholder='Email' onChangeText={setEmail} />
      <FormInputs placeholder='MobileNum' onChangeText={setMobileNum} />
      <FormInputs placeholder='Name' onChangeText={setName} />
      <PasswordInput placeholder='Password' onChangeText={setPassword}/>
      <Selector toggleCheckBox={toggleCheckBox} setToggleCheckBox={setToggleCheckBox}/>

      <SubmitButton disabled={!toggleCheckBox} text='Register' onPress={handleSignUp} />

      <Text style={styles.noAccount}>Already have an account?</Text>
      <Button title='Login' style={styles.signUpButton} onPress={() => navigation.navigate('Login')} />
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
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
});

export default SignUp;
