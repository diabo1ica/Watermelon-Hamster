import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function EventDetails({ route, navigation }) {
	const { title, location, description, startDateString, endDateString, image } = route.params;

	React.useEffect(() => navigation.setOptions({ title }), [title]);

	const handleJoinEvent = () => {
		console.log('kimak joins an event');
	}

	return (
		<View>
			<Image
				source={{ uri: image }}
				style={{ height: 400, width: '100%', alignSelf: "center" }}
			/>
			<View style={styles.main}>
				<Text style={styles.about}>About {title}</Text>
				<Text style={styles.description}>{description}</Text>

				<Text style={styles.about}>Details</Text>
				<Text>{startDateString}</Text>
				<Text>{location}</Text>

				<Button 
					title='JOIN EVENT'>
					onPress={handleJoinEvent}
				</Button>
			</View>

			
			
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		display: 'flex',
		padding: 10,
		backgroundColor: 'rgb(26,26,26)',
		height: '90%'
	},
	about: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 25,
		marginBottom: 10
	},
	description: {
		color: 'grey',
		marginBottom: 10
	}
})