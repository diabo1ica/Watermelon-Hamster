import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// watermelon-hamster-react-native\assets\homeImages\badmin.jpg
const ColumnCardSlider = () => {
  const data = [
    { id: 1, title: 'Lecsafe Bible Study Group', image: require('../../assets/bible.png'), heading: "It's time to praise Jesus" },
    { id: 2, title: 'V3 And Above BoulderSoc', image: require('../../assets/v3.png'), heading: 'Not For Newbies Weekly Social' },
    { id: 3, title: 'EDM Lovers', image: require('../../assets/EDM.png'), heading: 'For those who love electronic music' },
    { id: 4, title: 'Hiking trail', image: require('../../assets/mountain.png'), heading: 'Join our summer hiking retreat' },
  ];

  return (
    <View style={styles.column}>
      {data.map(element => (
        <TouchableOpacity key={element.id}>
            <View style={styles.rowWrapper}>
                <View style={styles.rowContent}>
                    <Image
                    source={element.image}
                    style={{ width: 80, height: 80, borderRadius: 10, marginRight: 15 }}
                    />
                    <View>
                        <Text style={styles.title}>{element.title}</Text>
                        <Text style={styles.text}>{element.heading}</Text>
                    </View>
                </View>
                <Image
                source={require('../../assets/arrow.png')}
                style={styles.rowIcon}
                />
            </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems:'center'
  },
  rowIcon: {
    width: 30, 
    height: 30, 
    justifyContent: 'center' 
  },
  rowWrapper: {
    flexDirection: 'row',
    height: 90,
    marginTop: 5,
    marginBottom: 5,
    borderColor : 'rgba(122, 122, 122, 0.25)',
    alignItems: 'center',
    justifyContent:'space-between',
    borderTopWidth: 2,
  },
  title: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 12,
  },
});

export default ColumnCardSlider;
