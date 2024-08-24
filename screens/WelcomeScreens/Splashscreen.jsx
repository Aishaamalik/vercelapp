import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const SplashScreen = ({ navigation }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start();

    setTimeout(() => {
      navigation.replace('Slider'); 
    }, 3500); 
  }, [navigation, spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Travgo</Text>
        <Text style={styles.tagline}>Discover Your Destination</Text>
      </View>
      
      <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]}>
          <Icon name="spinner" size={40} color="white" />
        </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 100,
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  logoText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  tagline: {
    fontSize: 12,
    color: 'white',
    marginTop: 10,
  },
  spinner: {
    position: 'absolute',
    bottom: 60,  
  },
});

export default SplashScreen;
