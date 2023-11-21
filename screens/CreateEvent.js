import * as React from "react";
import { TextInput, View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';

import {
	ref,
	push,
	set,
	serverTimestamp,
} from 'firebase/database';

import { db } from '../components/AuthUtils';

export default function CreateEvent({ route, navigation }) {

	const { group } = route.params
	// console.log(group.events);

	// const navigation = useNavigation();
	const [title, setTitle] = React.useState('');
	const [location, setLocation] = React.useState('');
	const [startDate, setStartDate] = React.useState(new Date());
	const [endDate, setEndDate] = React.useState(new Date());
	const [description, setDescription] = React.useState('');
	const [image, setImage] = React.useState(null);

	const [loading, setLoading] = React.useState(false);
	const eventRef = ref(db, 'groups/' + group.id + '/events' );

	const handleCreateEvent = async () => {
    try {
      if (!title || !location || !startDate || !endDate || !description || !image) {
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
				startDate: startDate,
				endDate: endDate,
        description: description,
        image: image,
        createdAt: serverTimestamp(),
      };

      await set(newEventRef, eventData);

      setLoading(false);

      Alert.alert('Success', 'Group created successfully.');

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
      setImage(result.assets[0].uri);
			// setImage(result.base64)
    }
  };

	const formatDate = (date) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return date.toLocaleDateString(undefined, options);
	}

	const [startDateString, setStartDateString] = React.useState('');
	const [endDateString, setEndDateString] = React.useState('');

	React.useEffect(() => {
		setStartDateString(formatDate(startDate))
		setEndDateString(formatDate(endDate))
	}, [startDate, endDate])

	const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setStartDateString(formatDate(currentDate))
		console.log(startDateString);
  };

	const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setEndDateString(formatDate(currentDate))
		console.log(endDateString);
  };

	// const onChangeEndDate = (selectedDate) => {
  //   const currentDate = selectedDate || endDate;
  //   // setShow(Platform.OS === 'ios');
	// 	console.log(currentDate);
	// 	setEndDateString(formatDate(currentDate))
  //   // setEndDate(currentDate);
  // };

	const handleUploadPress = () => {
		pickImage();
	}

	return (
		<View style={styles.main}>

			{/* <View style={styles.imageContainer}>
				<Text style={styles.uploadPhotoText}>Upload an image</Text>
			</View> */}

		
			{/* pick an image */}
			{image ? (
        <Image
          source={{ uri: image }}
          style={{ height: 300, width: '100%', alignSelf: "center", marginBottom: 20 }}
        />
      ) : (
				<View style={styles.imageContainer}>
				<TouchableOpacity onPress={handleUploadPress}>
					<Text style={styles.uploadPhotoText}>Upload an image</Text>
				</TouchableOpacity>
			</View>
			)}


			<TextInput 
				placeholder="title" 
				placeholderTextColor='rgb(125,125,125)'
				value={title} 
				onChangeText={setTitle} 
				style={{ height: 50, backgroundColor: "white", marginBottom: 20, borderRadius: 5, padding: 10 }}
			/>

			<TextInput 
				placeholder="location"
				placeholderTextColor='rgb(125,125,125)'
				value={location} 
				onChangeText={setLocation}
				style={{ height: 50, backgroundColor: "white", marginBottom: 20, borderRadius: 5, padding: 10 }}
			/>

			{/* starting date */}
			<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'space-between' }}>
				<View style={{ flex: 1 }}>
					<Button title="Select starting date" color='white'/>
				</View>
				<View style={{ flex: 1 }}>
					<DateTimePicker
						testID="dateTimePicker"
						value={startDate}
						mode="date"
						is24Hour={true}
						display="default"
						onChange={onChangeStartDate}
					/>
				</View>
			</View>

			{/* ending date */}
			<View style={{ display: 'flex', flexDirection: 'row',  alignItems: 'space-between' }}>
				<View style={{ flex: 1 }}>
					<Button title="Select ending date" color='white'/>
				</View>
				<View style={{ flex: 1 }}>
					<DateTimePicker
						testID="dateTimePicker"
						value={endDate}
						mode="date"
						is24Hour={true}
						display="default"
						onChange={onChangeEndDate}
					/>
				</View>
			</View>

			{/* description input */}
			<TextInput
        placeholder="Enter description here"
				placeholderTextColor='rgb(125,125,125)'
        multiline
        numberOfLines={4} // You can set the default number of lines
        value={description}
        onChangeText={setDescription}
        style={{ 
					height: 80, 
					backgroundColor: "white", 
					marginBottom: 15, 
					borderRadius: 5, 
					padding: 10,
					marginTop: 20 
				}}
      />

			<View style={{ 
				display: 'flex', 
				flexDirection: 'row', 
				justifyContent: 'space-around'
			}}>
				<Button
					style={{ flex: 1 }}
					title="Cancel"
					color='white'
					onPress={() => navigation.navigate("Events", {
						newEvent: false,
						eventData: {}
					})}
				/>
				<Button
					style={{ flex: 1 }}
					title="Submit"
					color='white'
					// onPress={() => {
					// 	navigation.navigate("Events", { 
					// 		newEvent: true,
					// 		eventData: { title, location, startDateString, endDateString, description, image }
					// 	});
					// }}
					onPress={() => {
						handleCreateEvent();
						navigation.navigate("Events", { 
							newEvent: true,
							eventData: { title, location, startDateString, endDateString, description, image }
						});
					}}
				/>
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