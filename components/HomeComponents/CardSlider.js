import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CardSlider = () => {
    const data = [
        { id: 1, title: 'UNSW BusSoc Ball', image: require('../../assets/homeImages/party.png'), heading: 'The best ball you can ever see and touch' },
        { id: 2, title: 'Badminton Night', image: require('../../assets/homeImages/badmin.jpg'), heading: 'Badminton 31/10/2023' },
        { id: 3, title: 'Nature Photography', image: require('../../assets/homeImages/flower.png'), heading: 'Embrace Nature' },
        { id: 4, title: 'Card 4', image: require('../../assets/homeImages/badmin.jpg'), heading: 'Heading 4' },
        { id: 5},
    ];
  
    const renderItem = ({ item }) => (
      <View>
        <Image
            source={item.image}
            style={{ width: 150, height: 150, borderRadius: 10, marginBottom: 10 }}
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
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 22,
        marginBottom: 5
    },
    text: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 12
    }
  });
  
  export default CardSlider;