import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
    const isDay = useSelector(state => state.theme.isDay);  // Redux theme selector
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
            navigation.navigate('SignIn', { email, password, firstName, lastName });
        } catch (error) {
            Alert.alert("Error", "Failed to save user data.");
        }
    };

    // Conditional styles based on theme
    const themeStyles = isDay ? styles.lightTheme : styles.darkTheme;

    return (
        <View style={[styles.container, themeStyles.background]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={isDay ? "#000" : "#fff"} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, themeStyles.text]}>Sign Up</Text>
                <View style={{ width: 24 }} />
            </View>
            <Text style={[styles.title, themeStyles.text]}>Complete your account</Text>
            <Text style={[styles.subtitle, themeStyles.subtext]}>Lorem ipsum dolor sit amet</Text>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, themeStyles.text]}>First Name</Text>
                <TextInput
                    style={[styles.input, themeStyles.inputBackground]}
                    placeholder="Enter your first name"
                    placeholderTextColor={isDay ? "#757575" : "#cfd8dc"}
                    value={firstName}
                    onChangeText={setFirstName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, themeStyles.text]}>Last Name</Text>
                <TextInput
                    style={[styles.input, themeStyles.inputBackground]}
                    placeholder="Enter your last name"
                    placeholderTextColor={isDay ? "#757575" : "#cfd8dc"}
                    value={lastName}
                    onChangeText={setLastName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, themeStyles.text]}>Email Address</Text>
                <TextInput
                    style={[styles.input, themeStyles.inputBackground]}
                    placeholder="Enter your email address"
                    placeholderTextColor={isDay ? "#757575" : "#cfd8dc"}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, themeStyles.text]}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={[styles.input, themeStyles.inputBackground]}
                        placeholder="Enter your password"
                        placeholderTextColor={isDay ? "#757575" : "#cfd8dc"}
                        secureTextEntry={secureTextEntry}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Ionicons
                            name={secureTextEntry ? "eye-off" : "eye"}
                            size={24}
                            color={isDay ? "#757575" : "#cfd8dc"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, themeStyles.text]}>Confirm Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={[styles.input, themeStyles.inputBackground]}
                        placeholder="Confirm your password"
                        placeholderTextColor={isDay ? "#757575" : "#cfd8dc"}
                        secureTextEntry={confirmSecureTextEntry}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TouchableOpacity onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}>
                        <Ionicons
                            name={confirmSecureTextEntry ? "eye-off" : "eye"}
                            size={24}
                            color={isDay ? "#757575" : "#cfd8dc"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={[styles.signUpButton, { backgroundColor: isDay ? '#1E90FF' : '#37474F' }]} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text style={[styles.loginText, themeStyles.subtext]}>Already have an account?</Text>
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
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingRight: 10,
        borderWidth: 1,
    },
    signUpButton: {
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
    },
    loginLink: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight: '600',
    },
    lightTheme: {
        background: {
            backgroundColor: '#fff',
        },
        text: {
            color: '#333',
        },
        subtext: {
            color: '#757575',
        },
        inputBackground: {
            backgroundColor: '#f0f4f7',
            borderColor: '#e0e0e0',
        },
    },
    darkTheme: {
        background: {
            backgroundColor: '#121212',
        },
        text: {
            color: '#fff',
        },
        subtext: {
            color: '#cfd8dc',
        },
        inputBackground: {
            backgroundColor: '#1e1e1e',
            borderColor: '#37474F',
        },
    },
});

export default SignUpScreen;
