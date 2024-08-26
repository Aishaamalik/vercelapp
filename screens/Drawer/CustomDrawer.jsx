import React from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require('../Assets/Profile/pic1.jpeg')} 
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Angela Mayer</Text>
          <Text style={styles.status}>Verified user · Membership</Text>
        </View>
      </View>      
      <Text style={styles.sectionTitle}>Main</Text>

      <DrawerItemList {...props} />
      <Text style={styles.sectionTitle}>Others</Text>
      <DrawerItem
        label="Components"
        icon={({ color, size }) => (
          <View style={styles.iconContainer}>
            <Icon name="grid-outline" color="#fff" size={size * 1} />
          </View>
        )}
        labelStyle={styles.drawerLabel}
        onPress={() => {
          navigation.navigate('Component');    
        }}
      />
      <DrawerItem
        label="Settings"
        icon={({ color, size }) => (
          <View style={styles.iconContainer}>
            <Icon name="settings-outline" color="#fff" size={size * 1} />
          </View>
        )}
        labelStyle={styles.drawerLabel}
        onPress={() => {
          navigation.navigate('Settings');    
        }}
      />
      <View style={styles.switchContainer}>
        <View style={styles.iconContainer}>
          <Icon name="moon-outline" size={28} color="#fff" />
        </View>
        <Text style={styles.switchLabel}>Switch To Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    color: 'white',
    fontSize: 14,
  },
  sectionTitle: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  switchLabel: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16, // Updated font size to 16
    color: 'black',
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
    fontSize: 16, // Set font size to 16
    color: 'black', // Set color to black
  },
});

export default CustomDrawerContent;
