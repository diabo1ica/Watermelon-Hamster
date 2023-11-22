import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ref, onValue } from 'firebase/database';
import { db } from '../../components/AuthUtils';
import { TouchableOpacity } from 'react-native';

const CardSlider = ({ navigation }) => {
    const [groups, setGroups] = React.useState([]);

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

    const navigateToEventDetail = (event) => {
        navigation.navigate("EventDetails", { 
            title: event.name, 
            location: event.location, 
            description: event.description, 
            startDate: event.startDate, 
            endDate: event.endDate, 
            image: event.image,
            price: event.price
        })
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
          onPress={() => navigateToEventDetail(item)}
          style={styles.slide}
        >
          <Image
            source={{ uri: `data:image/jpeg;base64,${item.image}` }}
            style={styles.image}
          />
          <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.text} numberOfLines={2}>{item.description}</Text>
        </TouchableOpacity>
      );

    return (
        <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
                data={groups.flatMap((group) =>
                    group.events
                      ? Object.values(group.events).map((event) => ({
                          ...event,
                          groupId: group.id, // Add groupId to identify the group
                        }))
                      : []
                  )}
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
      marginBottom: 5,
    },
    text: {
      color: 'rgba(255, 255, 255, 0.75)',
      fontSize: 12,
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    slide: {
      height: 220,
      marginRight: 20, // Add some margin to separate carousel items
    },
  });

export default CardSlider;