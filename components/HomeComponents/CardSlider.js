import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CardSlider = () => {
    const data = [
        { id: 1, title: 'Badminton Night', image: require('../../assets/badmin.jpg'), heading: 'Badminton 31/10/2023' },
        { id: 2, title: 'Card 2', image: require('../../assets/badmin.jpg'), heading: 'Heading 2' },
        { id: 3, title: 'Card 3', image: require('../../assets/badmin.jpg'), heading: 'Heading 3' },
        { id: 4, title: 'Card 4', image: require('../../assets/badmin.jpg'), heading: 'Heading 4' },
    ];
  
    const renderItem = ({ item }) => (
      <View>
        <Image
            source={item.image}
            style={{ width: 150, height: 150, borderRadius: 10 }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.heading}</Text>
      </View>
    );
  
    return (
    <View style={{marginBottom:20, flexDirection:'row', justifyContent:'center'}}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={150} // Set the width of your carousel
          itemWidth={150}   // Set the width of each item
          layout={'default'}   // Choose the layout style (default, stack, tinder)
        />
    </View>
    );
  };

  const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        lineHeight: 22,
    },
    text: {
        color: 'white',
        fontSize: 12
    }
  });
  
  export default CardSlider;