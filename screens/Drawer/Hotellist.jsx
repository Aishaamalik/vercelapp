import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const hotels = [
  {
    id: '1',
    name: 'Ledadu Beach',
    duration: '3 days 2 nights',
    location: 'Australia',
    price: '$20/Person',
    image: require('../Assets/visits/ledadubeach.jpeg'),
  },
  {
    id: '2',
    name: 'Endigada Beach',
    duration: '5 days 4 nights',
    location: 'India',
    price: '$18/Person',
    image: require('../Assets/visits/endigadabeach.jpeg'), 
  },
  {
    id: '3',
    name: 'Doreen Tower',
    duration: '5 days 4 nights',
    location: 'USA',
    price: '$14/Person',
    image: require('../Assets/visits/tower.jpeg'), 
  },
  {
    id: '4',
    name: 'Royal Palace',
    duration: '5 days 4 nights',
    location: 'India',
    price: '$21/Person',
    image: require('../Assets/visits/royalpalace.jpeg'), 
  },
  {
    id: '5',
    name: 'Ignition Mall',
    duration: '5 days 4 nights',
    location: 'China',
    price: '$17/Person',
    image: require('../Assets/visits/mall.jpeg'), 
  },
  {
    id: '6',
    name: 'Endigada Hotel',
    duration: '5 days 4 nights',
    location: 'Australia',
    price: '$20/Person',
    image: require('../Assets/visits/hotel.jpeg'), 
  },
];

const HotelListScreen = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.duration}>{item.duration}</Text>
                <View style={styles.locationContainer}>
                    <Icon name="location-outline" size={14} color="#555" />
                    <Text style={styles.location}>{item.location}</Text>
                </View>
            </View>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.header}>Hotels</Text>
            </View>
            <FlatList
                data={hotels}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#f8f8f8',
        elevation: 3,
    },
    header: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    listContainer: {
        paddingBottom: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    duration: {
        color: 'black',
        marginVertical: 4,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        color: 'black',
        marginLeft: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default HotelListScreen;
