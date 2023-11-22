import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { ref, onValue } from 'firebase/database';
import { db } from '../../components/AuthUtils';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

const MyGroups = ({ navigation }) => {
  const [groups, setGroups] = React.useState([]);

  const createGroup = () => {
    navigation.navigate('CreateGroup');
  };

  useEffect(() => {
    const groupsRef = ref(db, 'groups');

    // Use the 'onValue' function to listen for changes to the data
    const unsubscribe = onValue(groupsRef, (snapshot) => {
      const groupsData = [];

      // Check if the snapshot exists and has children
      if (snapshot.exists()) {
        // Loop through the snapshot and extract the data
        snapshot.forEach((childSnapshot) => {
          const group = childSnapshot.val();
          groupsData.push({ id: childSnapshot.key, ...group });
        });

        // Update the state with the fetched data
        // console.log(groupsData);
        setGroups(groupsData);
      }
    });

    // Return a cleanup function to unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  const navigateToGroupDetail = (group) => {
    navigation.navigate('GroupDetail', { group });
  };

  return (
    <View style={{ height: '100%', backgroundColor: '#1A1A1A' }}>
      <View style={styles.container}>
        <Text style={styles.header1}>Your Groups</Text>
        <TouchableOpacity style={styles.noAccount} onPress={createGroup}>
          <Text style={styles.newGroup}>+ New Group</Text>
        </TouchableOpacity>
      </View>
      {groups.length > 0 ? (
        <FlatList
          data={groups}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.groupItem}
              onPress={() => navigateToGroupDetail(item)}
            >
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Image
                  source={{ uri: `data:image/jpeg;base64,${item.image}` }}
                  style={styles.groupImage}
                />
                <View
                  style={{ flexDirection: 'column', marginLeft: 10, gap: 10 }}
                >
                  <Text style={styles.groupName}>{item.name}</Text>
                  <Text style={styles.groupLocation}>📍 {item.location}</Text>
                  <Text style={styles.groupDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>

              <ArrowRightIcon style={styles.arrowRight} color="white" />
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.noGroupsContainer}>
          <Text style={styles.noGroupsText}>
            You don't have any groups yet.{'\n'}
            Create a group or join an existing one!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  arrowRight: {
    alignSelf: 'center',
  },
  newGroup: {
    color: 'white',
  },
  groupItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    color: 'white',
    borderTopWidth: 1,
    borderTopColor: '#4A4A4A',
    padding: 10,
    marginVertical: 10,
  },
  groupName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  groupLocation: {
    fontSize: 16,
    color: 'white',
  },
  groupDescription: {
    fontSize: 14,
    color: 'white',
  },
  groupImage: {
    width: 100,
    height: 100,
    borderRadius: 8, // You can adjust this value to add rounded corners to the image
    marginBottom: 10,
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
    borderRadius: 100,
  },
  signUpButton: {
    color: '#AF66CC',
    fontWeight: 'bold',
  },
  noGroupsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noGroupsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MyGroups;
