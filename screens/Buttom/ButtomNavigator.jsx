import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Home from './Home';
import Menu from './Menu';
import Booked from './Booked';
import Liked from './Liked';
import Profile from './Profile';

const Buttom = createBottomTabNavigator();

const ButtomNavigator = () => {
  return (
    <Buttom.Navigator
      initialRouteName='Profile'
      screenOptions={{
        tabBarShowLabel: false, 
        tabBarActiveTintColor: '#0077b6',
        tabBarInactiveTintColor: 'gray', 
        headerShown: false,
      }}
    >
      <Buttom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? "home" : "home-outline"} color={color} size={size} />
          ),
        }}
      />
      <Buttom.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon1 name={focused ? "appstore1" : "appstore-o"} color={color} size={size} />
          ),
        }}
      />
      <Buttom.Screen
        name="Booked"
        component={Booked}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon1 name={focused ? "book" : "book"} color={color} size={size} />
          ),
        }}
      />
      <Buttom.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? "heart" : "heart-outline"} color={color} size={size} />
          ),
        }}
      />
      <Buttom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? "person" : "person-outline"} color={color} size={size} />
          ),
        }}
      />
    </Buttom.Navigator>
  );
}

export default ButtomNavigator;

const styles = StyleSheet.create({});
