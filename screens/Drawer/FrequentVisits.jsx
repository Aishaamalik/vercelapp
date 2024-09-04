import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';  // Import useSelector for theme management


const initialData = [
  {
    id: '1',
    image: require('../Assets/visits/tahitibeach.jpeg'),
    title: 'Tahiti Beach',
    location: 'Polynesia, French',
    price: '$235',
    rating: '4.4',
    reviews: '32',
    favorite: false,
  },
  {
    id: '2',
    image: require('../Assets/visits/lucismountain.jpeg'),
    title: 'St. Lucia Mountain',
    location: 'South America',
    price: '$235',
    rating: '4.4',
    reviews: '41',
    favorite: false,
  },
  {
    id: '3',
    image: require('../Assets/visits/p1.jpeg'),
    title: 'Cappadocia',
    location: 'Turki',
    price: '$423',
    rating: '4.6',
    reviews: '213',
    favorite: false,
  },
  {
    id: '4',
    image: require('../Assets/visits/p2.jpeg'),
    title: 'Hanalei Bay',
    location: 'Hawaii',
    price: '$235',
    rating: '4.8',
    reviews: '67',
    favorite: false,
  },
  {
    id: '5',
    image: require('../Assets/visits/tahitibeach.jpeg'),
    title: 'Tahiti Beach',
    location: 'Polynesia, French',
    price: '$434',
    rating: '4.8',
    reviews: '324',
    favorite: false,
  },
  {
    id: '6',
    image: require('../Assets/visits/lucismountain.jpeg'),
    title: 'St. Lucia Mountain',
    location: 'Polynesia, French',
    price: '$543',
    rating: '4.8',
    reviews: '123',
    favorite: false,
  },
];

const FrequentVisitScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(initialData);
  const isDay = useSelector(state => state.theme.isDay);  

  const handlePress = (item) => {
    navigation.navigate('VacationDetails', {
      image: item.image,
      title: item.title,
      location: item.location,
      price: item.price,
      rating: item.rating,
      reviews: item.reviews,
    });
  };

  const toggleFavorite = (itemId) => {
    setData((prevData) => {
      const updatedData = prevData.map((item) =>
        item.id === itemId ? { ...item, favorite: !item.favorite } : item
      );
      const likedItems = updatedData.filter((item) => item.favorite);
      AsyncStorage.setItem('likedItems', JSON.stringify(likedItems));
      navigation.navigate('Liked', { likedItems });

      return updatedData;
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.card, { backgroundColor: isDay ? 'white' : '#282C35' }]} onPress={() => handlePress(item)}>
      <Image source={item.image} style={styles.cardImage} />
      <TouchableOpacity style={styles.favoriteIcon} onPress={() => toggleFavorite(item.id)}>
        <Icon name={item.favorite ? 'heart' : 'heart-outline'} size={24} color={item.favorite ? 'red' : (isDay ? 'black' : 'white')} />
      </TouchableOpacity>
      <Text style={[styles.cardTitle, { color: isDay ? 'black' : 'white' }]}>{item.title}</Text>
      <View style={styles.cardLocation}>
        <Icon name="location-outline" size={16} color={isDay ? 'black' : 'white'} />
        <Text style={[styles.cardLocationText, { color: isDay ? 'black' : 'white' }]}>{item.location}</Text>
      </View>
      <Text style={[styles.cardPrice, { color: isDay ? 'black' : 'white' }]}>{item.price}</Text>
      <View style={styles.cardRating}>
        <Icon name="star" size={16} color="#f9a825" />
        <Text style={[styles.cardRatingText, { color: isDay ? 'black' : 'white' }]}>{item.rating}</Text>
        <Text style={[styles.cardReviews, { color: isDay ? 'black' : 'white' }]}>({item.reviews})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDay ? 'white' : '#282C35' }]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 200,
    height: 300,
    marginRight: 5,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    marginBottom: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardLocationText: {
    marginLeft: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardRatingText: {
    marginLeft: 5,
  },
  cardReviews: {
    marginLeft: 5,
  },
});

export default FrequentVisitScreen;