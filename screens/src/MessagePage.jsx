import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

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
    const isDay = useSelector(state => state.theme.isDay);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.chatItem, { backgroundColor: isDay ? '#fff' : '#333' }]}>
            <View style={styles.avatarContainer}>
                <Image source={item.avatar} style={styles.avatar} />
                {item.online && <View style={styles.onlineIndicator} />}
            </View>
            <View style={styles.chatInfo}>
                <Text style={[styles.chatName, { color: isDay ? '#333' : '#fff' }]}>{item.name}</Text>
                <Text style={[styles.chatMessage, { color: isDay ? '#666' : '#ccc' }]}>{item.message}</Text>
            </View>
            <View style={styles.chatMeta}>
                <Text style={[styles.chatTime, { color: isDay ? '#888' : '#aaa' }]}>{item.time}</Text>
                {item.unreadCount > 0 && (
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadCount}>{item.unreadCount}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { backgroundColor: isDay ? '#f7f7f7' : '#222' }]}>
            <View style={[styles.header, { borderBottomColor: isDay ? '#dcdcdc' : '#444', backgroundColor: isDay ? '#fff' : '#333' }]}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={isDay ? '#000' : 'black'} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: isDay ? '#333' : '#fff' }]}>Message</Text>
            </View>
            <View style={[styles.searchContainer, { backgroundColor: isDay ? '#fff' : '#444' }]}>
                <Ionicons name="search" size={20} color={isDay ? '#8e8e8e' : '#bbb'} style={styles.searchIcon} />
                <TextInput
                    style={[styles.searchInput, { color: isDay ? '#333' : '#fff' }]}
                    placeholder="Search..."
                    placeholderTextColor={isDay ? '#8e8e8e' : '#bbb'}
                />
                <MaterialIcons name="tune" size={24} color={isDay ? '#8e8e8e' : '#bbb'} style={styles.filterIcon} />
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
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    filterIcon: {
        marginLeft: 10,
    },
    chatList: {
        flex: 1,
    },
    chatListContent: {
        paddingBottom: 80,
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#ddd',
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
    },
    chatMessage: {
        fontSize: 14,
    },
    chatMeta: {
        alignItems: 'flex-end',
    },
    chatTime: {
        fontSize: 12,
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
