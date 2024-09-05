import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SecurityScreen = () => {
  const [isFaceIDEnabled, setFaceIDEnabled] = useState(true);
  const [isRememberPasswordEnabled, setRememberPasswordEnabled] = useState(true);
  const [isTouchIDEnabled, setTouchIDEnabled] = useState(true);
  const navigation = useNavigation();

  const isDay = useSelector(state => state.theme.isDay);

  const backgroundColor = isDay ? '#FFFFFF' : '#121212';
  const cardBackgroundColor = isDay ? '#f7f7f7' : '#1e1e1e';
  const textColor = isDay ? '#000' : '#FFFFFF';
  const textColor1 = isDay ? '#000' : 'black';

  const sectionTitleColor = isDay ? '#8e8e8e' : '#b3b3b3';
  const dividerColor = isDay ? '#dcdcdc' : '#333';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color={textColor1} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: textColor }]}>Security</Text>
      </View>

      <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Messages Notifications</Text>

        <View style={styles.optionContainer}>
          <Text style={[styles.optionText, { color: textColor }]}>Face ID</Text>
          <Switch
            value={isFaceIDEnabled}
            onValueChange={setFaceIDEnabled}
            trackColor={{ false: "#767577", true: "gray" }}
            thumbColor={isFaceIDEnabled ? "#00BFFF" : "#f4f3f4"}
          />
        </View>

        <View style={[styles.divider, { borderBottomColor: dividerColor }]} />

        <View style={styles.optionContainer}>
          <Text style={[styles.optionText, { color: textColor }]}>Remember Password</Text>
          <Switch
            value={isRememberPasswordEnabled}
            onValueChange={setRememberPasswordEnabled}
            trackColor={{ false: "#767577", true: "gray" }}
            thumbColor={isRememberPasswordEnabled ? "#00BFFF" : "#f4f3f4"}
          />
        </View>

        <View style={[styles.divider, { borderBottomColor: dividerColor }]} />

        <View style={styles.optionContainer}>
          <Text style={[styles.optionText, { color: textColor }]}>Touch ID</Text>
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
  },
  card: {
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
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
  },
  divider: {
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default SecurityScreen;
