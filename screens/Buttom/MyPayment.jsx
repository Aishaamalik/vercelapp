import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PaymentScreen = () => {
    const isDay = useSelector(state => state.theme.isDay); 
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const loadPaymentData = async () => {
            try {
                const storedPaymentMethods = await AsyncStorage.getItem('paymentMethods');
                const storedSelectedPaymentMethod = await AsyncStorage.getItem('selectedPaymentMethod');
                
                if (storedPaymentMethods) {
                    setPaymentMethods(JSON.parse(storedPaymentMethods));
                } else {
                    setPaymentMethods([
                        {
                            id: '1',
                            type: 'Visa',
                            bank: 'BCA (Bank Central Asia)',
                            lastDigits: '12345',
                            owner: 'Brooklyn Simmons',
                            logo: require('../Assets/bank/visa.png'),
                        },
                        {
                            id: '2',
                            type: 'MasterCard',
                            bank: 'BCA (Bank Central Asia)',
                            lastDigits: '12345',
                            owner: 'Brooklyn Simmons',
                            logo: require('../Assets/bank/visa.png'),
                        },
                        {
                            id: '3',
                            type: 'Visa',
                            bank: 'MCB',
                            lastDigits: '12345',
                            owner: 'Brooklyn Simmons',
                            logo: require('../Assets/bank/visa.png'),
                        },
                    ]);
                }

                if (storedSelectedPaymentMethod) {
                    setSelectedPaymentMethod(storedSelectedPaymentMethod);
                }
            } catch (error) {
                console.error('Failed to load payment data:', error);
            }
        };

        loadPaymentData();
    }, []);

    useEffect(() => {
        if (route.params?.newCard) {
            const newPaymentMethods = [...paymentMethods, route.params.newCard];
            setPaymentMethods(newPaymentMethods);
            AsyncStorage.setItem('paymentMethods', JSON.stringify(newPaymentMethods));
        }
    }, [route.params?.newCard]);

    useEffect(() => {
        AsyncStorage.setItem('selectedPaymentMethod', selectedPaymentMethod);
    }, [selectedPaymentMethod]);

    const renderPaymentMethod = ({ item }) => (
        <TouchableOpacity
            style={[styles.paymentMethod, { backgroundColor: isDay ? '#F4F6FB' : '#333' }]} 
            onPress={() => setSelectedPaymentMethod(item.id)}
        >
            <Image source={item.logo} style={styles.paymentLogo} />
            <View style={styles.paymentDetails}>
                <Text style={[styles.bankName, { color: isDay ? '#000' : '#fff' }]}>{item.bank}</Text> 
                <Text style={[styles.cardNumber, { color: isDay ? '#777' : '#ccc' }]}>{`•••• •••• •••• ${item.lastDigits}`}</Text>
                <Text style={[styles.ownerName, { color: isDay ? '#777' : '#ccc' }]}>{item.owner}</Text> 
            </View>
            <View style={styles.radioButtonContainer}>
                {selectedPaymentMethod === item.id && (
                    <View style={styles.radioButtonSelected} />
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { backgroundColor: isDay ? '#fff' : '#000' }]}>
            <View style={[styles.header, { borderBottomColor: isDay ? '#E0E0E0' : '#555' }]}> 
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color={isDay ? 'black' : 'white'}/>
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: isDay ? 'black' : 'white' }]}>My Payment</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Add Card")}>
                    <MaterialIcons name="add" size={24} color={isDay ? 'black' : 'white'}/> 
                </TouchableOpacity>
            </View>
            <FlatList
                data={paymentMethods}
                renderItem={renderPaymentMethod}
                keyExtractor={(item) => item.id}
                style={styles.paymentList}
            />
            <TouchableOpacity style={styles.selectPaymentButton}>
                <Text style={styles.selectPaymentButtonText}>Select Payment</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    paymentList: {
        flex: 1,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
    },
    paymentLogo: {
        width: 40,
        height: 40,
        marginRight: 15,
    },
    paymentDetails: {
        flex: 1,
    },
    bankName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardNumber: {
        fontSize: 14,
    },
    ownerName: {
        fontSize: 14,
    },
    radioButtonContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonSelected: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#007BFF',
    },
    selectPaymentButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        margin: 20,
    },
    selectPaymentButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PaymentScreen;
