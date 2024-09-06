import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const data1 = [
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
  const isDay = useSelector(state => state.theme.isDay);

  const renderItem = ({ item }) => (
    <View style={[styles.card, isDay ? styles.cardDay : styles.cardNight]}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={[styles.cardName, isDay ? styles.cardNameDay : styles.cardNameNight]}>{item.name}</Text>
        <Text style={[styles.cardPrice, isDay ? styles.cardPriceDay : styles.cardPriceNight]}>{item.price}</Text>
        <View style={styles.cardLocation}>
          <Icon name="location-outline" size={16} color={isDay ? 'black' : 'white'} />
          <Text style={[styles.cardLocationText, isDay ? styles.cardLocationTextDay : styles.cardLocationTextNight]}>{item.location}</Text>
        </View>
        <View style={styles.cardRating}>
          <Icon name="star" size={16} color={isDay ? 'black' : 'white'} />
          <Text style={[styles.cardRatingText, isDay ? styles.cardRatingTextDay : styles.cardRatingTextNight]}>{item.rating}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, isDay ? styles.containerDay : styles.containerNight]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={30} color={isDay ? '#000' : '#fff'} />
        </TouchableOpacity>
        <Text style={[styles.header, isDay ? styles.headerDay : styles.headerNight]}>Tour Guides</Text>
      </View>
      <FlatList
        data={data1}
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
  },
  containerDay: {
    backgroundColor: 'white',
  },
  containerNight: {
    backgroundColor: '#000',
  },
  contentContainer: {
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerDay: {
    color: 'black',
  },
  headerNight: {
    color: 'white',
  },
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  cardDay: {
    backgroundColor: 'white',
  },
  cardNight: {
    backgroundColor: '#333',
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
  },
  cardNameDay: {
    color: 'black',
  },
  cardNameNight: {
    color: 'white',
  },
  cardPrice: {
    fontSize: 14,
    marginVertical: 5,
  },
  cardPriceDay: {
    color: 'black',
  },
  cardPriceNight: {
    color: 'white',
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLocationText: {
    marginLeft: 5,
  },
  cardLocationTextDay: {
    color: 'black',
  },
  cardLocationTextNight: {
    color: 'white',
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardRatingText: {
    marginLeft: 5,
  },
  cardRatingTextDay: {
    color: 'black',
  },
  cardRatingTextNight: {
    color: 'white',
  },
});

export default TourGuideScreen;
