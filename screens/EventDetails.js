import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import UserContext from '../components/UserContext';
import { ref, push, set, serverTimestamp } from 'firebase/database';
import { db } from '../components/AuthUtils';


export default function EventDetails({ route, navigation }) {
	const { groupKey, eventKey, title, location, description, startDate, endDate, image, price, createdBy } = route.params;
  const { userEmail } = React.useContext(UserContext);
	const [canDelete, setCanDelete] = React.useState(false);

	console.log(`group key is ${groupKey} and eventKey is ${eventKey}`)
	const dRef = ref(db, 'groups/' + groupKey + '/events/' + eventKey);

	React.useEffect(() => navigation.setOptions({ title }), [title]);
	console.log(`createdBy: ${createdBy}`);
	console.log(`current user: ${userEmail}`);

	React.useEffect(() => {
		if (createdBy === userEmail) {
			setCanDelete(true);
		}
	}, [createdBy, userEmail])

	// Handle Delete event
  const handleDeleteEvent = async () => {
    try {
			await set(dRef, null);
			navigation.navigate('Events');
    } catch (error) {
      console.log(error);
    }
  };

	return (
		<View>
			{canDelete && (
				<TouchableOpacity
					style={styles.delete}
					onPress={handleDeleteEvent}
				>
					<Text style={styles.deleteText}>Delete Group</Text>
				</TouchableOpacity>
			)}
			<Image
				source={{ uri: `data:image/jpeg;base64,${image}` }}
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
							navigation.navigate('Events')
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
	},
	delete: {
		position: 'absolute',
		top: 10,
		right: 10,
    color: 'white',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 100,
    fontWeight: 'bold',
		zIndex: 1
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
})