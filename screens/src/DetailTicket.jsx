import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailTicketScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Detail Ticket</Text>
            </View>

            <Text style={styles.ticketId}>INV1273436347</Text>
            <View style={styles.statusContainer}>
                <Text style={styles.statusText}>Will Come</Text>
            </View>

            <View style={styles.hotelInfoContainer}>
                <Image source={require('../Assets/visits/hotel.jpeg')} style={styles.hotelImage} />
                <View style={styles.hotelDetails}>
                    <Text style={styles.hotelName}>The Lalit New Delhi</Text>
                    <View style={styles.locationContainer}>
                        <Ionicons name="location-outline" size={16} color="#888" />
                        <Text style={styles.locationText}>Uttar Pradesh, India</Text>
                    </View>
                    <View style={styles.ratingContainer}>
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
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Payment</Text>
                    <Text style={styles.infoValue}>Mastercard</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Status</Text>
                    <Text style={styles.infoValueSuccess}>Success</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Order Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Length of stay</Text>
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
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Code Promo</Text>
                    <Text style={styles.infoValue}>HEZORKS</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Promo</Text>
                    <Text style={styles.infoValuePromo}>- $20</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.infoRow}>
                    <Text style={styles.totalLabel}>Total Pay</Text>
                    <Text style={styles.totalValue}>$300</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download PDF</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        padding: 10,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        color:'black',
    },
    ticketId: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color:'black',
    },
    statusContainer: {
        alignSelf: 'flex-start',
        backgroundColor: '#FFE4E1',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 20,
    },
    statusText: {
        color: '#FF6347',
        fontSize: 16,
    },
    hotelInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    hotelImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    hotelDetails: {
        flex: 1,
    },
    hotelName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'black',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    locationText: {
        marginLeft: 5,
        color: '#888',
        fontSize: 14,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
        color: '#888',
        fontSize: 14,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color:'black',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    infoLabel: {
        color: '#888',
        fontSize: 16,
    },
    infoValue: {
        fontSize: 16,
        color:'black',
    },
    infoValueSuccess: {
        fontSize: 16,
        color: '#32CD32',
    },
    infoValuePromo: {
        fontSize: 16,
        color: '#FF6347',
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginVertical: 12,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'black',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'black',
    },
    downloadButton: {
        backgroundColor: '#1E90FF',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginVertical: 20,
    },
    downloadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DetailTicketScreen;
