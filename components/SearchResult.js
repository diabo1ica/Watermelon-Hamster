import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { db } from '../components/AuthUtils';
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchResult = ({ navigation }) => {
    const [groups, setGroups] = React.useState([]);

    const navigateToGroupDetail = (group) => {
        navigation.navigate('GroupDetail', { group });
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
    }, []);

    return (
        <FlatList
            data={groups}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View>
                    <TouchableOpacity onPress={() => navigateToGroupDetail(item)}>
                        <View style={styles.cardWrapper}>
                            <Image
                                style={styles.imageWrapper}
                                source={{ uri: `data:image/jpeg;base64,${item.image}` }}
                            />
                            <View style={styles.bannerWrapper}>
                                <View style={styles.textBoxWrapper}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.text}>{item.description}</Text>
                                </View>
                                <Ionicons name='md-arrow-forward' size={40} style={styles.icon}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        width: 350,
        height: 270,
        marginTop: 8,
        marginBottom: 8,
    },
    imageWrapper: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 180,
    },
    bannerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#333333',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 90,
    },
    textBoxWrapper: {
        marginLeft: 10
    },
    icon: {
        color: 'white',
        marginRight: 10,
    },
    title: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 22,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
    },
});

export default SearchResult;