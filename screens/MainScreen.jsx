import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Best travel destinations in the world.',
    description: 'Semper in cursus magna et eu varius nunc..',
    image: require('../screens/Assets/Mainscreen/splash1.webp'),
  },
  {
    title: 'Discover Hidden Gems.',
    description: 'Uncover the hidden gems of the world, from secluded beaches to secret mountain trails. Your adventure is just beginning!',
    image: require('../screens/Assets/Mainscreen/splash2.webp'),
  },
  {
    title: 'Adventure Awaits.',
    description: 'Gear up for an adventure of a lifetime. Whether you seek thrill or tranquility, the world has something special for you.',
    image: require('../screens/Assets/Mainscreen/splash3.webp'),
  },
  {
    title: 'Explore the Unseen.',
    description: 'Step off the beaten path and explore the unseen. Discover places that are less traveled and more treasured.',
    image: require('../screens/Assets/Mainscreen/splash4.jpeg'),
  },
];

const SliderScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
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
      <TouchableOpacity style={styles.skipButton}>
        <Icon name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.skipText}>Skip</Text>
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
    height: height * 0.75, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50, 
  },
  image: {
    width: '100%',
    height: '100%', 
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    bottom: -100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#007AFF', 
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
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
});

export default SliderScreen;
