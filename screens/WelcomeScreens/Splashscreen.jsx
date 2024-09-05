import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { useSelector } from 'react-redux';

const SplashScreen = ({ navigation }) => {
  const isDay = useSelector(state => state.theme.isDay); 
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
      navigation.replace('Screen1'); 
    }, 3500); 
  }, [navigation, spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.container, { backgroundColor: isDay ? '#007AFF' : '#004080' }]}>
      <View style={[styles.logoContainer, { backgroundColor: isDay ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.3)' }]}>
        <Text style={[styles.logoText, { color: isDay ? 'white' : '#e0e0e0' }]}>Travgo</Text>
        <Text style={[styles.tagline, { color: isDay ? 'white' : '#b0b0b0' }]}>Discover Your Destination</Text>
      </View>
      
      <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }], backgroundColor: isDay ? 'transparent' : '#004080' }]}>
        <Icon name="spinner" size={40} color={isDay ? 'white' : 'white'} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  logoText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 12,
    marginTop: 10,
  },
  spinner: {
    position: 'absolute',
    bottom: 60,
  },
});

export default SplashScreen;
