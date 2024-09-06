import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const CheckoutScreen = ({ route, navigation }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    
    const isDay = useSelector(state => state.theme.isDay);

    const {
        hotelName = 'Hotel Name Unavailable',
        hotelLocation = 'Location Not Available',
        hotelImage = require('../Assets/visits/hotel.jpeg'),
        price = 0,
        originalPrice = 0,
        startDate = '',
        endDate = '',
        customerName = 'Name Not Set',
        customerEmail = 'example@mail.com'
    } = route.params || {};

    const handlePayNow = () => {
        setModalVisible(true);
    };
    
    const handleCloseModal = () => {
        navigation.navigate('Booked', {
            hotelName,
            hotelLocation,
            hotelImage,
            price,
            originalPrice,
            startDate,
            endDate,
            customerName,
            customerEmail
        });
    };

    return (
        <ScrollView style={styles(isDay).container}>
            <View style={styles(isDay).header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={isDay ? "#000" : "#FFF"} />
                </TouchableOpacity>
                <Text style={styles(isDay).headerTitle}>Checkout</Text>
            </View>
            
            <View style={styles(isDay).hotelInfo}>
                <Image
                    source={hotelImage}
                    style={styles(isDay).hotelImage}
                />
                <View style={styles(isDay).hotelDetails}>
                    <Text style={styles(isDay).hotelName}>{hotelName}</Text>
                    <Text style={styles(isDay).hotelLocation}>{hotelLocation}</Text>
                    <View style={styles(isDay).rating}>
                        <Ionicons name="star" size={16} color="#FFD700" />
                        <Text style={styles(isDay).ratingText}>4.4 (41)</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles(isDay).section}>
                <Text style={styles(isDay).sectionTitle}>Customer Info</Text>
                <View style={styles(isDay).infoRow}>
                    <Text style={styles(isDay).infoLabel}>Name</Text>
                    <Text style={styles(isDay).infoValue}>{customerName}</Text>
                </View>
                <View style={styles(isDay).infoRow}>
                    <Text style={styles(isDay).infoLabel}>Email</Text>
                    <Text style={styles(isDay).infoValue}>{customerEmail}</Text>
                </View>
            </View>
            
            <View style={styles(isDay).section}>
                <Text style={styles(isDay).sectionTitle}>Order Info</Text>
                <View style={styles(isDay).infoRow}>
                    <Text style={styles(isDay).infoLabel}>Length of Stay</Text>
                    <Text style={styles(isDay).infoValue}>{startDate} to {endDate}</Text>
                </View>
                <View style={styles(isDay).infoRow}>
                    <Text style={styles(isDay).infoLabel}>Check In</Text>
                    <Text style={styles(isDay).infoValue}>{startDate}</Text>
                </View>
                <View style={styles(isDay).infoRow}>
                    <Text style={styles(isDay).infoLabel}>Check Out</Text>
                    <Text style={styles(isDay).infoValue}>{endDate}</Text>
                </View>
                <View style={styles(isDay).infoRow}>
                    <Text style={styles(isDay).infoLabel}>Type Room</Text>
                    <Text style={styles(isDay).infoValue}>Presidential Suite</Text>
                </View>
            </View>
            
            <View style={styles(isDay).section}>
                <Text style={styles(isDay).sectionTitle}>Promo Code</Text>
                <View style={styles(isDay).promoCodeContainer}>
                    <TextInput
                        style={styles(isDay).promoCodeInput}
                        placeholder="Input code"
                        placeholderTextColor={isDay ? "black" : "white"}
                    />
                    <TouchableOpacity style={styles(isDay).applyButton}>
                        <Text style={styles(isDay).applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles(isDay).infoRow}>
                    <Text style={styles(isDay).infoLabel}>Promo</Text>
                    <Text style={styles(isDay).promoValue}>-$20</Text>
                </View>
                <View style={styles(isDay).infoRow}>
                    <Text style={styles(isDay).infoLabel}>Total Pay</Text>
                    <Text style={styles(isDay).totalValue}>${price - 20}</Text>
                </View>
            </View>
            
            <View style={styles(isDay).section}>
                <Text style={styles(isDay).sectionTitle}>Payment Method</Text>
                <TouchableOpacity style={styles(isDay).paymentMethod} onPress={() => setSelectedCard('visa')}>
                    <Image
                        source={require('../Assets/bank/visa.png')}
                        style={styles(isDay).cardImage}
                    />
                    <Text style={styles(isDay).cardNumber}>•••• •••• •••• 87652</Text>
                    <Ionicons
                        name={selectedCard === 'visa' ? 'radio-button-on' : 'radio-button-off'}
                        size={24}
                        color={isDay ? "#000" : "#FFF"}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles(isDay).paymentMethod} onPress={() => setSelectedCard('mastercard')}>
                    <Image
                        source={require('../Assets/bank/visa.png')}
                        style={styles(isDay).cardImage}
                    />
                    <Text style={styles(isDay).cardNumber}>•••• •••• •••• 87652</Text>
                    <Ionicons
                        name={selectedCard === 'mastercard' ? 'radio-button-on' : 'radio-button-off'}
                        size={24}
                        color={isDay ? "#000" : "#FFF"}
                    />
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles(isDay).payNowButton} onPress={handlePayNow}>
                <Text style={styles(isDay).payNowButtonText}>Pay Now</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles(isDay).modalContainer}>
                    <View style={styles(isDay).modalContent}>
                        <Text style={styles(isDay).modalTitle}>Order Successful</Text>
                        <Text style={styles(isDay).modalMessage}>Your Order has been processed successfully.</Text>
                        <TouchableOpacity style={styles(isDay).modalButton} onPress={handleCloseModal}>
                            <Text style={styles(isDay).modalButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = (isDay) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDay ? '#fff' : '#000',
      paddingHorizontal: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
      color: isDay ? 'black' : 'white',
    },
    hotelInfo: {
      flexDirection: 'row',
      marginBottom: 20,
      backgroundColor: isDay ? '#f8f8f8' : '#333',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      elevation: 2,
    },
    hotelImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 10,
    },
    hotelDetails: {
      flex: 1,
      justifyContent: 'center',
    },
    hotelName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDay ? 'black' : 'white',
    },
    hotelLocation: {
      color: isDay ? '#555' : '#aaa',
    },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      marginLeft: 5,
      color: isDay ? '#555' : '#aaa',
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      color: isDay ? 'black' : 'white',
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    infoLabel: {
      color: isDay ? '#555' : '#aaa',
    },
    infoValue: {
      fontWeight: 'bold',
      color: isDay ? 'black' : 'white',
    },
    promoCodeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    promoCodeInput: {
      flex: 1,
      borderColor: isDay ? '#ddd' : '#666',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      color: isDay ? 'black' : 'white',
    },
    applyButton: {
      backgroundColor: '#f0ad4e',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      marginLeft: 10,
    },
    applyButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    promoValue: {
      fontWeight: 'bold',
      color: '#e74c3c',
    },
    totalValue: {
      fontWeight: 'bold',
      color: '#27ae60',
    },
    paymentMethod: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomColor: isDay ? '#ddd' : '#666',
      borderBottomWidth: 1,
      marginBottom: 10,
    },
    cardImage: {
      width: 40,
      height: 25,
      marginRight: 10,
    },
    cardNumber: {
      flex: 1,
      color: isDay ? 'black' : 'white',
    },
    payNowButton: {
      backgroundColor: '#28a745',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 20,
    },
    payNowButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDay ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.7)',
    },
    modalContent: {
      backgroundColor: isDay ? '#fff' : '#333',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      width: '80%',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: isDay ? 'black' : 'white',
    },
    modalMessage: {
      fontSize: 16,
      marginBottom: 20,
      color: isDay ? '#555' : '#aaa',
    },
    modalButton: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    modalButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

export default CheckoutScreen;
