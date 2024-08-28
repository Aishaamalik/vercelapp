import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HotelDetailsScreen = ({route, navigation }) => {
    const { hotelName, hotelLocation, hotelImage } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hotel Details</Text>
      </View>
      <Image source={hotelImage } style={styles.mainImage} />

      <View style={styles.detailsContainer}>
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>{hotelName}</Text>
          <TouchableOpacity>
            <Icon name="heart-outline" size={24} color="red" />
          </TouchableOpacity>
        </View>

        <Text style={styles.hotelLocation}>
          <Icon name="location-outline" size={16} /> {hotelLocation}
          {'  '} <Icon name="star" size={16} color="#FFD700" /> 4.4 (41 Reviews)
        </Text>


        <Text style={styles.commonFacilitiesTitle}>Common Facilities</Text>
        <View style={styles.facilitiesContainer}>
          <View style={styles.facilityItem}>
            <Icon name="airplane-outline" size={24} style={styles.facilityIcon} />
            <Text style={styles.facilityText}>Ac</Text>
          </View>
          <View style={styles.facilityItem}>
            <Icon name="document-text-outline" size={24} style={styles.facilityIcon} />
            <Text style={styles.facilityText}>Restaurant</Text>
          </View>
          <View style={styles.facilityItem}>
            <Icon name="water-outline" size={24} style={styles.facilityIcon} />
            <Text style={styles.facilityText}>Swimming Pool</Text>
          </View>
          <View style={styles.facilityItem}>
            <Icon name="calendar-outline" size={24} style={styles.facilityIcon} />
            <Text style={styles.facilityText}>24-Hours Front Desk</Text>
          </View>
        </View>

        <Text style={styles.detailsTitle}>Details</Text>
        <Text style={styles.detailsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac leo lorem nisl. 
          Viverra vulputate sodales quis et dui, lacus. Iaculis eu egestas leo egestas vel. 
          <Text style={styles.moreDetails}> More Details</Text>
        </Text>

        <Text style={styles.reviewsTitle}>Reviews</Text>
        <View style={styles.reviewItem}>
          <Image
            source={{ uri: 'https://example.com/user-profile.jpg' }}
            style={styles.reviewImage}
          />
          <View style={styles.reviewContent}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewName}>Jhone Kenoady</Text>
              <Text style={styles.reviewDate}>23 Nov 2022</Text>
            </View>
            <View style={styles.reviewRating}>
              {Array(5).fill().map((_, i) => (
                <Icon key={i} name="star" size={16} color="#FFD700" />
              ))}
            </View>
            <Text style={styles.reviewText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit.
            </Text>
          </View>
        </View>

        <Text style={styles.locationTitle}>Location</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$32</Text>
          <Text style={styles.originalPrice}>$312</Text>
        </View>

        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
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
});

export default HotelDetailsScreen;