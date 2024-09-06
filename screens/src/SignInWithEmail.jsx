import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInWithGmail = ({ route, navigation }) => {
    const isDay = useSelector(state => state.theme.isDay); 
    const [email, setEmail] = useState(route.params?.email || '');
    const [password, setPassword] = useState(route.params?.password || '');
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
        try {
            const savedUserDetails = await AsyncStorage.getItem('userDetails');
            if (savedUserDetails) {
                const userDetails = JSON.parse(savedUserDetails);
                if (userDetails.email === email && userDetails.password === password) {
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
            } else {
                Alert.alert('Error', 'No user data found');
            }
        } catch (error) {
            console.log('Failed to load user data', error);
            Alert.alert('Error', 'Failed to load user data');
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: isDay ? '#fff' : '#333' }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={isDay ? "#000" : "#fff"} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: isDay ? '#000' : '#fff' }]}>Sign In</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: isDay ? '#757575' : '#ccc' }]}>Email Address</Text>
                <TextInput
                    style={[styles.input, { backgroundColor: isDay ? '#f5f7fb' : '#444', color: isDay ? '#000' : '#fff' }]}
                    placeholder="Enter your email address"
                    placeholderTextColor={isDay ? "#cfd8dc" : "#888"}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: isDay ? '#757575' : '#ccc' }]}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={[styles.input, { backgroundColor: isDay ? '#f5f7fb' : '#444', color: isDay ? '#000' : '#fff' }]}
                        placeholder="Enter your password"
                        placeholderTextColor={isDay ? "#cfd8dc" : "#888"}
                        secureTextEntry={secureTextEntry}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Ionicons
                            name={secureTextEntry ? "eye-off" : "eye"}
                            size={24}
                            color={isDay ? "#cfd8dc" : "#888"}
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
                            color={isDay ? "#757575" : "#ccc"}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.rememberMeText, { color: isDay ? '#757575' : '#ccc' }]}>Remember Me</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Forget Password')}>
                    <Text style={[styles.forgotPasswordText, { color: isDay ? '#FF0000' : '#FF6666' }]}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.signInButton, { backgroundColor: isDay ? '#1E90FF' : '#444' }]} onPress={handleSignIn}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={[styles.orText, { color: isDay ? '#757575' : '#ccc' }]}>Or continue with</Text>
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
                <Text style={[styles.signUpText, { color: isDay ? '#757575' : '#ccc' }]}>Do not have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={[styles.signUpLink, { color: isDay ? '#1E90FF' : '#6699FF' }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        marginLeft: 5,
    },
    forgotPasswordText: {
        fontSize: 14,
    },
    signInButton: {
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
    },
    orText: {
        marginHorizontal: 10,
        fontSize: 14,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    socialButtonText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        fontSize: 14,
    },
    signUpLink: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

export default SignInWithGmail;
