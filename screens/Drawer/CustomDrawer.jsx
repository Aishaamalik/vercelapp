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
          <Icon name="grid-outline" color={color} size={size} />
        )}
        onPress={() => {
          navigation.navigate('Component');    
        }}
      />
      <DrawerItem
        label="Settings"
        icon={({ color, size }) => (
          <Icon name="settings-outline" color={color} size={size} />
        )}
        onPress={() => {
          navigation.navigate('Settings');    
        }}
      />
      <View style={styles.switchContainer}>
        <Icon name="moon-outline" size={25} color="#007AFF" />
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
    fontSize: 16,
    color: 'black',
  },
});

export default CustomDrawerContent;
