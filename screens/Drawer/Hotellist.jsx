import { useSelector } from 'react-redux';
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
    const isDay = useSelector(state => state.theme.isDay);

    const renderItem = ({ item }) => (
        <View style={[styles.itemContainer, { borderBottomColor: isDay ? '#ddd' : '#444' }]}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={[styles.name, { color: isDay ? 'black' : 'white' }]}>{item.name}</Text>
                <Text style={[styles.duration, { color: isDay ? 'black' : 'white' }]}>{item.duration}</Text>
                <View style={styles.locationContainer}>
                    <Icon name="location-outline" size={14} color={isDay ? '#555' : '#aaa'} />
                    <Text style={[styles.location, { color: isDay ? 'black' : 'white' }]}>{item.location}</Text>
                </View>
            </View>
            <Text style={[styles.price, { color: isDay ? 'black' : 'white' }]}>{item.price}</Text>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: isDay ? '#fff' : 'black' }]}>
            <View style={[styles.headerContainer, { backgroundColor: isDay ? '#f8f8f8' : 'black' }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={30} color={isDay ? '#000' : '#fff'} />
                </TouchableOpacity>
                <Text style={[styles.header, { color: isDay ? 'black' : 'white' }]}>Hotels</Text>
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
        paddingHorizontal: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        elevation: 3,
    },
    header: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
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
    },
    duration: {
        marginVertical: 4,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        marginLeft: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HotelListScreen;
