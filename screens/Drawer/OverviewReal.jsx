import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import FrequentVisits from './FrequentVisits';
import { toggleTheme } from '../Themes/ThemeAction';
import { useSelector, useDispatch } from 'react-redux';


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

const handleServicePress = (categoryTitle) => {
  switch (categoryTitle) {
    case 'Airport':
      navigation.navigate('Airport'); 
      break;
    case 'Rental':
      navigation.navigate('Rental'); 
      break;
    case 'Hotel':
      navigation.navigate('Hotel'); 
      break;
    default:
      setModalVisible(false);
      break;
  }
};
const OverviewScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const isDay = useSelector(state => state.theme.isDay);
  const dispatch = useDispatch();
  const textColor = isDay ? 'black' : 'white';



  const handleServicePress = (screen) => {
    navigation.navigate(screen);
    setModalVisible(false);
  };
  const renderServiceItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleServicePress(item.screen)} style={[styles.serviceItem, { backgroundColor: isDay ? 'white' : '#282C35' }]}>
      <Image source={item.image} style={styles.serviceImage} />
      <Text style={[styles.serviceName, { color: textColor }]}>{item.name}</Text>
    </TouchableOpacity>
  );
  const renderGuideItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.cardContainer, { backgroundColor: isDay ? 'white' : '#282C35' }]}
      onPress={() => navigation.navigate('GuideProfile', {
        guideImage: item.image,
        guideName: item.name
      })}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.ratingContainer}>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={[styles.ratingText, { color: textColor }]}>{item.rating}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={[styles.cardName, { color: textColor }]}>{item.name}</Text>
        <Text style={[styles.cardDetails, { color: textColor }]}>{item.price}</Text>
        <View style={styles.cardLocation}>
          <Icon name="location-outline" size={16} color="#aaa" />
          <Text style={[styles.cardLocationText, { color: textColor }]}>{item.location}</Text>
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
        <Text style={[styles.name1, { color: textColor }]}>{item.name}</Text>
        <Text style={[styles.duration1, { color: textColor }]}>{item.duration}</Text>
        <View style={styles.locationContainer1}>
          <Icon name="location-outline" size={14} color="#555" />
          <Text style={[styles.location1, { color: textColor }]}>{item.location}</Text>
        </View>
      </View>
      <Text style={[styles.price1, { color: textColor }]}>{item.price}</Text>
    </TouchableOpacity>
  );
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      key={item.title}
      style={styles.category}
      onPress={() => {
        if (item.title === 'More') {
          setModalVisible(true);
        } else {
          handleServicePress(item.title);
        }
      }}
    >
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text style={[styles.categoryText, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDay ? 'white' : '#282C35' }]}>
      <FlatList
        ListHeaderComponent={() => (
          <>
          <View style={[styles.header, { backgroundColor: isDay ? '#2196F3' : '#2196F3' }]}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="menu" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.headerIcons}>
              <Icon1 name={isDay ? 'sun' : 'moon'} size={24} color="white" style={styles.headerIcon} />
              <TouchableOpacity onPress={()=> navigation.navigate("Buttontabs")}>
                <Icon name="person-outline" size={24} color="white" style={styles.headerIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.profileSection}>
              <Image source={require('../Assets/Profile/pic1.jpeg')} style={styles.profileImage} />
              <View>
                <Text style={[styles.profileName, { color: textColor }]}>Alonzo Endera</Text>
                <Text style={[styles.profileLocation, { color: textColor }]}>Polynesia, French</Text>
              </View>
            
              <View style={styles.profileIcons}>
                <TouchableOpacity onPress={()=> navigation.navigate('Main Notifications')}>                
                  <Icon1 name="bell" size={24} color="gray" style={styles.profileIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Message')}>
                <Icon1 name="message-square" size={24} color="gray" style={styles.profileIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={[styles.searchBar, { backgroundColor: isDay ? 'white' : '#282C35', color: textColor }]}
              placeholder="Search"
              placeholderTextColor={isDay ? '#999' : '#aaa'}
            />

            <View style={styles.categories}>
              {categories.map((category) => renderCategoryItem({ item: category }))}
            </View>

            <Text style={[styles.sectionHeading, { color: textColor }]}>Frequently Visited</Text>
            <View style={[styles.sectionContainer, { backgroundColor: isDay ? 'white' : '#282C35', color: textColor }]}>
              <FrequentVisits />
            </View>

            <View style={styles.headerSectionRow}>
              <Text style={[styles.sectionHeading, { color: textColor }]}>Tour Guide</Text>
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
              <Text style={[styles.sectionHeading, { color: textColor }]}>On Budget Tour</Text>
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
          <View style={[styles.modalContent, { backgroundColor: isDay ? 'white' : '#282C35' }]}>
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
    color:'black',

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
    color:'black',
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

