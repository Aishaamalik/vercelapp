import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SecurityScreen = () => {
  const [isFaceIDEnabled, setFaceIDEnabled] = useState(true);
  const [isRememberPasswordEnabled, setRememberPasswordEnabled] = useState(true);
  const [isTouchIDEnabled, setTouchIDEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Security</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Messages Notifications</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Face ID</Text>
          <Switch
            value={isFaceIDEnabled}
            onValueChange={setFaceIDEnabled}
            trackColor={{ false: "#767577", true: "gray" }}
            thumbColor={isFaceIDEnabled ? "#00BFFF" : "#f4f3f4"}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Remember Password</Text>
          <Switch
            value={isRememberPasswordEnabled}
            onValueChange={setRememberPasswordEnabled}
            trackColor={{ false: "#767577", true: "gray" }}
            thumbColor={isRememberPasswordEnabled ? "#00BFFF" : "#f4f3f4"}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Touch ID</Text>
          <Switch
            value={isTouchIDEnabled}
            onValueChange={setTouchIDEnabled}
            trackColor={{ false: "#767577", true: "gray" }}
            thumbColor={isTouchIDEnabled ? "#00BFFF" : "#f4f3f4"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8e8e8e',
    marginBottom: 15,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  divider: {
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default SecurityScreen;
