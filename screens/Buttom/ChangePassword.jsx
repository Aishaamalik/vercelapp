import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const navigation = useNavigation();

  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsValidPassword(text.length >= 8);
    setHasSpecialChar(/[!@#]/.test(text));
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    Alert.alert('Success', 'Password changed successfully!');
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
        <Text style={styles.headerText}>Change Password</Text>
      </View>

      <Text style={styles.subHeader}>The new password must be different from the current password</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />

      <View style={styles.validationContainer}>
        <Text style={isValidPassword ? styles.valid : styles.invalid}>
          {isValidPassword ? '✓' : '✗'} There must be at least 8 characters
        </Text>
        <Text style={hasSpecialChar ? styles.valid : styles.invalid}>
          {hasSpecialChar ? '✓' : '✗'} There must be a unique code like @!#
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
      />

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
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  validationContainer: {
    marginBottom: 20,
  },
  valid: {
    color: 'green',
    fontSize: 12,
    marginBottom: 5,
  },
  invalid: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
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

export default ChangePasswordScreen;
