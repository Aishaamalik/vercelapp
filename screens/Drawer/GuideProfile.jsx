import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GuideProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      {/* Header with back arrow and title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Background Image */}
      <Image
        source={require('../Assets/visits/hotel.jpeg')}
        style={styles.backgroundImage}
      />

      {/* Profile Picture and Name Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../Assets/Tourguide/p1.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Jonsky Alexia</Text>
        <Text style={styles.profileSubtitle}>
          International tour guide in <Text style={styles.highlightedText}>Pakistan</Text>
        </Text>
        <Text style={styles.profileSubtitle}>Travel and food vlogger</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.buttonText}>Call Now</Text>
        </TouchableOpacity>
      </View>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Guide</Text>
          <Text style={styles.infoValue}>700+</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Experience</Text>
          <Text style={styles.infoValue}>3 Years</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Rate</Text>
          <Text style={styles.infoValue}>4.0/5</Text>
        </View>
      </View>

      {/* About Us Section */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About Us</Text>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac leo lorem nisl. Viverra 
          vulputate sodales quis et dui, lacus. Iaculis eu egestas leo egestas vel. Ultrices ut magna 
          nulla facilisi commodo enim, orci feugiat pharetra.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40, 
    paddingHorizontal: 20,
    width: '65%',
    zIndex: 10,
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 220,
    width: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 150,
    paddingHorizontal: 20, 
  },
  profileImage: {
    width: 120, 
    height: 120,
    borderRadius: 60, 
    borderWidth: 4,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
  },
  profileSubtitle: {
    fontSize: 16, 
    color: '#555',
    textAlign: 'center',
    marginTop: 5, 
  },
  highlightedText: {
    color: '#FF5733',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  messageButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  callButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  infoBox: {
    alignItems: 'center',
  },
  infoLabel: {
    color: '#777',
    fontSize: 14,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  aboutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  aboutTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16, 
    lineHeight: 22,
    color: '#777',
  },
});

export default GuideProfileScreen;
