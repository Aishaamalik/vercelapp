import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const ComponentsScreen = ({ navigation }) => {
  const isDay = useSelector(state => state.theme.isDay); // Get the current theme mode
  const screenWidth = Dimensions.get('window').width;
  const containerWidth = screenWidth * 0.7;
  const initialTranslateX = containerWidth;

  const translateX = useRef(new Animated.Value(initialTranslateX)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateX, opacity]);

  return (
    <View style={[styles.outerContainer, { backgroundColor: isDay ? 'transparent' : 'transparent' }]}>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: isDay ? 'white' : '#444',
            transform: [{ translateX }],
            opacity,
            position: 'absolute',
          },
        ]}
      >
        <View style={[styles.header, { backgroundColor: isDay ? '#2196F3' : '#1E90FF' }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color={isDay ? 'white' : '#fff'} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: isDay ? 'white' : '#fff' }]}>Components</Text>
        </View>

        <TouchableOpacity
          style={[styles.menuItem, { borderBottomColor: isDay ? '#ddd' : '#555' }]}
          onPress={() => navigation.navigate('Splash')}
        >
          <View style={[styles.iconContainer, { backgroundColor: isDay ? '#2196F3' : '#1E90FF' }]}>
            <Icon name="sparkles" size={24} color="white" />
          </View>
          <Text style={[styles.menuItemText, { color: isDay ? 'black' : 'white' }]}>Splash Screen</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  container: {
    width: '70%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default ComponentsScreen;
