import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    title: 'Cappadocia',
    location: 'Turki',
    price: '$423',
    rating: '4.6',
    reviews: '213',
    image: require('../Assets/visits/p1.jpeg'),
    favorite: false,

},
{
    id: '4',
    title: 'Hanalei Bay',
    location: 'Hawaii',
    price: '$235',
    rating: '4.8',
    reviews: '67',
    image: require('../Assets/visits/p2.jpeg'),
    favorite: false,

},
{
    id: '5',
    title: 'Tahiti Beach',
    location: 'Polynesia, French',
    price: '$434',
    rating: '4.8',
    reviews: '324',
    image: require('../Assets/visits/tahitibeach.jpeg'),
    favorite: false,

},
{
    id: '6',
    title: 'St. Lucia Mountain',
    location: 'Polynesia, French',
    price: '$543',
    rating: '4.8',
    reviews: '123',
    image: require('../Assets/visits/lucismountain.jpeg'),
    favorite: false,

},
];

const FrequentVisitScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(initialData);

  const handlePress = (item) => {
    navigation.navigate('VecationDetails', {
      image: item.image,
      title: item.title,
      location: item.location,
      price: item.price,
      rating: item.rating,
      reviews: item.reviews,
    });
  };

  const toggleFavorite = (itemId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, favorite: !item.favorite } : item
      )
    );

    const likedItems = data.filter((item) => item.id === itemId && !item.favorite);
    if (likedItems.length > 0) {
      handleFavoritePress();
    }
  };

  const handleFavoritePress = () => {
    const likedItems = data.filter(item => item.favorite);
    navigation.navigate('Liked', { likedItems });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <Image source={item.image} style={styles.cardImage} />
      <TouchableOpacity
        style={styles.favoriteIcon}
        onPress={() => toggleFavorite(item.id)}
      >
        <Icon
          name={item.favorite ? 'heart' : 'heart-outline'}
          size={24}
          color={item.favorite ? 'red' : 'black'}
        />
      </TouchableOpacity>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <View style={styles.cardLocation}>
        <Icon name="location-outline" size={16} color="black" />
        <Text style={styles.cardLocationText}>{item.location}</Text>
      </View>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <View style={styles.cardRating}>
        <Icon name="star" size={16} color="#f9a825" />
        <Text style={styles.cardRatingText}>{item.rating}</Text>
        <Text style={styles.cardReviews}>({item.reviews})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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
    backgroundColor: 'white',
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
    color: 'black',
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardLocationText: {
    marginLeft: 5,
    color: 'black',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardRatingText: {
    marginLeft: 5,
    color: 'black',
  },
  cardReviews: {
    marginLeft: 5,
    color: 'black',
  },
});

export default FrequentVisitScreen;
