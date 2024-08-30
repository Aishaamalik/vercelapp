import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const NewAddressScreen = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');  
  const [phone, setphone] = useState('');

  const [detailAddress, setDetailAddress] = useState('');
  const navigation = useNavigation();

  const handleSaveAddress = () => {
    const newAddress = {
      name,
      country,
      city,
      state,
      zipCode,
      detailAddress,
      phone,
      
    };
    navigation.navigate('My Address', { newAddress });
    setName('');
    setCountry('');
    setCity('');
    setState('');
    setZipCode('');
    setDetailAddress('');
    setphone('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Address</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Full Name / Home / Office" 
          placeholderTextColor="#A9A9A9"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Country</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Country" 
          placeholderTextColor="#A9A9A9"
          value={country}
          onChangeText={setCountry}
        />

        <Text style={styles.label}>City</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter City" 
          placeholderTextColor="#A9A9A9"
          value={city}
          onChangeText={setCity}
        />

        <Text style={styles.label}>State</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter State" 
          placeholderTextColor="#A9A9A9"
          value={state}
          onChangeText={setState}
        />

        <Text style={styles.label}>Zip Code</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Zip Code" 
          placeholderTextColor="#A9A9A9"
          value={zipCode}
          onChangeText={setZipCode}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Phone Number" 
          placeholderTextColor="#A9A9A9"
          value={phone}
          onChangeText={setphone}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Detail Address</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter Your Address"
          placeholderTextColor="#A9A9A9"
          value={detailAddress}
          onChangeText={setDetailAddress}
          multiline
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
          <Text style={styles.saveButtonText}>Save Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center', 

  },
  backButton: {
    position: 'absolute', 
    left: 0,

  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',

  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F4F6FB',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  textArea: {
    backgroundColor: '#F4F6FB',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 8,
    marginBottom: 20,
    textAlignVertical: 'top', 
    height: 100, 
  },
  placeholderText: {
    color: '#A9A9A9',
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NewAddressScreen;
