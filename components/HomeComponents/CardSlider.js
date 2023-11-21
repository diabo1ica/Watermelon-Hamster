import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ref, onValue } from 'firebase/database';
import { db } from '../../components/AuthUtils';
import { TouchableOpacity } from 'react-native';

const CardSlider = ({ navigation }) => {
    const [groups, setGroups] = React.useState([]);

    const data = [
        { id: 1, title: 'UNSW BusSoc Ball', image: require('../../assets/party.png'), heading: 'The best ball you can ever see and touch' },
        { id: 2, title: 'Badminton Night', image: require('../../assets/badmin.jpg'), heading: 'Badminton 31/10/2023' },
        { id: 3, title: 'Nature Photography', image: require('../../assets/flower.png'), heading: 'Embrace Nature' },
        { id: 4, title: 'Card tricks', image: require('../../assets/cards.jpeg'), heading: 'Professional sleight of hand techniques' },
        { id: 5 },
    ];

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

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigateToGroupDetail(item)}>
            <View>
                <Image
                    source={{ uri: `data:image/jpeg;base64,${item.image}` }}
                    style={{ width: 150, height: 150, borderRadius: 10, marginBottom: 10 }}
                />
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
                data={groups}
                renderItem={renderItem}
                sliderWidth={150}
                itemWidth={150}
                layout={'default'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 22,
        marginBottom: 5
    },
    text: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 12
    }
});

export default CardSlider;