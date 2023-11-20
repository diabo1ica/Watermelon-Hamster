import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

const Selector = ({toggleCheckBox, setToggleCheckBox}) => {

  return (
    <View style={styles.selector}>
      <Checkbox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text
        style={styles.selectorLabel}
      >{`I Agree to the Terms & Conditions`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  squareIcon1: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  selectorLabel: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    color: 'white',
    textAlign: 'left',
    marginLeft: 8,
  },
  selector: {
    marginVertical:30, 
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default Selector;
