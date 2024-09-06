import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckoutVacation = ({ navigation }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const isDay = useSelector(state => state.theme.isDay);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDay ? '#fff' : '#333',
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
            color: isDay ? '#000' : '#fff',
        },
        hotelInfo: {
            flexDirection: 'row',
            marginBottom: 20,
            backgroundColor: isDay ? '#f8f8f8' : '#444',
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
            fontWeight: 'bold',
            fontSize: 16,
            color: isDay ? '#333' : '#ddd',
        },
        hotelLocation: {
            color: isDay ? '#888' : '#bbb',
            marginBottom: 5,
        },
        rating: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        ratingText: {
            marginLeft: 5,
            color: isDay ? '#888' : '#bbb',
        },
        section: {
            marginBottom: 20,
            padding: 10,
            backgroundColor: isDay ? '#f8f8f8' : '#444',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 2,
        },
        sectionTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
            color: isDay ? '#333' : '#fff',
        },
        infoRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: isDay ? '#ddd' : '#666',
            paddingBottom: 5,
        },
        infoLabel: {
            color: isDay ? '#888' : '#bbb',
            fontSize: 14,
        },
        infoValue: {
            fontWeight: 'bold',
            color: isDay ? '#333' : '#ddd',
            fontSize: 14,
        },
        promoValue: {
            fontWeight: 'bold',
            color: 'red',
            fontSize: 14,
        },
        totalValue: {
            fontWeight: 'bold',
            fontSize: 18,
            color: isDay ? '#333' : '#ddd',
        },
        promoCodeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: isDay ? '#ddd' : '#666',
            borderRadius: 5,
            overflow: 'hidden',
            marginBottom: 10,
        },
        promoCodeInput: {
            flex: 1,
            padding: 10,
            backgroundColor: isDay ? '#fff' : '#555',
        },
        applyButton: {
            backgroundColor: '#007BFF',
            paddingVertical: 10,
            paddingHorizontal: 20,
        },
        applyButtonText: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 14,
        },
        paymentMethod: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: isDay ? '#ddd' : '#666',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
            backgroundColor: isDay ? '#fff' : '#555',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 2,
        },
        cardImage: {
            width: 40,
            height: 25,
            resizeMode: 'contain',
            marginRight: 10,
        },
        cardNumber: {
            flex: 1,
            fontSize: 14,
            color: isDay ? '#333' : '#ddd',
        },
        payNowButton: {
            backgroundColor: '#007BFF',
            paddingVertical: 15,
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 20,
        },
        payNowButtonText: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
        },
    });

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={isDay ? '#000' : '#fff'} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Checkout</Text>
            </View>
            
            <View style={styles.hotelInfo}>
                <Image
                    source={require('../Assets/visits/hotel.jpeg')}
                    style={styles.hotelImage}
                />
                <View style={styles.hotelDetails}>
                    <Text style={styles.hotelName}>The Lalit New Delhi</Text>
                    <Text style={styles.hotelLocation}>Uttar Pradesh, India</Text>
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
                    <Text style={styles.infoValue}>Andy Lexian</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Email</Text>
                    <Text style={styles.infoValue}>example@mail.com</Text>
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Order Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Length of Stay</Text>
                    <Text style={styles.infoValue}>3 days 2 nights</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Check In</Text>
                    <Text style={styles.infoValue}>June 12, 2022</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Check Out</Text>
                    <Text style={styles.infoValue}>June 14, 2022</Text>
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
                    <Text style={styles.totalValue}>$300</Text>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentMethod} onPress={() => setSelectedCard('mastercard')}>
                    <Image
                        source={require('../Assets/bank/visa.png')}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardNumber}>•••• •••• •••• 54321</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.payNowButton} onPress={() => {/* Handle payment */}}>
                <Text style={styles.payNowButtonText}>Pay Now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default CheckoutVacation;
