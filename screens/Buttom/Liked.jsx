// src/screens/WishlistScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const wishlistData = [
    {
        id: '1',
        title: 'Tahiti Beach',
        location: 'Polynesia, French',
        price: '$235',
        rating: 4.4,
        reviews: 32,
        image: require('../Assets/visits/tahitibeach.jpeg'), // Replace with your image path
    },
    {
        id: '2',
        title: 'St. Lucia Mountain',
        location: 'South America',
        price: '$235',
        rating: 4.4,
        reviews: 32,
        image: require('../Assets/visits/lucismountain.jpeg'), // Replace with your image path
    },
    {
        id: '3',
        title: 'Cappadocia',
        location: 'Turki',
        price: '$235',
        rating: 4.4,
        reviews: 32,
        image: require('../Assets/visits/tower.jpeg'), // Replace with your image path
    },
    {
        id: '4',
        title: 'Hanalei Bay',
        location: 'Hawaii',
        price: '$235',
        rating: 4.4,
        reviews: 32,
        image: require('../Assets/visits/ledadubeach.jpeg'), // Replace with your image path
    },
];

const Liked = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <TouchableOpacity style={styles.favoriteButton}>
                <Icon name="heart" size={20} color="red" />
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.locationContainer}>
                <Icon name="map-marker" size={14} color="gray" />
                <Text style={styles.location}>{item.location}</Text>
            </View>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.ratingContainer}>
                <Icon name="star" size={14} color="gold" />
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.reviews}>({item.reviews})</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Wishlist</Text>
            <FlatList
                data={wishlistData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    list: {
        paddingHorizontal: 10,
    },
    card: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 3,
        padding: 10,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    favoriteButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    location: {
        marginLeft: 5,
        color: 'gray',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    rating: {
        marginLeft: 5,
        color: 'gold',
    },
    reviews: {
        marginLeft: 5,
        color: 'gray',
    },
});

export default Liked;