import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const NewAddressScreen = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const navigation = useNavigation();
  const isDay = useSelector(state => state.theme.isDay); 

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
    setPhone('');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDay ? '#FFFFFF' : '#000000' }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color={isDay ? '#000' : '#FFF'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#000' : '#FFF' }]}>New Address</Text>
      </View>

      <View style={styles.form}>
        <Text style={[styles.label, { color: isDay ? '#000' : '#FFF' }]}>Full Name</Text>
        <TextInput 
          style={[styles.input, { backgroundColor: isDay ? '#F4F6FB' : '#333333', color: isDay ? '#000' : '#FFF' }]} 
          placeholder="Enter Full Name / Home / Office" 
          placeholderTextColor={isDay ? '#A9A9A9' : '#666'}
          value={name}
          onChangeText={setName}
        />

        <Text style={[styles.label, { color: isDay ? '#000' : '#FFF' }]}>Country</Text>
        <TextInput 
          style={[styles.input, { backgroundColor: isDay ? '#F4F6FB' : '#333333', color: isDay ? '#000' : '#FFF' }]} 
          placeholder="Enter Country" 
          placeholderTextColor={isDay ? '#A9A9A9' : '#666'}
          value={country}
          onChangeText={setCountry}
        />

        <Text style={[styles.label, { color: isDay ? '#000' : '#FFF' }]}>City</Text>
        <TextInput 
          style={[styles.input, { backgroundColor: isDay ? '#F4F6FB' : '#333333', color: isDay ? '#000' : '#FFF' }]} 
          placeholder="Enter City" 
          placeholderTextColor={isDay ? '#A9A9A9' : '#666'}
          value={city}
          onChangeText={setCity}
        />

        <Text style={[styles.label, { color: isDay ? '#000' : '#FFF' }]}>State</Text>
        <TextInput 
          style={[styles.input, { backgroundColor: isDay ? '#F4F6FB' : '#333333', color: isDay ? '#000' : '#FFF' }]} 
          placeholder="Enter State" 
          placeholderTextColor={isDay ? '#A9A9A9' : '#666'}
          value={state}
          onChangeText={setState}
        />

        <Text style={[styles.label, { color: isDay ? '#000' : '#FFF' }]}>Zip Code</Text>
        <TextInput 
          style={[styles.input, { backgroundColor: isDay ? '#F4F6FB' : '#333333', color: isDay ? '#000' : '#FFF' }]} 
          placeholder="Enter Zip Code" 
          placeholderTextColor={isDay ? '#A9A9A9' : '#666'}
          value={zipCode}
          onChangeText={setZipCode}
          keyboardType="numeric"
        />

        <Text style={[styles.label, { color: isDay ? '#000' : '#FFF' }]}>Phone Number</Text>
        <TextInput 
          style={[styles.input, { backgroundColor: isDay ? '#F4F6FB' : '#333333', color: isDay ? '#000' : '#FFF' }]} 
          placeholder="Enter Phone Number" 
          placeholderTextColor={isDay ? '#A9A9A9' : '#666'}
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />

        <Text style={[styles.label, { color: isDay ? '#000' : '#FFF' }]}>Detail Address</Text>
        <TextInput
          style={[styles.textArea, { backgroundColor: isDay ? '#F4F6FB' : '#333333', color: isDay ? '#000' : '#FFF' }]}
          placeholder="Enter Your Address"
          placeholderTextColor={isDay ? '#A9A9A9' : '#666'}
          value={detailAddress}
          onChangeText={setDetailAddress}
          multiline
        />

        <TouchableOpacity style={[styles.saveButton, { backgroundColor: '#3498db' }]} onPress={handleSaveAddress}>
          <Text style={styles.saveButtonText}>Save Address</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  textArea: {
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 8,
    marginBottom: 20,
    textAlignVertical: 'top',
    height: 100,
  },
  saveButton: {
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
