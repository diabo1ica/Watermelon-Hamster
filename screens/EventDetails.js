import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function EventDetails({ route, navigation }) {
	const { title, location, description, startDate, endDate, image, price } = route.params;
	console.log(title);
	console.log(location);
	console.log(price);
	console.log(startDate);
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
				<View style={styles.details}>
					<Text style={styles.details}>🗓️ {startDate} - {endDate}</Text>
					<Text style={styles.details}>📍 {location}</Text>
					<Text style={styles.details}>🎟 Ticket price ${price}</Text>
				</View>
				<View style={{ backgroundColor: 'rgb(155,64,191)', borderRadius: 30 }}>
					<Button
						style={{ flex: 1 }}
						title='Join Event'
						color='white'
						onPress={() => {
							alert(`You have joined the event ${title}`)
						}}
					/>
				</View>
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
		color: 'rgb(183, 183, 183)',
		marginBottom: 20
	},
	details: {
		color: 'white',
		marginBottom: 10
	}
})