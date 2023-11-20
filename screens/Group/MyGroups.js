import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyGroups = ({ navigation }) => {
  const createGroup = () => {
    // Navigate to create event page and pass the groups data
    navigation.navigate('CreateGroup');
  };
  const [groups, setGroups] = React.useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Your Groups</Text>
      <TouchableOpacity style={styles.noAccount} onPress={createGroup}>
        <Text style={styles.newGroup}>+ New Group</Text>
      </TouchableOpacity>
      {/* Show list of groups */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1A1A1A',
  },
  newGroup: {
    color: 'white'
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
  noAccount: {
    color: 'white',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333333',
    borderRadius:100
  },
  signUpButton: {
    color: '#AF66CC',
    fontWeight: 'bold',
  },
});

export default MyGroups;
