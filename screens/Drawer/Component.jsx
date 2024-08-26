import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ComponentsScreen = ({ navigation }) => {
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
    <View style={styles.outerContainer}>
      <Animated.View
        style={[
          styles.container,
          { 
            transform: [{ translateX }],
            opacity,
            position: 'absolute',
          },
        ]}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Components</Text>
        </View>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Splash')}>
          <View style={styles.iconContainer}>
            <Icon name="sparkles" size={24} color="white" />
          </View>
          <Text style={styles.menuItemText}>Splash Screen</Text>
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
    backgroundColor: 'transparent',
  },
  container: {
    width: '70%', 
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  menuItemText: {
    fontSize: 18,
    color: 'black',
  },
});

export default ComponentsScreen;
