import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
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

    return (
        <View style={styles.container}>
            <View style={styles.content1}>
                <Text style={styles.title}>Hi, Welcome Back!</Text>
                <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
            </View>
            
            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email address"
                        placeholderTextColor="#cfd8dc"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleContinue}>
                    <Text style={styles.buttonText}>Continue with Email</Text>
                </TouchableOpacity>
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.orText}>Or continue with</Text>
                    <View style={styles.divider} />
                </View>
                <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={()=> navigation.navigate('SignInWithEmail')}>
                    <FontAwesome name="google" size={20} color="#DB4437" style={styles.socialIcon} />
                    <Text style={[styles.buttonText, styles.googleButtonText]}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.appleButton]}>
                    <FontAwesome name="apple" size={20} color="#000" style={styles.socialIcon} />
                    <Text style={[styles.buttonText, styles.appleButtonText]}>Continue with Apple</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>
                    Don't have an account? 
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2196F3',
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
        color: '#000',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#757575',
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f1f1f1',
        color: '#000',
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
        color: '#fff',
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
        color: '#757575',
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
        color: '#757575',
        marginTop: 20,
    },
    signupText: {
        color: '#2196F3',
        fontWeight: '600',
        marginLeft: 5,
    },
});

export default SignInScreen;
