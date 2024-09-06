import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const isDay = useSelector(state => state.theme.isDay); // Redux selector for theme

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

  // Styles based on theme
  const dynamicStyles = {
    container: {
      backgroundColor: isDay ? '#fff' : '#333',
    },
    headerText: {
      color: isDay ? '#000' : '#fff',
    },
    infoContainer: {
      backgroundColor: isDay ? '#f0f0f0' : '#444',
    },
    infoText: {
      color: isDay ? '#555' : '#ddd',
    },
    label: {
      color: isDay ? '#000' : '#fff',
    },
    input: {
      backgroundColor: isDay ? '#fff' : '#555',
      borderColor: isDay ? '#007BFF' : '#ddd',
      color: isDay ? '#000' : '#fff',
    },
    submitButton: {
      backgroundColor: isDay ? '#007BFF' : '#666',
    },
    submitButtonText: {
      color: isDay ? '#fff' : '#000',
    },
  };

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackButtonPress}>
          <Icon name="arrow-left" size={24} color={isDay ? '#000' : '#fff'} />
        </TouchableOpacity>
        <Text style={[styles.headerText, dynamicStyles.headerText]}>Forgot Password</Text>
      </View>

      {/* Information Box */}
      <View style={[styles.infoContainer, dynamicStyles.infoContainer]}>
        <MaterialIcons name="info-outline" size={20} color={isDay ? '#555' : '#ddd'} />
        <Text style={[styles.infoText, dynamicStyles.infoText]}>
          We will send the OTP code to your email for security in forgetting your password.
        </Text>
      </View>

      {/* Email Input */}
      <Text style={[styles.label, dynamicStyles.label]}>E-mail</Text>
      <TextInput
        style={[styles.input, dynamicStyles.input]}
        placeholder="example@mail.com"
        placeholderTextColor={isDay ? '#888' : '#ccc'}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Submit Button */}
      <TouchableOpacity style={[styles.submitButton, dynamicStyles.submitButton]} onPress={handleSubmit}>
        <Text style={[styles.submitButtonText, dynamicStyles.submitButtonText]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    flexShrink: 1,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  submitButton: {
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
