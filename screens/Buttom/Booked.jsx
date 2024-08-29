import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const bookings = [
    {
        id: '1',
        date: '22 March 2022, Thu',
        title: 'The Lalit New Delhi',
        location: 'Uttar Pradesh, India',
        rating: 4.4,
        reviews: 41,
        price: '$320',
        status: 'Will Come',
        image: require('../Assets/visits/p1.jpeg'),
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
        image: require('../Assets/visits/p1.jpeg'),
    },
];

const finished = [
  {
      id: '1',
      date: '22 March 2022, Thu',
      title: 'The Lalit New Delhi',
      location: 'Uttar Pradesh, India',
      rating: 4.4,
      reviews: 41,
      price: '$320',
      status: 'Finished',
      image: require('../Assets/visits/p1.jpeg'),
    },
  {
      id: '2',
      date: '22 March 2022, Thu',
      title: 'The Lalit New Delhi',
      location: 'Uttar Pradesh, India',
      rating: 4.4,
      reviews: 41,
      price: '$320',
      status: 'Finished',
      image: require('../Assets/visits/p1.jpeg'),
    },
];


const Booked = () => {
    const [activeTab, setActiveTab] = useState('Booked');

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.date}>{item.date}</Text>
                <View style={styles.statusContainer}>
                    <Text style={styles.status}>{item.status}</Text>
                </View>
            </View>
            <View style={styles.cardContent}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}><Icon name="map-marker" size={14} /> {item.location}</Text>
                    <View style={styles.ratingContainer}>
                        <Icon name="star" size={16} color="#ffd700" />
                        <Text style={styles.rating}>{item.rating}</Text>
                        <Text style={styles.reviews}>({item.reviews} Reviews)</Text>
                    </View>
                    <Text style={styles.priceLabel}>Total Price</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.detailButton}>
                <Text style={styles.detailButtonText}>Detail</Text>
            </TouchableOpacity>
        </View>
    );
    const renderItem1 = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.date}>{item.date}</Text>
                <View style={styles.statusContainer1}>
                    <Text style={styles.status1}>{item.status}</Text>
                </View>
            </View>
            <View style={styles.cardContent}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}><Icon name="map-marker" size={14} /> {item.location}</Text>
                    <View style={styles.ratingContainer}>
                        <Icon name="star" size={16} color="#ffd700" />
                        <Text style={styles.rating}>{item.rating}</Text>
                        <Text style={styles.reviews}>({item.reviews} Reviews)</Text>
                    </View>
                    <Text style={styles.priceLabel}>Total Price</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.detailButton}>
                <Text style={styles.detailButtonText}>Detail</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Booked</Text>
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
        backgroundColor: '#f8f8f8',
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color:'black',
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
        color:'black',

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
        marginVertical: 5,
    },
    rating: {
        marginLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',

    },
    reviews: {
        marginLeft: 5,
        fontSize: 14,
        color: '#777',
    },
    priceLabel: {
        color: '#777',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',

    },
    detailButton: {
        alignSelf: 'flex-end',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#007BFF',
    },
    detailButtonText: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    historyContainer: {
        flex: 1,
    },
});

export default Booked;
