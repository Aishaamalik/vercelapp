import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const AddCardScreen = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvcCode, setCvcCode] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Add New Card</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Card Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Card Number"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                    keyboardType="numeric"
                    placeholderTextColor={"black"}
                />
                <Text style={styles.label}>Card Holder Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Holder Name"
                    value={cardHolderName}
                    onChangeText={setCardHolderName}
                    placeholderTextColor={"black"}

                />
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Expired</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="MM/YY"
                            value={expiryDate}
                            onChangeText={setExpiryDate}
                            keyboardType="numeric"
                            placeholderTextColor={"black"}

                        />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>CVC Code</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="CVC"
                            value={cvcCode}
                            onChangeText={setCvcCode}
                            keyboardType="numeric"
                            placeholderTextColor={"black"}

                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color:'black',
    },
    form: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color:'black',
    },
    input: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#F3F4F6',
        color:'black',
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
        backgroundColor: '#3498db',
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