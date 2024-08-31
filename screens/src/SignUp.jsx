import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = () => {
    const navigation =useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="menu" size={24} color="#fff" />
                </TouchableOpacity>
                
            </View>
            
            <View style={styles.content1}>
                <Text style={styles.title}>Create account</Text>
                <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
                </View>
            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email address"
                        placeholderTextColor="#cfd8dc"
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Continue with Email</Text>
                </TouchableOpacity>
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.orText}>Or continue with</Text>
                    <View style={styles.divider} />
                </View>
                <TouchableOpacity style={[styles.button, styles.googleButton]}>
                    <FontAwesome name="google" size={20} color="#DB4437" style={styles.socialIcon} />
                    <Text style={[styles.buttonText, styles.googleButtonText]}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.appleButton]}>
                    <FontAwesome name="apple" size={20} color="#000" style={styles.socialIcon} />
                    <Text style={[styles.buttonText, styles.appleButtonText]}>Continue with Apple</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>
                    Already have an account? <Text style={styles.loginText}>Login</Text>
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
    headerIcons: {
        flexDirection: 'row',
    },
    icon: {
        marginRight: 15,
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
    loginText: {
        color: '#2196F3',
        fontWeight: 'bold',
    },
});

export default CreateAccountScreen;