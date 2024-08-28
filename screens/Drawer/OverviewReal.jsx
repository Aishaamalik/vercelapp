import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import FrequentVisits from './FrequentVisits';

const categories = [
  { title: 'Airport', icon: require('../Assets/Icons/airport.png') },
  { title: 'Rental', icon: require('../Assets/Icons/car-rental.png') },
  { title: 'Hotel', icon: require('../Assets/Icons/3-stars.png') },
  { title: 'More', icon: require('../Assets/Icons/application.png') },
];

const services = [
  { name: 'Airport', image: require('../Assets/Icons/airport.png'), screen: 'Airport' },
  { name: 'Taxi', image: require('../Assets/Icons/taxi.png'), screen: 'Taxi' },
  { name: 'Hotel', image: require('../Assets/Icons/3-stars.png'), screen: 'Hotel' },
  { name: 'Villa', image: require('../Assets/Icons/new-house.png'), screen: 'Villa' },
  { name: 'Cafe', image: require('../Assets/Icons/cafe.png'), screen: 'Cafe' },
  { name: 'Luggage', image: require('../Assets/Icons/bag.png'), screen: 'Luggage' },
  { name: 'Ship', image: require('../Assets/Icons/cruise.png'), screen: 'Ship' },
  { name: 'Camera', image: require('../Assets/Icons/camera.png'), screen: 'Camera' },
];

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

const hotels = [
  {
    id: '1',
    name: 'Ledadu Beach',
    duration: '3 days 2 nights',
    location: 'Australia',
    price: '$20/Person',
    image: require('../Assets/visits/ledadubeach.jpeg'),
  },
  {
    id: '2',
    name: 'Endigada Beach',
    duration: '5 days 4 nights',
    location: 'India',
    price: '$18/Person',
    image: require('../Assets/visits/endigadabeach.jpeg'),
  },
  {
    id: '3',
    name: 'Doreen Tower',
    duration: '5 days 4 nights',
    location: 'USA',
    price: '$14/Person',
    image: require('../Assets/visits/tower.jpeg'),
  },
  {
    id: '4',
    name: 'Royal Palace',
    duration: '5 days 4 nights',
    location: 'India',
    price: '$21/Person',
    image: require('../Assets/visits/royalpalace.jpeg'),
  },
  {
    id: '5',
    name: 'Ignition Mall',
    duration: '5 days 4 nights',
    location: 'China',
    price: '$17/Person',
    image: require('../Assets/visits/mall.jpeg'),
  },
  {
    id: '6',
    name: 'Endigada Hotel',
    duration: '5 days 4 nights',
    location: 'Australia',
    price: '$20/Person',
    image: require('../Assets/visits/hotel.jpeg'),
  },
];

const OverviewScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleServicePress = (screen) => {
    navigation.navigate(screen);
    setModalVisible(false);
  };

  const renderServiceItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleServicePress(item.screen)} style={styles.serviceItem}>
      <Image source={item.image} style={styles.serviceImage} />
      <Text style={styles.serviceName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderGuideItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.cardContainer}
      onPress={() => navigation.navigate('GuideProfile', { guideId: item.id })} // Navigate to "GuideProfile" screen with guide ID
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.ratingContainer}>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardDetails}>{item.price}</Text>
        <View style={styles.cardLocation}>
          <Icon name="location-outline" size={16} color="#aaa" />
          <Text style={styles.cardLocationText}>{item.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  

  const renderHotelItem = ({ item }) => (
    <View style={styles.itemContainer1}>
      <Image source={item.image} style={styles.image1} />
      <View style={styles.textContainer1}>
        <Text style={styles.name1}>{item.name}</Text>
        <Text style={styles.duration1}>{item.duration}</Text>
        <View style={styles.locationContainer1}>
          <Icon name="location-outline" size={14} color="#555" />
          <Text style={styles.location1}>{item.location}</Text>
        </View>
      </View>
      <Text style={styles.price1}>{item.price}</Text>
    </View>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      key={item.title}
      style={styles.category}
      onPress={() => item.title === 'More' && setModalVisible(true)}
    >
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="menu" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.headerIcons}>
              <Icon1 name="moon" size={24} color="white" style={styles.headerIcon} />
              <Icon name="person-outline" size={24} color="white" style={styles.headerIcon} />
            </View>
          </View>

          <View style={styles.profileSection}>
            <Image source={require('../Assets/Profile/pic1.jpeg')} style={styles.profileImage} />
            <View>
              <Text style={styles.greeting}>Hi, Andy</Text>
              <Text style={styles.location}>Netherlands</Text>
            </View>
            <View style={styles.profileIcons}>
              <Icon1 name="bell" size={24} color="black" style={styles.profileIcon} />
              <Icon1 name="message-square" size={24} color="black" style={styles.profileIcon} />
            </View>
          </View>

          <View style={styles.searchBar}>
            <Icon name="search" size={20} color="black" />
            <TextInput placeholder="Search..." style={styles.searchInput} placeholderTextColor={'black'} />
            <Icon name="options" size={20} color="black" />
          </View>

          <View style={styles.categories}>
            {categories.map((category) => renderCategoryItem({ item: category }))}
          </View>

          <Text style={styles.sectionHeading}>Frequently Visited</Text>
          <View style={styles.sectionContainer}>
          <FrequentVisits  />
          </View>

          <View style={styles.headerSectionRow}>
            <Text style={styles.sectionHeading}>Tour Guide</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TourGuide')}>
              <Text style={styles.sectionLabel}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionContainer}>
            
            <FlatList
              data={guide}
              renderItem={renderGuideItem}
              keyExtractor={(item) => item.id}
              horizontal
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.headerSectionRow}>
            <Text style={styles.sectionHeading}>On Budget Tour</Text>
            <TouchableOpacity onPress={() => navigation.navigate('HotelList')}>
              <Text style={styles.sectionLabel}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionContainer}>
            <FlatList
              data={hotels}
              renderItem={renderHotelItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.listContainer}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      )}
      data={[]} 
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 15,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  location: {
    fontSize: 14,
    color: 'black',
  },
  profileIcons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  profileIcon: {
    marginLeft: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  category: {
    alignItems: 'center',
    width: 70,
  },
  categoryIcon: {
    width: 30,
    height: 30,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  bottomSheetHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginVertical: 10,
    color: 'black',
  },
  sectionContainer: {
    paddingHorizontal: 15,
  },
  headerSectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#2196F3',
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
  ratingText: {
    fontSize: 14,
    color: '#FFD700',
    marginLeft: 5,
  },
  // The On Budget Tour

  itemContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image1: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  textContainer1: {
    flex: 1,
    marginLeft: 16,
  },
  name1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  duration1: {
    color: 'black',
    marginVertical: 4,
  },
  locationContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location1: {
    color: 'black',
    marginLeft: 4,
  },
  price1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default OverviewScreen;
