// App.js
import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../Drawer/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import Overview from './Overview';
import Pages from './Pages';

const Drawer = createDrawerNavigator();

const IconWithCircle = ({ name, color, size }) => {
  return (
    <View style={styles.iconContainer}>
      <Icon name={name} color="white" size={size} />
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Overview"
        component={Overview}
        options={{
          headerShown: false,
          drawerIcon: (props) => (
            <IconWithCircle name="document-text-outline" {...props} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pages"
        component={Pages}
        options={{
          drawerIcon: (props) => (
            <IconWithCircle name="folder-outline" {...props} />
          ),
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
});

export default DrawerNavigator;
