import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const categories = [
  { title: 'AC', icon: require('../Assets/Iconsfacilities/ac.png') },
  { title: 'Restaurant', icon: require('../Assets/Iconsfacilities/restaurant.png') },
  { title: 'Swimming Pool', icon: require('../Assets/Iconsfacilities/swimming.png') },
  { title: '24-hours Front Desk', icon: require('../Assets/Iconsfacilities/24-hours.png') },
];

const services = [
  { name: 'Ac', image: require('../Assets/Iconsfacilities/ac.png'), screen: 'AC' },
  { name: 'Restaurant', image: require('../Assets/Iconsfacilities/restaurant.png'), screen: 'Restaurant' },
  { name: 'Swimming Pool', image: require('../Assets/Iconsfacilities/swimming.png'), screen: 'Swimming Pool' },
  { name: '24-hours Front Desk', image: require('../Assets/Iconsfacilities/24-hours.png'), screen: '24-hours Front Desk' },
  { name: 'Modern Room', image: require('../Assets/Iconsfacilities/room.png'), screen: 'Modern Room' },
  { name: '24-Hours Security', image: require('../Assets/Iconsfacilities/customer-service.png'), screen: '24-Hours Security' },
  { name: 'Beautiful View', image: require('../Assets/Iconsfacilities/window.png'), screen: 'Beautiful View' },
  { name: 'Open Space', image: require('../Assets/Iconsfacilities/park.png'), screen: 'Open Space' },
];

const HotelDetailsScreen = ({ route, navigation }) => {
  const isDay = useSelector(state => state.theme.isDay);
  const defaultImage = require('../Assets/visits/hotel.jpeg');
  const defaultHotelName = 'Hotel Name Unavailable';

  const { hotelName = defaultHotelName, hotelLocation, hotelImage = defaultImage } = route.params || {};

  const [modalVisible, setModalVisible] = useState(false);

  const handleServicePress = (screen) => {
    navigation.goBack();
  };

  const renderServiceItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleServicePress(item.screen)} style={styles.serviceItem}>
      <Image source={item.image} style={styles.serviceImage} />
      <Text style={styles.serviceName}>{item.name}</Text>
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
    <View style={[styles.container, { backgroundColor: isDay ? 'white' : '#333' }]}>
      <ScrollView>
        <View style={[styles.header, { backgroundColor: isDay ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.8)' }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color={isDay ? 'white' : 'lightgray'} />
          </TouchableOpacity>

          <Text style={[styles.headerTitle, { color: isDay ? 'white' : 'lightgray' }]}>Hotel Details</Text>
        </View>
        <Image source={hotelImage} style={styles.mainImage} />

        <View style={[styles.detailsContainer, { backgroundColor: isDay ? 'white' : '#444' }]}>
          <View style={styles.hotelInfo}>
            <Text style={[styles.hotelName, { color: isDay ? 'black' : 'white' }]}>{hotelName}</Text>
            <TouchableOpacity>
              <Icon name="heart-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>

          <Text style={[styles.hotelLocation, { color: isDay ? 'black' : 'white' }]}>
            <Icon name="location-outline" size={16} color={isDay ? 'black' : 'lightgray'} /> {hotelLocation}
            {'  '} <Icon name="star" size={16} color="#FFD700" /> 4.4 (41 Reviews)
          </Text>

          <Text style={[styles.commonFacilitiesTitle, { color: isDay ? 'black' : 'white' }]}>Common Facilities</Text>

          <View style={styles.categories}>
            {categories.map((category) => renderCategoryItem({ item: category }))}
          </View>

          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>

          <Text style={[styles.detailsTitle, { color: isDay ? 'black' : 'white' }]}>Details</Text>
          <Text style={[styles.detailsText, { color: isDay ? 'black' : 'lightgray' }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac leo lorem nisl.
            Viverra vulputate sodales quis et dui, lacus. Iaculis eu egestas leo egestas vel.
            <Text style={[styles.moreDetails, { color: isDay ? '#1E90FF' : '#00BFFF' }]}> More Details</Text>
          </Text>

          <Text style={[styles.reviewsTitle, { color: isDay ? 'black' : 'white' }]}>Reviews</Text>
          <View style={styles.reviewItem}>
            <Image
              source={require('../Assets/Tourguide/p1.jpg')}
              style={styles.reviewImage}
            />
            <View style={styles.reviewContent}>
              <View style={styles.reviewHeader}>
                <Text style={[styles.reviewName, { color: isDay ? 'black' : 'white' }]}>Jhone Kenoady</Text>
                <Text style={[styles.reviewDate, { color: isDay ? '#777' : '#999' }]}>23 Nov 2022</Text>
              </View>
              <View style={styles.reviewRating}>
                {Array(5).fill().map((_, i) => (
                  <Icon key={i} name="star" size={16} color="#FFD700" />
                ))}
              </View>
              <Text style={[styles.reviewText, { color: isDay ? '#777' : '#999' }]}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
              </Text>
            </View>
          </View>

          <Text style={[styles.locationTitle, { color: isDay ? 'black' : 'white' }]}>Location</Text>

          <View style={styles.priceContainer}>
            <Text style={[styles.price, { color: isDay ? '#32CD32' : '#00FF7F' }]}>$32</Text>
            <Text style={[styles.originalPrice, { color: isDay ? '#777' : '#999' }]}>$312</Text>
          </View>

          <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Book Hotel', {
            hotelName: hotelName,
            hotelLocation: hotelLocation,
            hotelImage: hotelImage,
            price: 32,
            originalPrice: 312,
          })}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent,{backgroundColor: isDay ? 'white' : 'gray'}]}>
            <Text style={[styles.bottomSheetHeading, { color: isDay ? 'black' : 'black' }]}>Facilities</Text>
            <FlatList
              data={services}
              renderItem={renderServiceItem}
              keyExtractor={(item) => item.name}
              numColumns={2}
              columnWrapperStyle={styles.columnWrapper}
              contentContainerStyle={styles.contentContainer}
            />
            <TouchableOpacity
              style={[styles.closeButton, { backgroundColor: isDay ? 'blue' :'#282C35'}]}
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  mainImage: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 20,
    marginTop: -30,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  hotelInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  hotelLocation: {
    color: 'black',
    marginVertical: 5,
  },
  commonFacilitiesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  facilitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  facilityItem: {
    alignItems: 'center',
  },
  facilityIcon: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
  facilityText: {
    marginTop: 5,
    color: 'black',
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  detailsText: {
    color: 'black',
    marginVertical: 5,
  },
  moreDetails: {
    color: '#1E90FF',
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  reviewItem: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  reviewImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  reviewContent: {
    flex: 1,
    marginLeft: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
  },
  reviewName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  reviewDate: {
    color: '#777',
  },
  reviewRating: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  reviewText: {
    color: '#777',
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#32CD32',
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#777',
    marginLeft: 10,
  },
  bookButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
    color: 'black',

  },
  columnWrapper: {
    justifyContent: 'space-around',
  },
  contentContainer: {
    paddingBottom: 16,
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
  serviceItem: {
    alignItems: 'center',
    width: '45%',
    margin: '2.5%',
  },
  serviceImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  },
  seeAllButton:{
    color:'blue',
  },
});

export default HotelDetailsScreen;