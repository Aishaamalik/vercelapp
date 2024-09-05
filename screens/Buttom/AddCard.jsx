import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddCardScreen = () => {
    const isDay = useSelector(state => state.theme.isDay);
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvcCode, setCvcCode] = useState('');
    const [bank, setBank] = useState('');

    const navigation = useNavigation();

    const handleAddCard = () => {
        const newCard = {
            id: Math.random().toString(),
            type: 'Visa',
            bank: bank,
            lastDigits: cardNumber.slice(-4),
            owner: cardHolderName,
            logo: require('../Assets/bank/visa.png'),
        };

        navigation.navigate('My Payment', { newCard });
    };

    return (
        <View style={[styles.container, { backgroundColor: isDay ? '#fff' : '#000' }]}> 
            <View style={[styles.header, { borderBottomColor: isDay ? '#E0E0E0' : '#555' }]}> 
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color={isDay ? 'black' : 'white'}/>
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: isDay ? 'black' : 'white' }]}>Add New Card</Text> 
            </View>
            <View style={styles.form}>
                <Text style={[styles.label, { color: isDay ? 'black' : 'white' }]}>Bank Name</Text>
                <TextInput
                    style={[styles.input, { backgroundColor: isDay ? '#F3F4F6' : '#333', color: isDay ? 'black' : 'white' }]}
                    placeholder="Enter Bank Name"
                    value={bank}
                    onChangeText={setBank}
                    placeholderTextColor={isDay ? 'black' : 'white'}
                />
                <Text style={[styles.label, { color: isDay ? 'black' : 'white' }]}>Card Number</Text>
                <TextInput
                    style={[styles.input, { backgroundColor: isDay ? '#F3F4F6' : '#333', color: isDay ? 'black' : 'white' }]}
                    placeholder="Enter Card Number"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                    keyboardType="numeric"
                    placeholderTextColor={isDay ? 'black' : 'white'}
                />
                <Text style={[styles.label, { color: isDay ? 'black' : 'white' }]}>Card Holder Name</Text> 
                <TextInput
                    style={[styles.input, { backgroundColor: isDay ? '#F3F4F6' : '#333', color: isDay ? 'black' : 'white' }]} 
                    placeholder="Enter Holder Name"
                    value={cardHolderName}
                    onChangeText={setCardHolderName}
                    placeholderTextColor={isDay ? 'black' : 'white'}
                />
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={[styles.label, { color: isDay ? 'black' : 'white' }]}>Expired</Text>
                        <TextInput
                            style={[styles.input, { backgroundColor: isDay ? '#F3F4F6' : '#333', color: isDay ? 'black' : 'white' }]} 
                            placeholder="MM/YY"
                            value={expiryDate}
                            onChangeText={setExpiryDate}
                            keyboardType="numeric"
                            placeholderTextColor={isDay ? 'black' : 'white'}
                        />
                    </View>
                    <View style={styles.column}>
                        <Text style={[styles.label, { color: isDay ? 'black' : 'white' }]}>CVC Code</Text>
                        <TextInput
                            style={[styles.input, { backgroundColor: isDay ? '#F3F4F6' : '#333', color: isDay ? 'black' : 'white' }]} 
                            placeholder="CVC"
                            value={cvcCode}
                            onChangeText={setCvcCode}
                            keyboardType="numeric"
                            placeholderTextColor={isDay ? 'black' : 'white'}
                        />
                    </View>
                </View>
                <TouchableOpacity style={[styles.addButton, { backgroundColor: isDay ? '#3498db' : '#2980b9' }]} onPress={handleAddCard}>
                    <Text style={styles.addButtonText}>Add Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    form: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
        marginRight: 10,
    },
    addButton: {
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AddCardScreen;
