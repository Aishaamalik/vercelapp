import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const OrderSuccessScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Image
                    source={require('../Assets/Icons/thumbs-up.png')} 
                    style={styles.image}
                />
                <Text style={styles.title}>Order Successful</Text>
                <Text style={styles.message}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Booked')} 
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OrderSuccessScreen;