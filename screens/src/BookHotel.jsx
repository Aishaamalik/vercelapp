import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Calendar } from 'react-native-calendars'; // Import the Calendar component

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

const BookHotelScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false); // State for calendar modal
  const [selectedDate, setSelectedDate] = useState(''); // State to keep track of the selected date

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
          <Text style={styles.infoValue}>Andy Lexian</Text>
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
            source={require('../Assets/visits/hotel.jpeg')} 
            style={styles.hotelImage}
          />
          <View style={styles.hotelDetails}>
            <Text style={styles.hotelName}>The Lalit New Delhi</Text>
            <Text style={styles.hotelLocation}>Uttar Pradesh, India</Text>
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
        <View style={styles.facilitiesHeader}>
          <Text style={styles.sectionTitle}>Common Facilities</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText} onPress={() => setModalVisible(true)}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categories}>
          {categories.map((category) => renderCategoryItem({ item: category }))}
        </View>

        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.seeAllButton}></TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Stay time</Text>
        <View style={styles.dateRow}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateLabel}>Check in</Text>
            <TouchableOpacity style={styles.dateInput} onPress={() => setCalendarVisible(true)}>
              <Text style={styles.dateText}>{selectedDate || 'Date'}</Text>
              <Ionicons name="calendar" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateLabel}>Check Out</Text>
            <TouchableOpacity style={styles.dateInput} onPress={() => setCalendarVisible(true)}>
              <Text style={styles.dateText}>{selectedDate || 'Date'}</Text>
              <Ionicons name="calendar" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
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

      {/* Calendar Modal */}
      <Modal
        transparent={true}
        visible={calendarVisible}
        onRequestClose={() => setCalendarVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Calendar
              onDayPress={(day) => {
                setSelectedDate(day.dateString);
                setCalendarVisible(false);
              }}
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: '#007BFF' }
              }}
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
    </ScrollView>
  );
};

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#000',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    infoLabel: {
        color: '#888',
        fontSize: 14,
    },
    infoValue: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 14,
    },
    orderInfo: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    hotelImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    hotelDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    hotelName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },
    hotelLocation: {
        color: '#888',
        fontSize: 14,
        marginBottom: 5,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
        color: '#888',
        fontSize: 14,
    },
    facilitiesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    seeAllText: {
        color: '#007BFF',
        fontSize: 14,
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 10,
    },
    category: {
        alignItems: 'center',
        width: 70,
        marginBottom: 15,
    },
    categoryIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    categoryText: {
        marginTop: 5,
        fontSize: 12,
        color: 'black',
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateContainer: {
        flex: 1,
        marginRight: 10,
    },
    dateLabel: {
        color: '#888',
        fontSize: 14,
        marginBottom: 5,
    },
    dateInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    dateText: {
        color: '#888',
        fontSize: 14,
    },
    serviceItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        margin: '2.5%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
    },
    serviceImage: {
        width: 40,
        height: 40,
        marginBottom: 8,
        resizeMode: 'contain',
    },
    serviceName: {
        fontSize: 14,
        textAlign: 'center',
        color: '#000',
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
        marginBottom: 10,
        color: '#000',
    },
    closeButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    closeButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    contentContainer: {
        paddingBottom: 20,
    },
});


export default BookHotelScreen;
