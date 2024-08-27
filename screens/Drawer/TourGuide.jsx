import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    image: require('../Assets/Tourguide/p1.jpg'),
    name: 'Alenzo Endera',
    price: '$25 (1 Day)',
    location: 'Polynesia, French',
    rating: '4.0',
  },
  {
    id: '2',
    image: require('../Assets/Tourguide/p2.jpg'),
    name: 'Jhone Kenoady',
    price: '$25 (1 Day)',
    location: 'Polynesia, French',
    rating: '4.0',
  },
  {
    id: '3',
    image: require('../Assets/Tourguide/p3.jpg'), 
    name: 'Emilia Ricardo',
    price: '$25 (1 Day)',
    location: 'Polynesia, French',
    rating: '4.0',
  },
  {
    id: '4',
    image: require('../Assets/Tourguide/p4.jpg'),
    name: 'Alexa Bigford',
    price: '$25 (1 Day)',
    location: 'Polynesia, French',
    rating: '4.0',
  },
  {
    id: '5',
    image: require('../Assets/Tourguide/p5.jpg'),
    name: 'Alenzo Endera',
    price: '$25 (1 Day)',
    location: 'Polynesia, French',
    rating: '4.0',
  },
];

const TourGuideScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <View style={styles.cardLocation}>
          <Icon name="location-outline" size={16} color="black" />
          <Text style={styles.cardLocationText}>{item.location}</Text>
        </View>
        <View style={styles.cardRating}>
          <Icon name="star" size={16} color="black" />
          <Text style={styles.cardRatingText}>{item.rating}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tour Guide</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  contentContainer: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  cardPrice: {
    fontSize: 14,
    color: 'black',
    marginVertical: 5,
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLocationText: {
    marginLeft: 5,
    color: 'black',
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardRatingText: {
    marginLeft: 5,
    color: 'black',
  },
});

export default TourGuideScreen;
