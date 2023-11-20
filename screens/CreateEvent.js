import * as React from "react";
import { TextInput, View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateEvent({ navigation }) {

	const [title, setTitle] = React.useState('');
	const [location, setLocation] = React.useState('');
	const [startDate, setStartDate] = React.useState(new Date());
	const [endDate, setEndDate] = React.useState(new Date());
	const [description, setDescription] = React.useState('');

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
    // setShow(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

	const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    // setShow(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

	React.useEffect(() => {
		console.log('cibai lu ', title);
		console.log('kimak lu ', location);
		console.log('tgl kontol ', startDate);
	}, [title, location, startDate, endDate])

	return (
		<View>
			<TextInput 
				placeholder="title" 
				value={title} 
				onChangeText={setTitle} 
				style={{ height: 50, backgroundColor: "white" }}
			/>

			<TextInput 
				placeholder="location" 
				value={location} 
				onChangeText={setLocation} 
				style={{ height: 50, backgroundColor: "white" }}
			/>

			{/* starting date */}
			<View style={{ display: 'flex', flexDirection: 'row' }}>
				<View style={{ flex: 1 }}>
					<Button title="Select starting date" />
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
			<View style={{ display: 'flex', flexDirection: 'row' }}>
				<View style={{ flex: 1 }}>
					<Button title="Select ending date" />
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
        multiline
        numberOfLines={4} // You can set the default number of lines
        value={description}
        onChangeText={setDescription}
        // style={styles.textInput}
      />

			<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
			<Button
				style={{ flex: 1 }}
        title="Cancel"
				// if cancel just go back without passing anything
				// event page shoulkd knwo if null inputs then no events made, move on
        onPress={() => navigation.navigate("Events")}
      />
			<Button
				style={{ flex: 1 }}
        title="Submit"
        onPress={() => {
					navigation.navigate("Events", { title, location, startDate: startDateString, endDate: endDateString, description })
					console.log(startDateString);
				}}
      />
			</View>

			
		</View>
	)
}