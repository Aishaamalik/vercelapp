import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const chatData = [
    {
        id: '1',
        name: 'Richar Kandowen',
        message: 'Adipisicing elit. Asperiores, laboriosam...',
        time: '10:20',
        unreadCount: 2,
        avatar: require('../Assets/Tourguide/p1.jpg'),
        online: true,
    },
    {
        id: '2',
        name: 'Jeden Murred',
        message: 'Adipisicing elit. Asperiores, laboriosam...',
        time: '10:20',
        unreadCount: 2,
        avatar: require('../Assets/Tourguide/p2.jpg'),
        online: false,
    },
    {
        id: '3',
        name: 'Chris Offile',
        message: 'Adipisicing elit. Asperiores, laboriosam...',
        time: '10:20',
        unreadCount: 2,
        avatar: require('../Assets/Tourguide/p4.jpg'),
        online: true,
    },
    {
        id: '4',
        name: 'Jemmy Fox',
        message: 'Adipisicing elit. Asperiores, laboriosam...',
        time: '10:20',
        unreadCount: 2,
        avatar: require('../Assets/Tourguide/p3.jpg'),
        online: false,
    },
];

const ChatListScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.chatItem}>
            <View style={styles.avatarContainer}>
                <Image source={item.avatar} style={styles.avatar} />
                {item.online && <View style={styles.onlineIndicator} />}
            </View>
            <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatMessage}>{item.message}</Text>
            </View>
            <View style={styles.chatMeta}>
                <Text style={styles.chatTime}>{item.time}</Text>
                {item.unreadCount > 0 && (
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadCount}>{item.unreadCount}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Message</Text>
            </View>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#8e8e8e" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#8e8e8e"
                />
                <MaterialIcons name="tune" size={24} color="#8e8e8e" style={styles.filterIcon} />
            </View>
            <FlatList
                data={chatData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.chatList}
                contentContainerStyle={styles.chatListContent}
            />
            <TouchableOpacity style={styles.fab}>
                <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7', // Slightly different background color for better contrast
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc', // Lighter gray for subtle contrast
        backgroundColor: '#fff', // Ensure background color matches container
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#e0e0e0', // Slight background color for the button
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Darker color for better readability
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: 15,
        marginVertical: 10,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 14,
        color: '#333', // Darker text color for better readability
    },
    filterIcon: {
        marginLeft: 10,
    },
    chatList: {
        flex: 1,
    },
    chatListContent: {
        paddingBottom: 80, // Add padding to prevent overlap with FAB
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        backgroundColor: '#fff', // Match background with container
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#ddd', // Subtle border color around avatar
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#4CAF50',
        borderWidth: 2,
        borderColor: '#fff',
    },
    chatInfo: {
        flex: 1,
        marginLeft: 15,
    },
    chatName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333', // Darker color for better readability
    },
    chatMessage: {
        fontSize: 14,
        color: '#666', // Slightly lighter gray for secondary text
    },
    chatMeta: {
        alignItems: 'flex-end',
    },
    chatTime: {
        fontSize: 12,
        color: '#888', // Lighter gray for less emphasis
    },
    unreadBadge: {
        marginTop: 5,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadCount: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});

export default ChatListScreen;
