import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Switch, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const settings = [
    {
        id: '1',
        category: 'Personal Info',
        options: [
            { id: '1', icon: 'map-marker', name: 'My Address', screen: 'My Address' },
            { id: '2', icon: 'credit-card', name: 'Payment Method', screen: 'My Payment' },
        ],
    },
    {
        id: '2',
        category: 'Security',
        options: [
            { id: '1', icon: 'lock', name: 'Change Password', screen: 'Change Password' },
            { id: '2', icon: 'lock', name: 'Forgot Password', screen: 'Forget Password' },
            { id: '3', icon: 'shield', name: 'Security', screen: 'Security' },
            { id: '4', icon: 'bell', name: 'Notifications', screen: 'Notifications' },
        ],
    },
    {
        id: '3',
        category: 'General',
        options: [
            { id: '1', icon: 'globe', name: 'Language', screen: 'Language' },
            { id: '2', icon: 'trash', name: 'Clear Cache', extra: '00 MB' },
        ],
    },
    {
        id: '4',
        category: 'About',
        options: [
            { id: '1', icon: 'shield', name: 'Legal and Policies', screen: 'legal' },
            { id: '2', icon: 'question-circle', name: 'Help & Support', screen: 'help' },
        ],
    },
];

const ProfileScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const isDay = useSelector(state => state.theme.isDay); 
    const [isDarkMode, setIsDarkMode] = useState(isDay); 
    const [profileName, setProfileName] = useState('Name Not Set');
    const [profileLocation, setProfileLocation] = useState('Location Not Set');
    const [profileImage, setProfileImage] = useState(require('../Assets/Profile/pic1.jpeg'));
    const [modalVisible, setModalVisible] = useState(false); 

    useEffect(() => {
        if (route.params) {
            const { firstName, lastName, location, profileImage: newProfileImage } = route.params;
            setProfileName(`${firstName} ${lastName}`);
            setProfileLocation(location);
            if (newProfileImage) {
                setProfileImage({ uri: newProfileImage.uri }); 
            }
        }
    }, [route.params]);

    const toggleSwitch = () => {
        setIsDarkMode(previousState => !previousState);
    };

    const renderOption = ({ item }) => (
        <TouchableOpacity
            style={styles.option(isDay)}
            onPress={() => {
                if (item.screen) {
                    navigation.navigate(item.screen); 
                }
            }}
        >
            <View style={styles.optionLeft}>
                <Icon name={item.icon} size={24} color={isDay ? "black" : "white"} />
                <Text style={styles.optionText(isDay)}>{item.name}</Text>
            </View>
            <View style={styles.optionRight}>
                {item.extra && <Text style={styles.extraText(isDay)}>{item.extra}</Text>}
                {item.name !== 'Clear Cache' && (
                    <MaterialIcons name="keyboard-arrow-right" size={24} color={isDay ? "black" : "white"} />
                )}
            </View>
        </TouchableOpacity>
    );

    const renderCategory = ({ item }) => (
        <View>
            <Text style={styles.category(isDay)}>{item.category}</Text>
            <FlatList
                data={item.options}
                renderItem={renderOption}
                keyExtractor={(option) => option.id}
            />
        </View>
    );

    return (
        <View style={styles.container(isDay)}>
            <View style={styles.profileHeader}>
                <Image source={profileImage} style={styles.profileImage} />
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName(isDay)}>{profileName}</Text>
                    <Text style={styles.profileLocation(isDay)}>
                        <Icon name="map-marker" size={14} color={isDay ? "black" : "white"} /> {profileLocation}
                    </Text>
                </View>
                <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Edit Profile')}>
                    <MaterialIcons name="edit" size={24} color={isDay ? 'black' : 'white'} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={settings}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
            />
            <TouchableOpacity
                style={styles.logoutButton(isDay)}
                onPress={() => setModalVisible(true)} 
            >
                <Text style={styles.logoutButtonText(isDay)}>Log Out</Text>
            </TouchableOpacity>
            
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent(isDay)}>
                        <Text style={styles.modalText(isDay)}>Are you sure you want to log out?</Text>
                        <View style={styles.modalButtons}>
                            <Button title="Cancel" onPress={() => setModalVisible(false)} />
                            <Button title="Log Out" onPress={() => {
                                setModalVisible(false)
                                navigation.navigate('Slider');
                            }} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: (isDay) => ({
        flex: 1,
        backgroundColor: isDay ? '#fff' : '#333',
        padding: 20,
    }),
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 30,
    },
    profileInfo: {
        flex: 1,
        marginLeft: 10,
    },
    profileName: (isDay) => ({
        fontSize: 18,
        fontWeight: 'bold',
        color: isDay ? 'black' : 'white',
    }),
    profileLocation: (isDay) => ({
        color: isDay ? '#777' : '#aaa',
    }),
    editButton: {
        padding: 5,
    },
    category: (isDay) => ({
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        color: isDay ? 'black' : 'white',
    }),
    option: (isDay) => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: isDay ? '#eee' : '#555',
    }),
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionText: (isDay) => ({
        marginLeft: 10,
        fontSize: 16,
        color: isDay ? 'black' : 'white',
    }),
    optionRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    extraText: (isDay) => ({
        marginRight: 10,
        color: isDay ? 'black' : 'white',
    }),
    logoutButton: (isDay) => ({
        marginTop: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: isDay ? '#007BFF' : '#282C35',
        backgroundColor: isDay ? '#007BFF' : '#282C35',
        borderRadius: 5,
    }),
    logoutButtonText: (isDay) => ({
        textAlign: 'center',
        color: isDay ? 'white' : 'white',
        fontSize: 16,
    }),
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: (isDay) => ({
        width: '80%',
        padding: 20,
        backgroundColor: isDay ? 'white' : '#444',
        borderRadius: 10,
        alignItems: 'center',
    }),
    modalText: (isDay) => ({
        marginBottom: 20,
        color: isDay ? 'black' : 'white',
    }),
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default ProfileScreen;
