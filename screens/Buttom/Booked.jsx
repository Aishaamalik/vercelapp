import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

const initialBookings = [
    {
        id: '1',
        date: '22 March 2022, Thu',
        title: 'Faisal Mosque ',
        location: 'Islamabad, Pakistan',
        rating: 4.4,
        reviews: 41,
        price: '$320',
        status: 'Will Come',
        image: require('../Assets/visits/mosque.jpeg'),
    },
    {
        id: '2',
        date: '22 March 2022, Thu',
        title: 'Taj Mahal',
        location: 'Uttar Pradesh, India',
        rating: 4.4,
        reviews: 41,
        price: '$320',
        status: 'Will Come',
        image: require('../Assets/visits/tajmahal.jpeg'),
    },
];

const initialFinished = [
    {
        id: '1',
        date: '22 March 2022, Thu',
        title: 'Faisal Mosque ',
        location: 'Islamabad, Pakistan',
        rating: 4.4,
        reviews: 41,
        price: '$320',
        status: 'Finished',
        image: require('../Assets/visits/mosque.jpeg'),
    },
    {
        id: '2',
        date: '22 March 2022, Thu',
        title: 'Taj Mahal',
        location: 'Uttar Pradesh, India',
        rating: 4.4,
        reviews: 41,
        price: '$320',
        status: 'Finished',
        image: require('../Assets/visits/tajmahal.jpeg'),
    },
];

const Booked = () => {
    const route = useRoute(); 
    const [activeTab, setActiveTab] = useState('Booked');
    const [bookings, setBookings] = useState(initialBookings);
    const [finished, setFinished] = useState(initialFinished); 
    const navigation = useNavigation();
    const isDay = useSelector(state => state.theme.isDay); // Access isDay from Redux

    useEffect(() => {
        if (route.params) {
            const { hotelName, hotelLocation, hotelImage, price, startDate, endDate } = route.params;
            const newBooking = {
                id: (bookings.length + 1).toString(), 
                date: `${startDate} to ${endDate}`,
                title: hotelName,
                location: hotelLocation,
                rating: 4.4,
                reviews: 41,
                price: price,
                status: 'Will Come', 
                image: hotelImage, 
            };
            setBookings((prevBookings) => [...prevBookings, newBooking]);
        }
    }, [route.params]);
const renderItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: isDay ? '#fff' : '#444' }]}>
        <View style={styles.cardHeader}>
            <Text style={[styles.date, { color: isDay ? 'black' : 'white' }]}>{item.date}</Text>
            <View style={styles.statusContainer}>
                <Text style={[styles.status, { color: isDay ? '#ff0000' : '#ff6666' }]}>{item.status}</Text>
            </View>
        </View>
        <View style={styles.cardContent}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={[styles.title, { color: isDay ? 'black' : 'white' }]}>{item.title}</Text>
                <Text style={[styles.location, { color: isDay ? 'black' : 'white' }]}>
                    <Icon name="map-marker" size={14} /> {item.location}
                </Text>
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#ffd700" />
                    <Text style={[styles.rating, { color: isDay ? '#333' : '#ddd' }]}>{item.rating}</Text>
                    <Text style={[styles.reviews, { color: isDay ? '#666' : '#bbb' }]}>({item.reviews} Reviews)</Text>
                </View>
                <Text style={[styles.priceLabel, { color: isDay ? 'black' : 'white' }]}>Total Price</Text>
                <Text style={[styles.price, { color: isDay ? '#333' : '#ddd' }]}>{item.price}</Text>
            </View>
        </View>
        <TouchableOpacity
            style={styles.detailButton}
            onPress={() => navigation.navigate('Detail Ticket', { bookingDetails: item })}
        >
            <Text style={styles.detailButtonText}>Detail</Text>
        </TouchableOpacity>
    </View>
);

const renderItem1 = ({ item }) => (
    <View style={[styles.card, { backgroundColor: isDay ? '#fff' : '#444' }]}>
        <View style={styles.cardHeader}>
            <Text style={[styles.date, { color: isDay ? 'black' : 'white' }]}>{item.date}</Text>
            <View style={styles.statusContainer1}>
                <Text style={[styles.status1, { color: isDay ? 'green' : 'white' }]}>Finished</Text>
            </View>
        </View>
        <View style={styles.cardContent}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={[styles.title, { color: isDay ? 'black' : 'white' }]}>{item.title}</Text>
                <Text style={[styles.location, { color: isDay ? 'black' : 'white' }]}>
                    <Icon name="map-marker" size={14} /> {item.location}
                </Text>
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#ffd700" />
                    <Text style={[styles.rating, { color: isDay ? '#333' : '#ddd' }]}>{item.rating}</Text>
                    <Text style={[styles.reviews, { color: isDay ? '#666' : '#bbb' }]}>({item.reviews} Reviews)</Text>
                </View>
                <Text style={[styles.priceLabel, { color: isDay ? 'black' : 'white' }]}>Total Price</Text>
                <Text style={[styles.price, { color: isDay ? '#333' : '#ddd' }]}>{item.price}</Text>
            </View>
        </View>
        <TouchableOpacity
            style={styles.detailButton1}
            onPress={() => navigation.navigate('Detail Ticket', { bookingDetails: item })}
        >
            <Text style={styles.detailButtonText1}>Detail</Text>
        </TouchableOpacity>
    </View>
);


    return (
        <View style={[styles.container, { backgroundColor: isDay ? '#f8f8f8' : '#333' }]}>
            <Text style={[styles.header, { color: isDay ? 'black' : 'white' }]}>My Booked</Text>
            <View style={styles.tabContainer}>
                <TouchableOpacity 
                    style={[styles.tabButton, activeTab === 'Booked' && styles.activeTab]} 
                    onPress={() => setActiveTab('Booked')}
                >
                    <Text style={styles.tabButtonText}>Booked</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.tabButton, activeTab === 'History' && styles.historyTab]}
                    onPress={() => setActiveTab('History')}
                >
                    <Text style={styles.tabButtonText}>History</Text>
                </TouchableOpacity>
            </View>
            {activeTab === 'Booked' ? (
                <FlatList
                    data={bookings}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={styles.historyContainer}>
                    <FlatList
                        data={finished}
                        renderItem={renderItem1}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: '#e0e0e0',
    },
    activeTab: {
        backgroundColor: '#007BFF',
    },
    historyTab: {
        backgroundColor: '#007BFF', 
    },
    tabButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    date: {
        color: 'black',
    },
    statusContainer: {
        backgroundColor: '#ffe6e6',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    statusContainer1: {
        backgroundColor: '#90EE90',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    status: {
        color: '#ff0000',
    },
    status1: {
        color: 'green',
    },
    cardContent: {
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    location: {
        color: 'black',
        marginVertical: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    rating: {
        color: '#333',
        marginLeft: 5,
    },
    reviews: {
        color: '#666',
        marginLeft: 5,
    },
    priceLabel: {
        color: 'black',
        fontSize: 14,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    detailButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    detailButton1: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    detailButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    detailButtonText1: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Booked;
