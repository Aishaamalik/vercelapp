// OutingScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const OutingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/outing-image.jpg' }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Best Outing destinations across world.</Text>
        <Text style={styles.description}>
          Ready for an Adventure? Explore the Globe's Finest Outing Destinations for Unforgettable Experiences and Endless Discoveries! From serene natural wonders to vibrant cultural hotspots, your next thrilling adventure awaits.
        </Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.skipButton}>
            <Icon name="arrow-right" size={24} color="white" />
            
          </TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: width,
    height: width * 0.75,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 40,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  skipButton: {
    backgroundColor: '#007AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipText: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 10,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#007AFF',
  },
});

export default OutingScreen;