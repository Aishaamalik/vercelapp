import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const profileImage = require('../Assets/Profile/pic1.jpeg');

const EditProfileScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Male');
    const [location, setLocation] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
            </View>
            <View style={styles.profileSection}>
                <Image source={profileImage} style={styles.profileImage} />
                <TouchableOpacity style={styles.editIcon}>
                    <MaterialIcons name="edit" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholderTextColor={'gray'}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                    placeholderTextColor={'gray'}

                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholderTextColor={'gray'}

                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Date of Birth</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Date of Birth"
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                    placeholderTextColor={'gray'}

                />
                <MaterialIcons name="calendar-today" size={24} style={styles.calendarIcon} />
            </View>
            <View style={styles.genderContainer}>
                <Text style={styles.label}>Gender</Text>
                <View style={styles.genderOptions}>
                    <TouchableOpacity
                        style={[styles.genderOption, gender === 'Male' && styles.selectedGender]}
                        onPress={() => setGender('Male')}
                    >
                        <Text style={[styles.genderText, gender === 'Male' && styles.genderText1]}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.genderOption, gender === 'Female' && styles.selectedGender]}
                        onPress={() => setGender('Female')}
                    >
                        <Text style={[styles.genderText, gender === 'Female' && styles.genderText1]}>Female</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Location</Text>
                <TextInput
                    style={styles.largeInput}
                    placeholder="Location"
                    value={location}
                    onChangeText={setLocation}
                    placeholderTextColor={'gray'}

                />
            </View>
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        color:'black',
    },
    profileSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        backgroundColor: '#007BFF',
        borderRadius: 15,
        padding: 5,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color:'black',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#007BFF',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    largeInput: {
        borderWidth: 1,
        borderColor: '#007BFF',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        height: 100,
    },
    calendarIcon: {
        position: 'absolute',
        right: 15,
        top: 35,
        color:'black',
    },
    genderContainer: {
        marginBottom: 20,
    },
    genderOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    genderOption: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#007BFF',
        borderRadius: 25,
        marginHorizontal: 5,
    },
    selectedGender: {
        backgroundColor: '#007BFF',
    },
    genderText: {
        color: '#007BFF',
    },
    genderText1: {
        color: 'white',
    },
    saveButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditProfileScreen;