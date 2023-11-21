import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const GroupDetail = ({ route }) => {
    const { group } = route.params;
    const upcomingEvents = group.upcomingEvents || []; // Assuming that the events are stored in the group object

    return (
        <ScrollView style={{backgroundColor: "#1A1A1A" }}>
            <ImageBackground
                source={{ uri: `data:image/jpeg;base64,${group.image}` }}
                style={styles.backgroundImage}
            >
                <LinearGradient
                    colors={['rgba(26,26,26,0.5)', 'rgba(26,26,26,1)']}
                    style={styles.overlay}
                >
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.header1}>{group.name}</Text>
                        </View>
                        <View style={styles.locationInfo}>
                            <Text style={styles.groupInfoText}>📍{' '}{group.location}</Text>
                        </View>
                        <View style={styles.locationInfo}>
                            <Text style={styles.groupInfoText}>{group.description}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.header1}>Upcoming Events</Text>
                    <TouchableOpacity style={styles.noAccount}>
                        <Text style={styles.whiteText}>+ Create Event</Text>
                    </TouchableOpacity>
                </View>
                {upcomingEvents.length === 0 ? (
                    <View style={styles.noEventsContainer}>
                        <Text style={styles.noEventsText}>No upcoming events. {'\n'}
                        Check back later!</Text>
                    </View>
                ) : (
                    <View>
                        <Text>Hello</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: 270,
        resizeMode: "cover",
        justifyContent: "center",
    },
    overlay: {
        flex: 1,
    },
    container: {
        padding: 10,
    },
    noAccount: {
        color: 'white',
        padding: 10,
        backgroundColor: '#333333',
        borderRadius: 100,
    },
    whiteText: {
        color: "white",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    header1: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    noEventsContainer: {
        flex: 1,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noEventsText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    groupImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    locationInfo: {
        padding: 10,
    },
    groupInfoText: {
        color: "rgba(255, 255, 255, 0.75)",
        fontSize: 16,
    },
});

export default GroupDetail;
