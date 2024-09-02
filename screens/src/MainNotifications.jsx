import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Replace the URLs with require statements for local images
const notifications = [
    {
        id: '1',
        type: 'today',
        message: 'There is an incoming message from Richard Mandowen',
        time: '2 hours ago',
        avatar: require('../Assets/Tourguide/p1.jpg'),
    },
    {
        id: '2',
        type: 'today',
        message: 'Outgoing call from Richard Kandowen',
        time: '3 hours ago',
        avatar: require('../Assets/Tourguide/p2.jpg'),
    },
    {
        id: '3',
        type: 'today',
        message: 'Do not forget to schedule your vacation to the Taj Mahal, August 25, 2022',
        time: '4 hours ago',
        avatar: require('../Assets/Icons/application.png'),
    },
    {
        id: '4',
        type: 'yesterday',
        message: 'Your payment for the holiday ticket to the Taj Mahal was successful',
        time: '1 day ago',
        avatar: require('../Assets/Icons/wallet.png'),
    },
    {
        id: '5',
        type: 'yesterday',
        message: 'Your payment for booking The Lalit New Delhi hotel was successful',
        time: '1 day ago',
        avatar: require('../Assets/Icons/wallet.png'),
    },
];

const NotificationScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <View style={styles.notificationContainer}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.notificationTextContainer}>
                <Text style={styles.notificationMessage}>{item.message}</Text>
                <Text style={styles.notificationTime}>{item.time}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notification</Text>
            </View>

            <Text style={styles.sectionTitle}>Today</Text>
            <FlatList
                data={notifications.filter(notification => notification.type === 'today')}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <Text style={styles.sectionTitle}>Yesterday</Text>
            <FlatList
                data={notifications.filter(notification => notification.type === 'yesterday')}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
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
        padding: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'black',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color:'black',
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    notificationTextContainer: {
        flex: 1,
    },
    notificationMessage: {
        fontSize: 16,
        marginBottom: 5,
        color:'black',
    },
    notificationTime: {
        fontSize: 14,
        color: '#888',
    },
});

export default NotificationScreen;
