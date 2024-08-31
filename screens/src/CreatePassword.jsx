import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateNewPasswordScreen = ({ navigation }) => {
    const [secureTextEntry1, setSecureTextEntry1] = useState(true);
    const [secureTextEntry2, setSecureTextEntry2] = useState(true);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Create a New Password</Text>
            <Text style={styles.subtitle}>Enter your new password</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor="#cfd8dc"
                        secureTextEntry={secureTextEntry1}
                    />
                    <TouchableOpacity onPress={() => setSecureTextEntry1(!secureTextEntry1)}>
                        <Ionicons
                            name={secureTextEntry1 ? "eye-off" : "eye"}
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
                        secureTextEntry={secureTextEntry2}
                    />
                    <TouchableOpacity onPress={() => setSecureTextEntry2(!secureTextEntry2)}>
                        <Ionicons
                            name={secureTextEntry2 ? "eye-off" : "eye"}
                            size={24}
                            color="#cfd8dc"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
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
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
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
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 5,
    },
    input: {
        flex: 1,
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
    continueButton: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 30,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CreateNewPasswordScreen;