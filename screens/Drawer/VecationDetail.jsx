import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const VacationDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vacation Details</Text>
      </View>

      <Image
        source={{ uri: 'https://example.com/vacation-image.jpg' }}
        style={styles.mainImage}
      />

      {/* Details Section */}
      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Taj Mahal</Text>
          <Icon name="heart-outline" size={24} color="red" />
        </View>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={16} color="black" />
          <Text style={styles.locationText}>Uttar Pradesh, India</Text>
          <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
          <Text style={styles.ratingText}>4.4 (41 Reviews)</Text>
        </View>
        <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.detailsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac
          lorem ipsum dolor sit amet.
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>$32 /Person</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding background color for better visibility
  },
  backButton: {
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
    alignSelf:'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  locationText: {
    marginLeft: 5,
    color: 'black', // Ensures location text is visible
  },
  starIcon: {
    marginLeft: 10,
  },
  ratingText: {
    marginLeft: 5,
    color: 'black', // Ensures rating text is visible
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black', // Ensures section title is visible
  },
  detailsText: {
    marginVertical: 10,
    color: 'black', // Ensures details text is visible
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
    color: 'black', // Ensures price text is visible
  },
  bookButton: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VacationDetailsScreen;
