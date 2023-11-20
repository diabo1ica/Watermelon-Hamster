import * as React from 'react';
import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';

const LoginPasswordInput = ({ placeholder, onChangeText }) => {
  const [togglePassword, setTogglePassword] = React.useState(false);

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  return (
    <>
      <View style={styles.textInput}>
        <View style={styles.label}>
          <Text style={[styles.label1, styles.label1Typo]}>{placeholder}</Text>
        </View>
        <View style={styles.baseInputField}>
          <TextInput
            secureTextEntry={!togglePassword}
            style={styles.inputPlaceholder}
            onChangeText={onChangeText}
          />
          {/* If it's a password, add a toggle for viewing between password and normal text */}
          {togglePassword ? (
            <EyeSlashIcon
              name="eye-off"
              size={24}
              color="black"
              style={styles.eyeIcon}
              onPress={handleTogglePassword}
            />
          ) : (
            <EyeIcon
              name="eye"
              size={24}
              color="black"
              style={styles.eyeIcon}
              onPress={handleTogglePassword}
            />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label1Typo: {
    textAlign: 'left',
    color: 'white',
    lineHeight: 24,
    fontSize: 16,
  },
  label1: {
    position: 'absolute',
    marginTop: -12,
    top: '50%',
    left: '0%',
    fontWeight: '500',
  },
  label: {
    width: 343,
    height: 24,
  },
  inputPlaceholder: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'black',
  },
  baseInputField: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 100,
    backgroundColor: '#F2F2F2',
    height: 48,
    marginTop: 4,
    paddingRight: 10,
  },
  textInput: {
    marginVertical: 7,
  },
  eyeIcon: {
    marginLeft: 10,
  },
});

export default LoginPasswordInput;
