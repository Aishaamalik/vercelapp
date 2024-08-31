import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const messages = [
    { id: '1', text: 'Lorem ipsum dolor sit et, consectetur adipiscing.', time: '15:42 PM', sender: 'other' },
    { id: '2', text: 'Lorem ipsum dolor sit et, consectetur adipiscing.', time: '15:42 PM', sender: 'other' },
    { id: '3', text: 'Lorem ipsum dolor sit et, consectetur adipiscing.', time: '15:42 PM', sender: 'me' },
    { id: '4', text: 'Lorem ipsum dolor sit et, consectetur adipiscing.', time: '15:42 PM', sender: 'other' },
    { id: '5', text: 'Lorem ipsum dolor sit et, consectetur adipiscing.', time: '15:42 PM', sender: 'me' },
];

const ChatScreen = ({ navigation }) => {
    const [message, setMessage] = useState('');

    const renderMessage = ({ item }) => (
        <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.otherMessage]}>
            {item.sender === 'other' && <Image source={require('../Assets/Tourguide/p1.jpg')} style={styles.avatar} />}
            <View style={styles.messageBubble}>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.messageTime}>{item.time}</Text>
            </View>
            {item.sender === 'me' && <Image source={require('../Assets/Tourguide/p2.jpg')} style={styles.avatar} />}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Richar Kandowen</Text>
                <TouchableOpacity style={styles.moreButton}>
                    <Ionicons name="ellipsis-vertical" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                style={styles.chatList}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Message"
                    value={message}
                    onChangeText={setMessage}
                    placeholderTextColor={"black"}
                />
                <TouchableOpacity style={styles.sendButton}>
                    <Ionicons name="send" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#d1e7ff',
        backgroundColor: '#ffffff',
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    moreButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatList: {
        flex: 1,
        paddingHorizontal: 10,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 8,
    },
    myMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#e1f5fe',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginLeft: 'auto',
        padding: 10,
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#d1e7ff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        marginRight: 'auto',
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        marginHorizontal: 10,
    },
    messageBubble: {
        maxWidth: '75%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    },
    messageText: {
        fontSize: 16,
        color: '#333',
    },
    messageTime: {
        fontSize: 12,
        color: '#888',
        textAlign: 'right',
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopWidth: 1,
        borderTopColor: '#d1e7ff',
        backgroundColor: '#ffffff',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#d1e7ff',
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#f0f8ff',
        color:'black',
    },
    sendButton: {
        width: 40,
        height: 40,
        backgroundColor: '#007bff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});


export default ChatScreen;