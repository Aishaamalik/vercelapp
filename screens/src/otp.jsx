import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EnterOTPScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const isDay = useSelector(state => state.theme.isDay);

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
    };

    const dynamicStyles = isDay ? dayStyles : nightStyles;

    return (
        <View style={[styles.container, dynamicStyles.container]}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={dynamicStyles.iconColor} />
            </TouchableOpacity>
            <Text style={[styles.title, dynamicStyles.title]}>Enter OTP</Text>
            <Text style={[styles.subtitle, dynamicStyles.subtitle]}>
                We have just sent you a 4 digit code via your email example@mail.com
            </Text>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={[styles.otpInput, dynamicStyles.otpInput]}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                    />
                ))}
            </View>
            <TouchableOpacity style={[styles.continueButton, dynamicStyles.continueButton]}>
                <Text style={[styles.continueButtonText, dynamicStyles.continueButtonText]}>Continue</Text>
            </TouchableOpacity>
            <Text style={[styles.footerText, dynamicStyles.footerText]}>
                Did not receive code? <Text style={[styles.resendText, dynamicStyles.resendText]}>Resend Code</Text>
            </Text>
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
        backgroundColor: '#f0f0f0',
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
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
    },
    continueButton: {
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    continueButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerText: {
        fontSize: 14,
        textAlign: 'center',
    },
    resendText: {
        fontWeight: 'bold',
    },
});

// Day mode styles
const dayStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    title: {
        color: '#000',
    },
    subtitle: {
        color: '#757575',
    },
    otpInput: {
        borderColor: '#1E90FF',
        color: '#000',
    },
    continueButton: {
        backgroundColor: '#1E90FF',
    },
    continueButtonText: {
        color: '#fff',
    },
    footerText: {
        color: '#757575',
    },
    resendText: {
        color: '#1E90FF',
    },
    iconColor: '#000',
});

const nightStyles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C', 
    },
    title: {
        color: '#f0f0f0',
    },
    subtitle: {
        color: '#a5a5a5',
    },
    otpInput: {
        borderColor: '#4D4D4D', 
        color: '#f0f0f0', 
    },
    continueButton: {
        backgroundColor: '#333333', 
    },
    continueButtonText: {
        color: '#f0f0f0', 
    },
    footerText: {
        color: '#a5a5a5', 
    },
    resendText: {
        color: '#f0f0f0', 
    },
    iconColor: 'black', 
});

export default EnterOTPScreen;
