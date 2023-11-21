import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function EventDetails({ route, navigation }) {
	const { title, location, description, startDateString, endDateString, image } = route.params;
	console.log(startDateString);
	React.useEffect(() => navigation.setOptions({ title }), [title]);

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