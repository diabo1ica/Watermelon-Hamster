import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ColumnCardSlider = () => {
  const data = [
    { id: 1, title: 'Badminton Night', image: require('../../assets/homeImages/badmin.jpg'), heading: 'Badminton 31/10/2023' },
    { id: 2, title: 'Card 2', image: require('../../assets/homeImages/badmin.jpg'), heading: 'Heading 2' },
    { id: 3, title: 'Card 3', image: require('../../assets/homeImages/badmin.jpg'), heading: 'Heading 3' },
    { id: 4, title: 'Card 4', image: require('../../assets/homeImages/badmin.jpg'), heading: 'Heading 4' },
  ];

  return (
    <View style={styles.column}>
      {data.map(element => (
        <View key={element.id} style={styles.rowWrapper}>
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
