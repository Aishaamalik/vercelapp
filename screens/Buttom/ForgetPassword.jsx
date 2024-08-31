import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation =useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }
    Alert.alert('Success', 'OTP has been sent to your email!');
  };

  const handleBackButtonPress = () => {
    navigation.goBack();
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackButtonPress}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Forgot Password</Text>
      </View>

      {/* Information Box */}
      <View style={styles.infoContainer}>
        <MaterialIcons name="info-outline" size={20} color="#555" />
        <Text style={styles.infoText}>
          We will send the OTP code to your email for security in forgetting your password.
        </Text>
      </View>

      {/* Email Input */}
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="example@mail.com"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
    flexShrink: 1,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
