import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddressScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState(null); 
  const navigation = useNavigation();

  const handleSelectAddress = (addressName) => {
    setSelectedAddress(addressName); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Address</Text>
        <TouchableOpacity onPress={() => navigation.navigate('New Address')}>
          <Icon name="plus-square-o" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.addressList}>
        <AddressItem 
          name="Andy Andrew" 
          phone="+1 234 567 890" 
          address="1234 Your Road No #6789, Your City, Country" 
          isSelected={selectedAddress === "Andy Andrew"} 
          onSelect={handleSelectAddress}
        />
        <AddressItem 
          name="Elevenia Kalia" 
          phone="+1 234 567 890" 
          address="1234 Your Road No #6789, Your City, Country" 
          isSelected={selectedAddress === "Elevenia Kalia"} 
          onSelect={handleSelectAddress} 
        />
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
