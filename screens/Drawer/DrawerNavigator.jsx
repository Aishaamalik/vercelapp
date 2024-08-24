import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../Drawer/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text } from 'react-native';
import Overview from './Overview';
import Pages from './Pages';
import OverviewReal from './OverviewReal';

const Drawer = createDrawerNavigator();

const IconWithCircle = ({ name, size }) => {
  return (
    <View style={styles.iconContainer}>
      <Icon name={name} color="white" size={size} />
    </View>
  );
};

const DrawerLabel = ({ label }) => {
  return (
    <Text style={styles.drawerLabel}>
      {label}
    </Text>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Main"
      screenOptions={{
        drawerActiveTintColor: '#000', 
        drawerInactiveTintColor: '#000',
        drawerActiveBackgroundColor: 'transparent', 
        drawerInactiveBackgroundColor: 'transparent',
      }}
    >
      <Drawer.Screen
        name="Overview"
        component={OverviewReal}
        options={{
          drawerLabel: () => <DrawerLabel label="Overall Real" />,
          drawerIcon: (props) => (
            <IconWithCircle name="document-text-outline" {...props} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pages"
        component={Pages}
        options={{
          drawerLabel: () => <DrawerLabel label="Pages" />,
          drawerIcon: (props) => (
            <IconWithCircle name="folder-outline" {...props} />
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
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerLabel: {
    fontSize: 16,
    color: '#000',
    marginLeft: 16,
  },
});

export default DrawerNavigator;
