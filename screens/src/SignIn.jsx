import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const isDay = useSelector(state => state.theme.isDay); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleContinue = async () => {
        try {
            const userDetails = await AsyncStorage.getItem('userDetails');
            if (userDetails !== null) {
                const parsedUserDetails = JSON.parse(userDetails);

                if (email === parsedUserDetails.email) {
                    navigation.navigate('one', { 
                        firstName: parsedUserDetails.firstName, 
                        lastName: parsedUserDetails.lastName 
                    });
                } else {
                    Alert.alert('Error', 'Invalid email or password.');
                }
            } else {
                Alert.alert('Error', 'No user found. Please sign up first.');
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to retrieve user data.');
        }
    };

    const themeStyles = isDay ? styles.dayMode : styles.nightMode;
    const themeStyles1 = isDay ? styles.dayMode : styles.nightMode1;

    return (
        <View style={[styles.container, themeStyles]}>
            <View style={styles.content1}>
                <Text style={[styles.title, themeStyles]}>Hi, Welcome Back!</Text>
                <Text style={[styles.subtitle, themeStyles]}>Lorem ipsum dolor sit amet</Text>
            </View>
            
            <View style={[styles.content, themeStyles1]}>
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, themeStyles1]}>Email</Text>
                    <TextInput
                        style={[styles.input, themeStyles]}
                        placeholder="Enter your email address"
                        placeholderTextColor={isDay ? "#cfd8dc" : "#4f5b62"}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <TouchableOpacity style={[styles.button, themeStyles]} onPress={handleContinue}>
                    <Text style={[styles.buttonText, themeStyles]}>Continue with Email</Text>
                </TouchableOpacity>
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={[styles.orText, themeStyles1]}>Or continue with</Text>
                    <View style={styles.divider} />
                </View>
                <TouchableOpacity 
                    style={[styles.button, styles.googleButton]} 
                    onPress={() => navigation.navigate('SignInWithEmail', { email, password })}
                >
                    <FontAwesome name="google" size={20} color="#DB4437" style={styles.socialIcon} />
                    <Text style={[styles.buttonText, styles.googleButtonText]}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.appleButton]}>
                    <FontAwesome name="apple" size={20} color="#000" style={styles.socialIcon} />
                    <Text style={[styles.buttonText, styles.appleButtonText]}>Continue with Apple</Text>
                </TouchableOpacity>
                <Text style={[styles.footerText, themeStyles1]}>
                    Don't have an account? 
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={[styles.signupText, themeStyles1]}>Sign Up</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dayMode: {
        backgroundColor: '#E0F7FA', 
        color: '#000',
    },
    nightMode: {
        backgroundColor: '#263238',
        color: '#fff',
    },
    nightMode1: {
        backgroundColor: 'black',
        color: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        alignItems: 'center',
    },
    content1: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#2196F3',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    orText: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    googleButton: {
        backgroundColor: '#fff',
        borderColor: '#DB4437',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    appleButton: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    socialIcon: {
        marginRight: 10,
    },
    googleButtonText: {
        color: '#DB4437',
    },
    appleButtonText: {
        color: '#000',
    },
    footerText: {
        fontSize: 16,
        marginTop: 20,
    },
    signupText: {
        color: '#2196F3',
        fontWeight: '600',
        marginLeft: 5,
    },
});

export default SignInScreen;
