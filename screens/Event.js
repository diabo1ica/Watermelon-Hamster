import React, { useState } from 'react';

import { Button, Text, TextInput, View } from 'react-native';

export default function Events({ route, navigation }) {

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
		<View>
			<Text>Did anyone say KFC?</Text>
		</View>
		
	)
}