import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const DetailTicketScreen = ({ route, navigation }) => {
    const { bookingDetails } = route.params;
    const isDay = useSelector(state => state.theme.isDay);

    return (
        <ScrollView style={styles.container(isDay)}>
            <View style={styles.header(isDay)}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton(isDay)}>
                    <Ionicons name="arrow-back" size={24} color={isDay ? '#000' : '#fff'} />
                </TouchableOpacity>
                <Text style={styles.headerTitle(isDay)}>Detail Ticket</Text>
            </View>

            <Text style={styles.ticketId(isDay)}>INV1273436347</Text>
            <View style={styles.statusContainer(isDay)}>
                <Text style={styles.statusText(isDay)}>{bookingDetails.status}</Text>
            </View>

            <View style={styles.hotelInfoContainer(isDay)}>
                <Image source={bookingDetails.image} style={styles.hotelImage} />
                <View style={styles.hotelDetails}>
                    <Text style={styles.hotelName(isDay)}>{bookingDetails.title}</Text>
                    <View style={styles.locationContainer}>
                        <Ionicons name="location-outline" size={16} color={isDay ? '#888' : '#ccc'} />
                        <Text style={styles.locationText(isDay)}>{bookingDetails.location}</Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={16} color="#FFD700" />
                        <Text style={styles.ratingText(isDay)}>{bookingDetails.rating} ({bookingDetails.reviews})</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section(isDay)}>
                <Text style={styles.sectionTitle(isDay)}>Customer Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel(isDay)}>Name</Text>
                    <Text style={styles.infoValue(isDay)}>Andy Lexian</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel(isDay)}>Email</Text>
                    <Text style={styles.infoValue(isDay)}>example@mail.com</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel(isDay)}>Payment</Text>
                    <Text style={styles.infoValue(isDay)}>Mastercard</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel(isDay)}>Status</Text>
                    <Text style={styles.infoValueSuccess(isDay)}>Success</Text>
                </View>
            </View>

            <View style={styles.section(isDay)}>
                <Text style={styles.sectionTitle(isDay)}>Order Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel(isDay)}>Length of stay</Text>
                    <Text style={styles.infoValue(isDay)}>3 days 2 nights</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel(isDay)}>Check In</Text>
                    <Text style={styles.infoValue(isDay)}>June 12, 2022</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel(isDay)}>Check Out</Text>
                    <Text style={styles.infoValue(isDay)}>June 14, 2022</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel(isDay)}>Type Room</Text>
                    <Text style={styles.infoValue(isDay)}>Presidential Suite</Text>
                </View>
            </View>

            <View style={styles.section(isDay)}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel(isDay)}>Code Promo</Text>
                    <Text style={styles.infoValue(isDay)}>HEZORKS</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel(isDay)}>Promo</Text>
                    <Text style={styles.infoValuePromo(isDay)}>- $20</Text>
                </View>
                <View style={styles.divider(isDay)} />
                <View style={styles.infoRow}>
                    <Text style={styles.totalLabel(isDay)}>Total Pay</Text>
                    <Text style={styles.totalValue(isDay)}>$300</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.downloadButton(isDay)}>
                <Text style={styles.downloadButtonText}>Download PDF</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: isDay => ({
        flex: 1,
        backgroundColor: isDay ? '#fff' : '#333',
        paddingHorizontal: 20,
        paddingTop: 40,
    }),
    header: isDay => ({
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: isDay ? '#f0f0f0' : '#444',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    }),
    backButton: isDay => ({
        marginRight: 10,
        backgroundColor: isDay ? '#ddd' : '#555',
        borderRadius: 20,
        padding: 10,
    }),
    headerTitle: isDay => ({
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        color: isDay ? 'black' : 'white',
    }),
    ticketId: isDay => ({
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: isDay ? 'black' : 'white',
    }),
    statusContainer: isDay => ({
        alignSelf: 'flex-start',
        backgroundColor: isDay ? '#FFE4E1' : '#555',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 20,
    }),
    statusText: isDay => ({
        color: isDay ? '#FF6347' : '#FF4500',
        fontSize: 16,
    }),
    hotelInfoContainer: isDay => ({
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    }),
    hotelImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    hotelDetails: {
        flex: 1,
    },
    hotelName: isDay => ({
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: isDay ? 'black' : 'white',
    }),
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    locationText: isDay => ({
        marginLeft: 5,
        color: isDay ? '#888' : '#ccc',
        fontSize: 14,
    }),
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: isDay => ({
        marginLeft: 5,
        color: isDay ? '#888' : '#ccc',
        fontSize: 14,
    }),
    section: isDay => ({
        marginBottom: 20,
    }),
    sectionTitle: isDay => ({
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: isDay ? 'black' : 'white',
    }),
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    infoLabel: isDay => ({
        color: isDay ? '#888' : '#ccc',
        fontSize: 16,
    }),
    infoValue: isDay => ({
        fontSize: 16,
        color: isDay ? 'black' : 'white',
    }),
    infoValueSuccess: isDay => ({
        fontSize: 16,
        color: '#32CD32',
    }),
    infoValuePromo: isDay => ({
        fontSize: 16,
        color: '#FF6347',
    }),
    divider: isDay => ({
        height: 1,
        backgroundColor: isDay ? '#f0f0f0' : '#555',
        marginVertical: 12,
    }),
    totalLabel: isDay => ({
        fontSize: 18,
        fontWeight: 'bold',
        color: isDay ? 'black' : 'white',
    }),
    totalValue: isDay => ({
        fontSize: 18,
        fontWeight: 'bold',
        color: isDay ? 'black' : 'white',
    }),
    downloadButton: isDay => ({
        backgroundColor: isDay ? '#1E90FF' : '#444',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginVertical: 20,
    }),
    downloadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DetailTicketScreen;
