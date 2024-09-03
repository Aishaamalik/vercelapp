import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';

const categories = [
  { title: 'AC', icon: require('../Assets/Iconsfacilities/ac.png') },
  { title: 'Restaurant', icon: require('../Assets/Iconsfacilities/restaurant.png') },
  { title: 'Swiming Pool', icon: require('../Assets/Iconsfacilities/swimming.png') },
  { title: '24-hours Front Desk', icon: require('../Assets/Iconsfacilities/24-hours.png') },
];

const services = [
  { name: 'Ac', image: require('../Assets/Iconsfacilities/ac.png'), screen: 'AC' },
  { name: 'Restraurant', image: require('../Assets/Iconsfacilities/restaurant.png'), screen: 'Restaurant' },
  { name: 'Swiming Pool', image: require('../Assets/Iconsfacilities/swimming.png'), screen: 'Swimming Pool' },
  { name: '24-hours Front Desk', image: require('../Assets/Iconsfacilities/24-hours.png'), screen: '24-hours Front Desk' },
  { name: 'Modern Room', image: require('../Assets/Iconsfacilities/room.png'), screen: 'Modern Room' },
  { name: '24-Hours Security', image: require('../Assets/Iconsfacilities/customer-service.png'), screen: '24-Hours Security' },
  { name: 'Beautiful View', image: require('../Assets/Iconsfacilities/window.png'), screen: 'Beautiful View' },
  { name: 'Open Space', image: require('../Assets/Iconsfacilities/park.png'), screen: 'Open Space' },
];

const BookHotelScreen = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Get params from route
  const {
    hotelName = 'Hotel Name Unavailable',
    hotelLocation = 'Location Not Available',
    hotelImage = require('../Assets/visits/hotel.jpeg'),
    price = 0,
    originalPrice = 0
  } = route.params || {};

  const handleServicePress = (screen) => {
    navigation.goBack();
  };

  const handleDateChange = (date) => {
    if (!startDate) {
      setStartDate(date.dateString);
    } else if (startDate && !endDate) {
      setEndDate(date.dateString);
      setCalendarVisible(false);
    }
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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Hotel</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Customer Info</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>Name Not Set</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>example@mail.com</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Info</Text>
        <View style={styles.orderInfo}>
          <Image
            source={hotelImage}
            style={styles.hotelImage}
          />
          <View style={styles.hotelDetails}>
            <Text style={styles.hotelName}>{hotelName}</Text>
            <Text style={styles.hotelLocation}>{hotelLocation}</Text>
            <View style={styles.rating}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>4.4 (41)</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Type Room</Text>
          <Text style={styles.infoValue}>Presidential Suite</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Stay Duration</Text>
        <TouchableOpacity style={styles.dateButton} onPress={() => setCalendarVisible(true)}>
          <Text style={styles.dateButtonText}>
            {startDate && endDate ? `${startDate} to ${endDate}` : 'Select Dates'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.facilitiesHeader}>
          <Text style={styles.sectionTitle}>Common Facilities</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText} onPress={() => setModalVisible(true)}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categories}>
          {categories.map((category) => renderCategoryItem({ item: category }))}
        </View>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.bottomSheetHeading}>Facilities</Text>
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

      <Modal
        transparent={true}
        visible={calendarVisible}
        onRequestClose={() => setCalendarVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Calendar
              onDayPress={handleDateChange}
              markedDates={{ [startDate]: { selected: true }, [endDate]: { selected: true } }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCalendarVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.bookingDetails}>
        <Text style={styles.bookingDetailText}>Price: ${price}</Text>
        <Text style={styles.bookingDetailText}>Original Price: ${originalPrice}</Text>
        <TouchableOpacity style={styles.bookButton}
          onPress={() => navigation.navigate('Checkout', {
            hotelName,
            hotelLocation,
            hotelImage,
            price,
            originalPrice,
            startDate,
            endDate,
            customerName: 'Name Not Set', 
            customerEmail: 'example@mail.com' 
          })}>
          <Text style={styles.bookButtonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: 'black',
  },
  infoValue: {
    color: '#555',
  },
  orderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  hotelImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  hotelDetails: {
    marginLeft: 15,
    flex: 1,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  hotelLocation: {
    color: '#555',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    color: '#555',
  },
  dateButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    alignItems: 'center',
  },
  dateButtonText: {
    color: '#555',
  },
  facilitiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  seeAllText: {
    color: '#007BFF',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  category: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 10,
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
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomSheetHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  serviceItem: {
    alignItems: 'center',
  },
  serviceImage: {
    width: 50,
    height: 50,
  },
  serviceName: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  bookingDetails: {
    padding: 15,
  },
  bookingDetailText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  bookButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BookHotelScreen;
