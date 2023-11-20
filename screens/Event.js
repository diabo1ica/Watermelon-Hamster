import React, { useState } from 'react';

import { Button, NativeModules, Text, TextInput, View } from 'react-native';
// import EventComponent from '../components/EventComponent';

export default function Events({ route, navigation }) {

	const { title, location, startDate, endDate, description } = route.params ?? {};
	const [events, setEvents] = React.useState([]);
	const [zeroEvents, setZeroEvents] = React.useState(true);
	
	React.useEffect(() => {
		if (title && location && startDate && endDate && description) {
			setEvents((prevEvents) => [...prevEvents, {title, location, startDate, endDate, description}]);
		}
	}, [title, location, startDate, endDate, description]);

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

	// {notes.map(({ title, body }, idx) => (
	// 	<Button
	// 		key={title + idx}
	// 		title={title}
	// 		onPress={() =>
	// 			navigation.navigate("Detail", {
	// 				title,
	// 				body,
	// 			})
	// 		}
	// 	/>
	// ))}

	return (
		<View>
			{zeroEvents ? (
				<Text>There is currently no events!!</Text>
			) : (
				<View>
					<Text>Got events!</Text>
					{events.map(({ title, location }, idx) => (
						<Button
							key={title + idx}
							title={title}
							onPress={() => {
								navigation.navigate("EventComponent", { title, location })
							}}
						/>
					))}
				</View>
			)}
		</View>
	)
}