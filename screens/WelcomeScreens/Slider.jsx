import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';  

const { width, height } = Dimensions.get('window');

const slides = [
  {
    number: 1,
    title: 'Best travel destinations in the world.',
    description: 'Ready for an Adventure? Explore the Globe Finest Outing Destinations for Unforgettable Experiences and Endless Discoveries! From serene natural wonders to vibrant cultural',
    image: require('../Assets/Mainscreen/splash1.webp'),
  },
  {
    number: 2,
    title: 'Meet the needs of the outing',
    description: 'Embark on an Adventure: Discover the Worlds Top Outing Destinations for Unforgettable Experiences and Memories!',
    image: require('../Assets/Mainscreen/splash2.webp'),
  },
  {
    number: 3,
    title: 'Go on adventures getaway with a smile',
    description: 'Prepare for Exploration: Unveil the Ultimate Outing Destinations Around the Globe for Unforgettable Adventures and Discoveries!',
    image: require('../Assets/Mainscreen/splash3.webp'),
  },
  {
    number: 4,
    title: 'We are here to make your visit easier',
    description: 'Unlock Unforgettable Experiences: Journey to the Best Outing Places Across the Globe for Adventures That Last a Lifetime!',
    image: require('../Assets/Mainscreen/splash4.jpeg'),
  },
];

const SliderScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        {item.number === 4 && (
          <TouchableOpacity 
            style={styles.getStartedButton} 
            onPress={() => navigation.navigate('Screen1')} 
          >
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={slides}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveSlide(index)}
        firstItem={activeSlide} 
      />
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      
      {(activeSlide === 0 || activeSlide === 1 || activeSlide === 2) && (
        <>
          <TouchableOpacity style={styles.skipButton} onPress={() => setActiveSlide(3)}>
            <Icon name="arrow-right" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slide: {
    width: width,
    height: height,
  },
  image: {
    width: '100%',
    height: '50%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  textContainer: {
    width: '100%',
    height: '50%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'flex-end',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
  skipButton: {
    backgroundColor: '#007AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#007AFF',
    position: 'absolute',
    bottom: 30,
    left: 80,
  },
  getStartedButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#007AFF',
    borderRadius: 25,
  },
  getStartedButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default SliderScreen;
