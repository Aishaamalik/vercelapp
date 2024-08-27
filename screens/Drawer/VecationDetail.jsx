import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const guide = [
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

const VacationDetailsScreen = ({ route, navigation }) => {
  const { image, title, location, price, rating, reviews, favorite } = route.params;

  const renderGuideItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.ratingContainer}>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={styles.ratingText1}>{item.rating}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardDetails}>{item.price}</Text>
        <View style={styles.cardLocation}>
          <Icon name="location-outline" size={16} color="#aaa" />
          <Text style={styles.cardLocationText}>{item.location}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vacation Details</Text>
      </View>
      <Image source={image} style={styles.mainImage} />

      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Icon
            name={favorite ? "heart" : "heart-outline"}
            size={24}
            color={favorite ? "red" : "black"}
          />
        </View>

        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={16} color="black" />
          <Text style={styles.locationText}>{location}</Text>
          <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
          <Text style={styles.ratingText}>{rating} ({reviews} Reviews)</Text>
        </View>
        <Text style={styles.price}>Price: {price}</Text>
        <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.detailsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac lorem ipsum dolor sit amet.
        </Text>

        <Text style={styles.sectionTitle}>Tour Guide</Text>
        <View style={styles.tourGuideCard}>
          <FlatList
            data={guide}
            renderItem={renderGuideItem}
            keyExtractor={(item) => item.id}
            horizontal
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        
        <View style={styles.budgetSection}>
          <Text style={styles.sectionTitle}>On Budget Tour</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Review')} style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container1}>
        <Text style={styles.sectionTitle}>Location</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.price}>$32</Text>
        <Text style={styles.price1}>/Person</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 10,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backButton: {
    position: 'absolute', 
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainImage: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  locationText: {
    marginLeft: 5,
    color: 'black',
  },
  starIcon: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  detailsText: {
    marginVertical: 10,
    color: 'black',
  },
  tourGuideCard: {
    borderRadius: 10,
    padding: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: 'hidden',
    width: 300,
    marginBottom: 20,
    padding: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  cardDetails: {
    fontSize: 14,
    color: '#555',
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardLocationText: {
    fontSize: 12,
    color: '#aaa',
    marginLeft: 5,
  },
  locationImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  price1: {
    fontSize: 16,
    color: '#555',
  },
  bookButton: {
    backgroundColor: '#0077b6',
    padding: 10,
    borderRadius: 20,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  seeAllButton: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  seeAllText: {
    color: '#0077b6',
    fontWeight: 'bold',
  },
  ratingText:{
    color:'black',
  },
  ratingContainer: {
    position: 'absolute',
    top: 90,
    right: 210,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: 20,
    padding: 5,
  },
  ratingText1: {
    fontSize: 14,
    color: '#FFD700',
    marginLeft: 5,
  },
});

export default VacationDetailsScreen;
