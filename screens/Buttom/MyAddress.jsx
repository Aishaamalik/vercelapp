import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const AddressScreen = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const newAddress = route.params?.newAddress;
  const isDay = useSelector(state => state.theme.isDay);

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
    <View style={[styles.container, { backgroundColor: isDay ? '#fff' : '#333' }]}>
      <View style={[styles.header, { borderBottomColor: isDay ? '#ddd' : '#555' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color={isDay ? '#000' : '#fff'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#000' : '#fff' }]}>My Address</Text>
        <TouchableOpacity onPress={() => navigation.navigate('New Address')}>
          <Icon name="plus-square-o" size={24} color={isDay ? '#000' : '#fff'} />
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
            isDay={isDay}
          />
        ))}
      </ScrollView>

      <TouchableOpacity style={[styles.selectButton, { backgroundColor: isDay ? '#3498db' : '#1E90FF' }]}>
        <Text style={styles.selectButtonText}>Select Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddressItem = ({ name, phone, address, isSelected, onSelect, isDay }) => {
  return (
    <TouchableOpacity style={[styles.addressItem, { borderBottomColor: isDay ? '#ddd' : '#555' }]} onPress={() => onSelect(name)}>
      <View style={styles.addressInfo}>
        <Text style={[styles.name, { color: isDay ? '#333' : '#ccc' }]}>{name}</Text>
        <Text style={[styles.phone, { color: isDay ? '#555' : '#aaa' }]}>{phone}</Text>
        <Text style={[styles.address, { color: isDay ? '#555' : '#aaa' }]}>{address}</Text>
        <TouchableOpacity style={[styles.changeButton, { borderColor: isDay ? '#3498db' : '#1E90FF' }]}>
          <Text style={[styles.changeButtonText, { color: isDay ? '#3498db' : '#1E90FF' }]}>Change Address</Text>
        </TouchableOpacity>
      </View>
      {isSelected ? (
        <Icon name="check-circle" size={24} color="#3498db" />
      ) : (
        <Icon name="circle-thin" size={24} color={isDay ? '#ccc' : '#555'} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addressList: {
    flexGrow: 1,
  },
  addressItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  addressInfo: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    marginTop: 5,
  },
  address: {
    fontSize: 14,
    marginTop: 5,
  },
  changeButton: {
    marginTop: 10,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  changeButtonText: {
    fontSize: 14,
  },
  selectButton: {
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
