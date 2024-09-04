import React from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../Themes/ThemeAction';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const isDay = useSelector(state => state.theme.isDay); 
  const dispatch = useDispatch();

  const handleToggleSwitch = () => {
    dispatch(toggleTheme()); 
  };

  const dynamicStyles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDay ? '#007AFF' : '#333', 
      padding: 15,
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 15,
    },
    name: {
      color: isDay ? 'white' : 'lightgray', 
      fontSize: 18,
      fontWeight: 'bold',
    },
    status: {
      color: isDay ? 'white' : 'lightgray', 
      fontSize: 14,
    },
    sectionTitle: {
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 10,
      fontSize: 16,
      fontWeight: 'bold',
      color: isDay ? 'black' : 'white',
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
    },
    switchLabel: {
      flex: 1,
      marginLeft: 15,
      fontSize: 16,
      color: isDay ? 'black' : 'white',
    },
    iconContainer: {
      width: 35,
      height: 35,
      backgroundColor: '#007AFF',
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
    },
    drawerLabel: {
      fontSize: 16,
      color: isDay ? 'black' : 'white',
    },
  });

  return (
    <DrawerContentScrollView {...props}>
      <View style={dynamicStyles.header}>
        <Image
          source={require('../Assets/Profile/pic1.jpeg')} 
          style={dynamicStyles.profileImage}
        />
        <View>
          <Text style={dynamicStyles.name}>Angela Mayer</Text>
          <Text style={dynamicStyles.status}>Verified user · Membership</Text>
        </View>
      </View>      
      <Text style={dynamicStyles.sectionTitle}>Main</Text>

      <DrawerItemList {...props} />
      <Text style={dynamicStyles.sectionTitle}>Others</Text>
      <DrawerItem
        label="Components"
        icon={({ color, size }) => (
          <View style={dynamicStyles.iconContainer}>
            <Icon name="grid-outline" color="#fff" size={size * 1} />
          </View>
        )}
        labelStyle={dynamicStyles.drawerLabel}
        onPress={() => {
          navigation.navigate('Component');    
        }}
      />
      <DrawerItem
        label="Settings"
        icon={({ color, size }) => (
          <View style={dynamicStyles.iconContainer}>
            <Icon name="settings-outline" color="#fff" size={size * 1} />
          </View>
        )}
        labelStyle={dynamicStyles.drawerLabel}
        onPress={() => {
          navigation.navigate('Settings');    
        }}
      />
      <View style={dynamicStyles.switchContainer}>
        <View style={dynamicStyles.iconContainer}>
          <Icon name="moon-outline" size={28} color="#fff" />
        </View>
        <Text style={dynamicStyles.switchLabel}>Switch Theme</Text>
        <Switch
          value={isDay}
          onValueChange={handleToggleSwitch}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
