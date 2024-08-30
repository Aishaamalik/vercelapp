import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddressScreen = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const newAddress = route.params?.newAddress;

  useEffect(() => {
    const loadAddresses = async () => {
      try {
        const storedAddresses = await AsyncStorage.getItem('addresses');
        if (storedAddresses) {
          setAddresses(JSON.parse(storedAddresses));
        }
      } catch (error) {
        console.error('Failed to load addresses from AsyncStorage:', error);
      }
    };

    loadAddresses();
  }, []);

  useEffect(() => {
    if (newAddress) {
      const updatedAddresses = [
        ...addresses,
        { ...newAddress, address: `${newAddress.city}, ${newAddress.state}, ${newAddress.country}` }
      ];
      setAddresses(updatedAddresses);
      saveAddresses(updatedAddresses);
    }
  }, [newAddress]);

  const saveAddresses = async (addresses) => {
    try {
      await AsyncStorage.setItem('addresses', JSON.stringify(addresses));
    } catch (error) {
      console.error('Failed to save addresses to AsyncStorage:', error);
    }
  };

  const handleSelectAddress = (addressName) => {
    setSelectedAddress(addressName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Address</Text>
        <TouchableOpacity onPress={() => navigation.navigate('New Address')}>
          <Icon name="plus-square-o" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.addressList}>
        {addresses.map((address, index) => (
          <AddressItem 
            key={index}
            name={address.name}
            phone={address.phone}
            address={address.address}
            isSelected={selectedAddress === address.name}
            onSelect={handleSelectAddress}
          />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Select Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddressItem = ({ name, phone, address, isSelected, onSelect }) => {
  return (
    <TouchableOpacity style={styles.addressItem} onPress={() => onSelect(name)}>
      <View style={styles.addressInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
        <Text style={styles.address}>{address}</Text>
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeButtonText}>Change Address</Text>
        </TouchableOpacity>
      </View>
      {isSelected ? (
        <Icon name="check-circle" size={24} color="#3498db" />
      ) : (
        <Icon name="circle-thin" size={24} color="#ccc" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  addressList: {
    flexGrow: 1,
  },
  addressItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 15,
  },
  addressInfo: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  phone: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  address: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  changeButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#3498db',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  changeButtonText: {
    color: '#3498db',
    fontSize: 14,
  },
  selectButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddressScreen;
