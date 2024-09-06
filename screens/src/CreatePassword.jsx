import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateNewPasswordScreen = ({ navigation }) => {
    const [secureTextEntry1, setSecureTextEntry1] = useState(true);
    const [secureTextEntry2, setSecureTextEntry2] = useState(true);

    // Get the day/night mode from Redux state
    const isDay = useSelector(state => state.theme.isDay);

    return (
        <View style={[styles.container, { backgroundColor: isDay ? '#fff' : '#333' }]}>
            <TouchableOpacity style={[styles.backButton, { backgroundColor: isDay ? '#f0f0f0' : '#555' }]} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={isDay ? "#000" : "#fff"} />
            </TouchableOpacity>
            <Text style={[styles.title, { color: isDay ? '#000' : '#fff' }]}>Create a New Password</Text>
            <Text style={[styles.subtitle, { color: isDay ? '#757575' : '#bbb' }]}>Enter your new password</Text>

            <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: isDay ? '#757575' : '#bbb' }]}>Password</Text>
                <View style={[styles.passwordContainer, { backgroundColor: isDay ? '#f5f7fb' : '#555' }]}>
                    <TextInput
                        style={[styles.input, { color: isDay ? '#000' : '#fff' }]}
                        placeholder="Enter your password"
                        placeholderTextColor={isDay ? '#cfd8dc' : '#888'}
                        secureTextEntry={secureTextEntry1}
                    />
                    <TouchableOpacity onPress={() => setSecureTextEntry1(!secureTextEntry1)}>
                        <Ionicons
                            name={secureTextEntry1 ? "eye-off" : "eye"}
                            size={24}
                            color={isDay ? "#cfd8dc" : "#888"}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: isDay ? '#757575' : '#bbb' }]}>Confirm Password</Text>
                <View style={[styles.passwordContainer, { backgroundColor: isDay ? '#f5f7fb' : '#555' }]}>
                    <TextInput
                        style={[styles.input, { color: isDay ? '#000' : '#fff' }]}
                        placeholder="Confirm your password"
                        placeholderTextColor={isDay ? '#cfd8dc' : '#888'}
                        secureTextEntry={secureTextEntry2}
                    />
                    <TouchableOpacity onPress={() => setSecureTextEntry2(!secureTextEntry2)}>
                        <Ionicons
                            name={secureTextEntry2 ? "eye-off" : "eye"}
                            size={24}
                            color={isDay ? "#cfd8dc" : "#888"}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={[styles.continueButton, { backgroundColor: isDay ? '#1E90FF' : '#555' }]}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
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
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingRight: 10,
    },
    continueButton: {
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
