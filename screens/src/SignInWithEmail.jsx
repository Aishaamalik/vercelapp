import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInWithGmail = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const loadCredentials = async () => {
            try {
                const savedEmail = await AsyncStorage.getItem('email');
                const savedPassword = await AsyncStorage.getItem('password');
                if (savedEmail && savedPassword) {
                    setEmail(savedEmail);
                    setPassword(savedPassword);
                    setRememberMe(true);
                }
            } catch (error) {
                console.log('Failed to load credentials', error);
            }
        };
        loadCredentials();
    }, []);

    const handleSignIn = async () => {
        if (email === 'abc@gmail.com' && password === '123') {
            if (rememberMe) {
                try {
                    await AsyncStorage.setItem('email', email);
                    await AsyncStorage.setItem('password', password);
                } catch (error) {
                    console.log('Failed to save credentials', error);
                }
            } else {
                try {
                    await AsyncStorage.removeItem('email');
                    await AsyncStorage.removeItem('password');
                } catch (error) {
                    console.log('Failed to remove credentials', error);
                }
            }
            navigation.navigate('one'); 
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Sign In</Text>
                <View style={{ width: 24 }} /> 
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    placeholderTextColor="#cfd8dc"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
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
            <View style={styles.optionsContainer}>
                <View style={styles.rememberMeContainer}>
                    <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                        <Ionicons
                            name={rememberMe ? "checkbox-outline" : "square-outline"}
                            size={24}
                            color="#757575"
                        />
                    </TouchableOpacity>
                    <Text style={styles.rememberMeText}>Remember Me</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Forget Password')}>
                    <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Or continue with</Text>
                <View style={styles.line} />
            </View>
            <TouchableOpacity style={styles.socialButton} onPress={() => navigation.navigate('SignIp')}>
                <FontAwesome name="google" size={24} color="#DB4437" />
                <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="apple" size={24} color="#000" />
                <Text style={styles.socialButtonText}>Continue with Apple</Text>
            </TouchableOpacity>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Do not have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signUpLink}>Sign Up</Text>
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
        fontWeight: 'bold',
        color: '#000',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#f5f7fb',
        color: '#000',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f7fb',
        borderRadius: 10,
        paddingRight: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberMeText: {
        fontSize: 14,
        color: '#757575',
        marginLeft: 5,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#FF0000',
    },
    signInButton: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#cfd8dc',
    },
    orText: {
        marginHorizontal: 10,
        fontSize: 14,
        color: '#757575',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#cfd8dc',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    socialButtonText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    signUpText: {
        fontSize: 14,
        color: '#757575',
    },
    signUpLink: {
        fontSize: 14,
        color: '#1E90FF',
        marginLeft: 5,
    },
});

export default SignInWithGmail;
