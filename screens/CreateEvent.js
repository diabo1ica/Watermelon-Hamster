import * as React from 'react';

import { 
	Alert, 
	TextInput, 
	View, 
	Text, 
	Button, 
	Image, 
	StyleSheet, 
	TouchableOpacity,
	ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

import {
	ref,
	push,
	set,
	serverTimestamp,
} from 'firebase/database';

import { db } from '../components/AuthUtils';

export default function CreateEvent({ route, navigation }) {
	const { group } = route.params
	const [title, setTitle] = React.useState('');
	const [location, setLocation] = React.useState('');
	const [startDate, setStartDate] = React.useState(new Date());
	const [endDate, setEndDate] = React.useState(new Date());
	const [description, setDescription] = React.useState('');
	const [image, setImage] = React.useState(null);
	const [ticketPrice, setTicketPrice] = React.useState(0);

	const [loading, setLoading] = React.useState(false);

	const eventRef = ref(db, 'groups/' + group.id + '/events' );

	const handleCreateEvent = async () => {
    try {
      if (!title || 
				!location || 
				!startDateString || 
				!endDateString || 
				!description || 
				!image) {
        Alert.alert(
          'Incomplete Form',
          'Please fill in all the required fields'
        );
        return;
      }

      setLoading(true);

      const newEventRef = push(eventRef);

      const eventData = {
        name: title,
        location: location,
				startDate: startDateString,
				endDate: endDateString,
        description: description,
        image: image,
				price: ticketPrice,
        createdAt: serverTimestamp(),
      };
      await set(newEventRef, eventData);
      setLoading(false);
      Alert.alert('Success', 'Event created successfully.');
      navigation.navigate('Events');
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      Alert.alert('Error', 'Failed to create the group. Please try again.');
    }
  };

	const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });
    if (!result.canceled) {
      // setImage(result.assets[0].uri);
			setImage(result.base64);
    }
  };

	const formatDate = (date) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return date.toLocaleDateString(undefined, options);
	}
	
	const [startDateString, setStartDateString] = React.useState('');
	const [endDateString, setEndDateString] = React.useState('');

	React.useEffect(() => {
		setStartDateString(formatDate(startDate));
		setEndDateString(formatDate(endDate));
	}, [startDate, endDate])

	const handleUploadPress = () => {
		pickImage();
	}

	return (
		<View style={styles.main}>
			<ScrollView style={styles.scrollView}>
				{image ? (
					<Image
						source={{ uri: `data:image/jpeg;base64,${image}` }}
						style={{ height: 300, width: '100%', alignSelf: 'center', marginBottom: 20 }}
					/>
				) : (
					<View style={styles.imageContainer}>
					<TouchableOpacity onPress={handleUploadPress}>
						<Text style={styles.uploadPhotoText}>Upload an image</Text>
					</TouchableOpacity>
				</View>
				)}

				<TextInput 
					placeholder='event title' 
					placeholderTextColor='rgb(125,125,125)'
					value={title} 
					onChangeText={setTitle} 
					style={{ height: 50, backgroundColor: 'white', marginBottom: 20, borderRadius: 5, padding: 10 }}
				/>

				<TextInput 
					placeholder='event location'
					placeholderTextColor='rgb(125,125,125)'
					value={location} 
					onChangeText={setLocation}
					style={{ height: 50, backgroundColor: 'white', marginBottom: 20, borderRadius: 5, padding: 10 }}
				/>

				{/* starting date */}
				<View style={{ display: 'flex', flexDirection: 'row',  justifyContent: 'space-between', marginBottom: 10 }}>
					<View style={{ }}>
						<Button title='Select starting date' color='white'/>
					</View>
					<View style={{ backgroundColor: 'grey', borderRadius: 7, alignItems: 'center', justifyContent: 'center' }}>
						<DateTimePicker
							testID='dateTimePicker'
							value={startDate}
							mode='date'
							is24Hour={true}
							display='default'
							onChange={(event, selectedDate) => {
								if (selectedDate) setStartDate(selectedDate);
							}}
						/>
					</View>
				</View>

				{/* ending date */}
				<View style={{ display: 'flex', flexDirection: 'row',  justifyContent: 'space-between' }}>
					<View style={{ }}>
						<Button title='Select ending date' color='white'/>
					</View>
					<View style={{ backgroundColor: 'grey', borderRadius: 7, alignItems: 'center', justifyContent: 'center' }}>
						<DateTimePicker
							testID='dateTimePicker'
							value={endDate}
							mode='date'
							is24Hour={true}
							display='default'
							onChange={(event, selectedDate) => {
								if (selectedDate) setEndDate(selectedDate);
							}}
						/>
					</View>
				</View>

				{/* description input */}
				<TextInput
					placeholder='enter event description here'
					placeholderTextColor='rgb(125,125,125)'
					multiline
					numberOfLines={4} // You can set the default number of lines
					value={description}
					onChangeText={setDescription}
					style={{ 
						height: 80, 
						backgroundColor: 'white', 
						marginBottom: 15, 
						borderRadius: 5, 
						padding: 10,
						marginTop: 20 
					}}
				/>

				<TextInput 
					placeholder='ticket price' 
					placeholderTextColor='rgb(125,125,125)'
					value={ticketPrice} 
					onChangeText={setTicketPrice} 
					style={{ height: 50, backgroundColor: 'white', marginBottom: 20, borderRadius: 5, padding: 10 }}
				/>
			</ScrollView>

			<View style={{ 
				display: 'flex', 
				flexDirection: 'row', 
				justifyContent: 'space-evenly'
			}}>
				<View style={{ backgroundColor: 'rgb(155,64,191)', borderRadius: 30 }}>
					<Button
						style={{ flex: 1 }}
						title='Cancel'
						color='white'
						onPress={() => navigation.navigate('Events')}
					/>
				</View>
				
				<View style={{ backgroundColor: 'rgb(155,64,191)', borderRadius: 30 }}>
					<Button
						style={{ flex: 1 }}
						title='Submit'
						color='white'
						onPress={handleCreateEvent}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  main: {
		display: 'flex',
		padding: 20,
		backgroundColor: 'rgb(26,26,26)',
		flex: 1
	},
	imageContainer: {
		height: 300,
		backgroundColor: 'black',
		marginBottom: 20,
		padding: 15,
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'flex-end'
	},
	uploadPhotoText: {
		color: 'white',
		borderColor: 'white',
  	borderWidth: 1,
		borderRadius: 5,
		padding: 2
	}
});