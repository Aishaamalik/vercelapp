import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

    
    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }
    
        try {
            const userDetails = {
                firstName,
                lastName,
                email,
                password,
            };
            await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));
            Alert.alert("Success", "Account created successfully!");
            navigation.navigate('SignIn', { email, password, firstName, lastName});
            navigation.navigate('SignInWithEmail', { email, password, firstName, lastName});
        } catch (error) {
            Alert.alert("Error", "Failed to save user data.");
        }
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Sign Up</Text>
                <View style={{ width: 24 }} /> 
            </View>
            <Text style={styles.title}>Complete your account</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your first name"
                    placeholderTextColor="#cfd8dc"
                    value={firstName}
                    onChangeText={setFirstName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your last name"
                    placeholderTextColor="#cfd8dc"
                    value={lastName}
                    onChangeText={setLastName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    placeholderTextColor="#cfd8dc"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor="#cfd8dc"
                        secureTextEntry={secureTextEntry}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Ionicons
                            name={secureTextEntry ? "eye-off" : "eye"}
                            size={24}
                            color="#cfd8dc"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm your password"
                        placeholderTextColor="#cfd8dc"
                        secureTextEntry={confirmSecureTextEntry}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TouchableOpacity onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}>
                        <Ionicons
                            name={confirmSecureTextEntry ? "eye-off" : "eye"}
                            size={24}
                            color="#cfd8dc"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginLink}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',  
        color: '#333',  
    },
    title: {
        fontSize: 28,  
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,  
    },
    subtitle: {
        fontSize: 16,
        color: '#757575',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 15, 
    },
    label: {
        fontSize: 16, 
        color: '#333',
        marginBottom: 8,
    },
    input: {
        width: '100%',
        paddingVertical: 12,  
        paddingHorizontal: 10,
        borderRadius: 8,  
        backgroundColor: '#f0f4f7', 
        color: '#000',
        fontSize: 16,
        borderWidth: 1,  
        borderColor: '#e0e0e0',  
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f4f7',
        borderRadius: 8,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    signUpButton: {
        backgroundColor: '#1E90FF',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 25,  
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 18,  
        fontWeight: 'bold',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 14,
        color: '#757575',
    },
    loginLink: {
        fontSize: 14,
        color: '#1E90FF',
        marginLeft: 5,
        fontWeight: '600',  
    },
});

export default SignUpScreen;
