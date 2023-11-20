import React from 'react';
import { View, Text } from 'react-native';

export default function EventComponent({ route }) {
	console.log(`ini nih event componetn ud dpt title: {eventDetails.title}`);
	const { title, location } = route.params;
	return (
		<View>
			<Text>{title}</Text>
			<Text>{location}</Text>
		</View>
	)
}
