import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, Modal, ScrollView } from 'react-native';
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
      onPress={() => navigation.navigate('GuideProfile', {
        guideImage: item.image,
        guideName: item.name
      })}
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
    <TouchableOpacity
      style={styles.itemContainer1}
      onPress={() => navigation.navigate('HotelDetail', { 
        hotelImage: item.image,
        hotelName: item.name,
        hotelLocation: item.location,
      })}
    >
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
    </TouchableOpacity>
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
    <View style={styles.container}>
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
              <FrequentVisits />
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

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.bottomSheetHeading}>Additional Services</Text>
            <FlatList
              data={services}
              renderItem={renderServiceItem}
              keyExtractor={(item) => item.name}
              numColumns={2}
              columnWrapperStyle={styles.columnWrapper}
              contentContainerStyle={styles.contentContainer}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#007BFF',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#888',
  },
  profileIcons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  profileIcon: {
    marginLeft: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  category: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  sectionContainer: {
    marginBottom: 16,
  },
  cardContainer: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    elevation: 2,
    width: 150,
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#FFD700',
  },
  cardContent: {
    padding: 8,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 14,
    color: '#888',
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLocationText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#555',
  },
  itemContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    margin: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
  },
  image1: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textContainer1: {
    flex: 1,
    marginLeft: 8,
  },
  name1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  duration1: {
    fontSize: 14,
    color: '#888',
  },
  locationContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location1: {
    marginLeft: 4,
    fontSize: 14,
    color: '#555',
  },
  price1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    height: '50%',
  },
  bottomSheetHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  columnWrapper: {
    justifyContent: 'space-around',
  },
  contentContainer: {
    paddingBottom: 16,
  },
  serviceItem: {
    alignItems: 'center',
    width: '45%',
    margin: '2.5%',
  },
  serviceImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 14,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OverviewScreen;
