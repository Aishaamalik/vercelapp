import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    image: require('../Assets/visits/tahitibeach.jpeg'), 
    title: 'Tahiti Beach',
    location: 'Polynesia, French',
    price: '$235',
    rating: '4.4',
    reviews: '32',
    favorite: true,
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
];

const FrequentVisitScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <TouchableOpacity style={styles.favoriteIcon}>
        <Icon name={item.favorite ? 'heart' : 'heart-outline'} size={24} color={item.favorite ? 'red' : 'black'} />
      </TouchableOpacity>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <View style={styles.cardLocation}>
        <Icon name="location-outline" size={16} color="#aaa" />
        <Text style={styles.cardLocationText}>{item.location}</Text>
      </View>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <View style={styles.cardRating}>
        <Icon name="star" size={16} color="#f9a825" />
        <Text style={styles.cardRatingText}>{item.rating}</Text>
        <Text style={styles.cardReviews}>({item.reviews})</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
  contentContainer: {
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardLocationText: {
    marginLeft: 5,
    color: '#aaa',
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
    marginBottom: 10,
  },
  cardRatingText: {
    marginLeft: 5,
    color: '#f9a825',
  },
  cardReviews: {
    marginLeft: 5,
    color: '#aaa',
  },
});

export default FrequentVisitScreen;
