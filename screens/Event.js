import React, { useState } from 'react';

import { Button, NativeModules, Text, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import EventCard from '../components/EventCard';

export default function Events({ route, navigation }) {
	console.log(`params: ${route.params}`);
	// 
	const { newEvent, eventData } = route.params ?? {};

	const [events, setEvents] = React.useState([]);
	const [zeroEvents, setZeroEvents] = React.useState(false);

	React.useEffect(() => {
		if (newEvent && eventData) {
			console.log('bikin event');
			setEvents((prevEvents) => [...prevEvents, eventData]);
			console.log(eventData);
			navigation.setParams({ newEvent: undefined, eventData: undefined });
		}
	}, [eventData, navigation]);

	React.useEffect(() => {
		if (events.length === 0) {
			setZeroEvents(true);
		} else {
			setZeroEvents(false);
		}
	}, [events])

	React.useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Button
					onPress={() => navigation.navigate("CreateEvent")}
					title="+"
					accessibilityLabel="Create an event"
				/>
			),
		});
	}, [navigation]);

	return (
		<View style={styles.main}>
			<View style={styles.topBar}>
				<View style={styles.buttonTop}>
					<Button title='Top' color='white' />
				</View>
				<View style={styles.buttonTop}>
					<Button title='Local' color='white'/>
				</View>
				<View style={styles.buttonTop}>
					<Button title='This Week' color='white'/>
				</View>
				<View style={styles.buttonTop}>
					<Button title='My Events' color='white'/>
				</View>
			</View>
			<View style={styles.content}>
				<ScrollView style={styles.scrollView}>
					{zeroEvents ? (
						<Text style={styles.noEventsText}>There is currently no events!!</Text>
					) : (
						events.map(({ title, location, description, startDateString, endDateString, image }, idx) => (
							<EventCard
								key={idx}
								title={title}
								location={location}
								description={description}
								startDateString={startDateString}
								endDateString={endDateString}
								image={image}
								onPress={() => navigation.navigate("EventDetails", { title, location, description, startDateString, endDateString, image} )}
							/>
						))
					)}
				</ScrollView> 
			</View>
			
		</View>
	);
}

const styles = StyleSheet.create({
  main: {
		flex: 1,
		display: 'flex',
	},
	scrollView: {
    width: '100%', // Ensure the ScrollView takes the full width
  },
	noEventsText: {
		color: 'white',
    textAlign: 'center', // Center the text if there are no events
    marginTop: 20, // Add some space at the top
  },
	topBar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: 'rgb(46,46,46)',
		width: '100%',
		paddingBottom: 7
	},
	content: {
		backgroundColor: 'rgb(26,26,26)',
		height: '100%',
		flex: 1,
		paddingRight: 20,
		paddingLeft: 20,
	},
	top: {
		color: 'white',
		paddingTop: 10,
	},
	buttonTop: {
		color: 'white',
		backgroundColor: 'rgb(57, 57, 57)',
		borderRadius: 20,
	}
});
