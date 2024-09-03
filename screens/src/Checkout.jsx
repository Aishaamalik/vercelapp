// In CheckoutScreen.jsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckoutScreen = ({ route, navigation }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    // Extract params from route
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

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Checkout</Text>
            </View>
            
            <View style={styles.hotelInfo}>
                <Image
                    source={hotelImage}
                    style={styles.hotelImage}
                />
                <View style={styles.hotelDetails}>
                    <Text style={styles.hotelName}>{hotelName}</Text>
                    <Text style={styles.hotelLocation}>{hotelLocation}</Text>
                    <View style={styles.rating}>
                        <Ionicons name="star" size={16} color="#FFD700" />
                        <Text style={styles.ratingText}>4.4 (41)</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Customer Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Name</Text>
                    <Text style={styles.infoValue}>{customerName}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Email</Text>
                    <Text style={styles.infoValue}>{customerEmail}</Text>
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Order Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Length of Stay</Text>
                    <Text style={styles.infoValue}>{startDate} to {endDate}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Check In</Text>
                    <Text style={styles.infoValue}>{startDate}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Check Out</Text>
                    <Text style={styles.infoValue}>{endDate}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Type Room</Text>
                    <Text style={styles.infoValue}>Presidential Suite</Text>
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Promo Code</Text>
                <View style={styles.promoCodeContainer}>
                    <TextInput
                        style={styles.promoCodeInput}
                        placeholder="Input code"
                        placeholderTextColor={"black"}
                    />
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Promo</Text>
                    <Text style={styles.promoValue}>-$20</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Total Pay</Text>
                    <Text style={styles.totalValue}>${price - 20}</Text>
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Payment Method</Text>
                <TouchableOpacity style={styles.paymentMethod} onPress={() => setSelectedCard('visa')}>
                    <Image
                        source={require('../Assets/bank/visa.png')}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardNumber}>•••• •••• •••• 87652</Text>
                    <Ionicons
                        name={selectedCard === 'visa' ? 'radio-button-on' : 'radio-button-off'}
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentMethod} onPress={() => setSelectedCard('mastercard')}>
                    <Image
                        source={require('../Assets/bank/visa.png')}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardNumber}>•••• •••• •••• 87652</Text>
                    <Ionicons
                        name={selectedCard === 'mastercard' ? 'radio-button-on' : 'radio-button-off'}
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.payNowButton} onPress={()=> navigation.navigate('Splash Order')}>
                <Text style={styles.payNowButtonText}>Pay Now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        color: 'black',
    },
    hotelInfo: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#f8f8f8',
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
        color: 'black',
    },
    hotelLocation: {
        color: '#555',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
        color: '#555',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    infoLabel: {
        fontWeight: 'bold',
        color: 'black',
    },
    infoValue: {
        color: '#555',
    },
    promoCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    promoCodeInput: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color:'black',
    },
    applyButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    applyButtonText: {
        color: 'white',
    },
    promoValue: {
        color: '#FF0000',
    },
    totalValue: {
        fontWeight: 'bold',
        color: 'black',
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cardImage: {
        width: 40,
        height: 25,
        marginRight: 10,
    },
    cardNumber: {
        flex: 1,
        color:'balck',
    },
    payNowButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    payNowButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CheckoutScreen;
