import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../Drawer/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, useColorScheme } from 'react-native';
import Overview from './Overview';
import Pages from './Pages';
import OverviewReal from './OverviewReal';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

const IconWithCircle = ({ name, size, color }) => {
  return (
    <View style={[styles.iconContainer, { backgroundColor: color }]}>
      <Icon name={name} color="white" size={size} />
    </View>
  );
};

const DrawerLabel = ({ label, color }) => {
  return (
    <Text style={[styles.drawerLabel, { color }]}>
      {label}
    </Text>
  );
};

const DrawerNavigator = () => {
  const isDay = useSelector(state => state.theme.isDay);
  const backgroundColor = isDay ? '#ffffff' : '#333333';
  const textColor = isDay ? '#000000' : '#ffffff';
  const iconColor = isDay ? '#007AFF' : '#007AFF';

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Main"
      screenOptions={{
        drawerActiveTintColor: textColor,
        drawerInactiveTintColor: textColor,
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveBackgroundColor: 'transparent',
        headerShown: false,
        drawerStyle: {
          backgroundColor,
        },
        drawerLabelStyle: {
          color: textColor,
        },
      }}
    >
      <Drawer.Screen
        name="Overview"
        component={OverviewReal}
        options={{
          headerShown: false,
          drawerLabel: () => <DrawerLabel label="Overview" color={textColor} />,
          drawerIcon: (props) => (
            <IconWithCircle name="document-text-outline" size={24} color={iconColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pages"
        component={Pages}
        options={{
          drawerLabel: () => <DrawerLabel label="Pages" color={textColor} />,
          drawerIcon: (props) => (
            <IconWithCircle name="folder-outline" size={24} color={iconColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Main"
        component={Overview}
        options={{
          headerShown: false,
          drawerLabel: () => null,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default DrawerNavigator;
