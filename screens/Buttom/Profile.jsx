import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native'; 

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
            { id: '4', icon: 'bell', name: 'Notifications', screen: 'NotificationsScreen' },
        ],
    },
    {
        id: '3',
        category: 'General',
        options: [
            { id: '1', icon: 'globe', name: 'Language', screen: 'LanguageScreen' },
            { id: '2', icon: 'trash', name: 'Clear Cache', extra: '00 MB' },
        ],
    },
    {
        id: '4',
        category: 'About',
        options: [
            { id: '1', icon: 'shield', name: 'Legal and Policies', screen: 'LegalPoliciesScreen' },
            { id: '2', icon: 'question-circle', name: 'Help & Support', screen: 'HelpSupportScreen' },
        ],
    },
];

const ProfileScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [profileName, setProfileName] = useState('Name Not Set');
    const [profileLocation, setProfileLocation] = useState('Location Not Set');
    const [profileImage, setProfileImage] = useState(require('../Assets/Profile/pic1.jpeg')); // Default image

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

    const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

    const renderOption = ({ item }) => (
        <TouchableOpacity
            style={styles.option}
            onPress={() => {
                if (item.screen) {
                    navigation.navigate(item.screen); 
                }
            }}
        >
            <View style={styles.optionLeft}>
                <Icon name={item.icon} size={24} color="black" />
                <Text style={styles.optionText}>{item.name}</Text>
            </View>
            <View style={styles.optionRight}>
                {item.extra && <Text style={styles.extraText}>{item.extra}</Text>}
                {item.name !== 'Clear Cache' && (
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                )}
            </View>
        </TouchableOpacity>
    );

    const renderCategory = ({ item }) => (
        <View>
            <Text style={styles.category}>{item.category}</Text>
            <FlatList
                data={item.options}
                renderItem={renderOption}
                keyExtractor={(option) => option.id}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image source={profileImage} style={styles.profileImage} />
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>{profileName}</Text>
                    <Text style={styles.profileLocation}>
                        <Icon name="map-marker" size={14} /> {profileLocation}
                    </Text>
                </View>
                <TouchableOpacity style={styles.editButton} onPress={()=> navigation.navigate('Edit Profile')}>
                    <MaterialIcons name="edit" size={24} color='black' />
                </TouchableOpacity>
            </View>
            <FlatList
                data={settings}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.option}>
                <View style={styles.optionLeft}>
                    <Icon name="moon-o" size={24} color="black" />
                    <Text style={styles.optionText}>Dark Mode</Text>
                </View>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isDarkMode}
                />
            </View>
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
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
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'black',
    },
    profileLocation: {
        color: '#777',
    },
    editButton: {
        padding: 5,
    },
    category: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        color:'black',
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionText: {
        marginLeft: 10,
        fontSize: 16,
        color:'black',
    },
    optionRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    extraText: {
        marginRight: 10,
        color:'black',
    },
    logoutButton: {
        marginTop: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#007BFF',
        borderRadius: 25,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: '#007BFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
