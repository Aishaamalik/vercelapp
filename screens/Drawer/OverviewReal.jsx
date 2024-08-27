import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import FrequentVisits from './FrequentVisits';
import TourGuide from './TourGuide';
import Onbudgetour from './Onbudgetour';

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

  return (
    <ScrollView style={styles.container}>
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
        <Image
          source={require('../Assets/Profile/pic1.jpeg')}
          style={styles.profileImage}
        />
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
        <Icon name="search" size={20} color="#aaa" />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
        />
        <Icon name="options" size={20} color="#aaa" />
      </View>

      <View style={styles.categories}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.category}
            onPress={() => category.title === 'More' && setModalVisible(true)}
          >
            <Image
              source={category.icon}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.bottomSheetHeading}>All Services</Text>
            <FlatList
              data={services}
              renderItem={renderServiceItem}
              keyExtractor={(item) => item.name}
              numColumns={4}
              columnWrapperStyle={styles.columnWrapper}
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

      <Text style={styles.sectionHeading}>Frequently Visited</Text>
      <View style={styles.sectionContainer1}>
        <FrequentVisits />
      </View>

      <View style={styles.headerSectionRow}>
        <Text style={styles.sectionHeading}>Tour Guide</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TourGuide')}>
          <Text style={styles.sectionLabel}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer2}>
      </View>

      <View style={styles.headerSectionRow}>
        <Text style={styles.sectionHeading}>On Budget Tour</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HotelList')}>
          <Text style={styles.sectionLabel}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer3}>
        <Onbudgetour />
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
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  category: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    height: '50%',
  },
  bottomSheetHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  serviceItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  serviceName: {
    fontSize: 12,
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#2196F3',
  },
  sectionContainer1: {
    flex: 1,
    padding: 10,
  },
  sectionContainer2: {
    flex: 1,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'column'
  },
  sectionContainer3: {
    flex: 1,
    padding: 10,
  },
  headerSectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  sectionLabel: {
    fontSize: 16,
    color: 'blue',
  },
});

export default OverviewScreen;
