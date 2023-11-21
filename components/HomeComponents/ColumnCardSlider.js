import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { db } from '../../components/AuthUtils';

const ColumnCardSlider = ({ navigation }) => {
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
                <View style={styles.column}>
                    <TouchableOpacity onPress={() => navigateToGroupDetail(item)}>
                        <View style={styles.rowWrapper}>
                            <View style={styles.rowContent}>
                                <Image
                                    source={{ uri: `data:image/jpeg;base64,${item.image}` }}
                                    style={{ width: 80, height: 80, borderRadius: 10, marginRight: 15 }}
                                />
                                <View>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.text}>{item.description}</Text>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/arrow.png')}
                                style={styles.rowIcon}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
    },
    rowContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowIcon: {
        width: 30,
        height: 30,
        justifyContent: 'center'
    },
    rowWrapper: {
        flexDirection: 'row',
        height: 90,
        marginTop: 5,
        marginBottom: 5,
        borderColor: 'rgba(122, 122, 122, 0.25)',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 2,
    },
    title: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        lineHeight: 22,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 12,
    },
});

export default ColumnCardSlider;
