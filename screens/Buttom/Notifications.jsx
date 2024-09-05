import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NotificationsScreen = () => {
  const [isPaymentReminderEnabled, setIsPaymentReminderEnabled] = useState(true);
  const [isScheduleReminderEnabled, setIsScheduleReminderEnabled] = useState(true);
  const [isMessageEnabled, setIsMessageEnabled] = useState(true);
  const [isCallEnabled, setIsCallEnabled] = useState(true);
  const navigation = useNavigation();

  const isDay = useSelector(state => state.theme.isDay);

  const backgroundColor = isDay ? '#fff' : '#121212';
  const headerTextColor = isDay ? '#333' : '#fff';
  const sectionBackgroundColor = isDay ? '#F3F4F6' : '#1e1e1e';
  const sectionTitleColor = isDay ? '#555' : '#b3b3b3';
  const notificationTextColor = isDay ? '#333' : '#fff';
  const borderColor = isDay ? '#E0E0E0' : '#333';
  const thumbColor = isDay ? '#f5dd4b' : '#f4f3f4';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={headerTextColor} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: headerTextColor }]}>Notifications</Text>
      </View>
      <View style={[styles.notificationsContainer, { backgroundColor: sectionBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Messages Notifications</Text>
        <View style={[styles.notificationItem, { borderBottomColor: borderColor }]}>
          <Text style={[styles.notificationText, { color: notificationTextColor }]}>Payment Reminder</Text>
          <Switch
            value={isPaymentReminderEnabled}
            onValueChange={setIsPaymentReminderEnabled}
            thumbColor={isPaymentReminderEnabled ? thumbColor : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
        <View style={[styles.notificationItem, { borderBottomColor: borderColor }]}>
          <Text style={[styles.notificationText, { color: notificationTextColor }]}>Schedule Reminder</Text>
          <Switch
            value={isScheduleReminderEnabled}
            onValueChange={setIsScheduleReminderEnabled}
            thumbColor={isScheduleReminderEnabled ? thumbColor : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
        <View style={[styles.notificationItem, { borderBottomColor: borderColor }]}>
          <Text style={[styles.notificationText, { color: notificationTextColor }]}>Message</Text>
          <Switch
            value={isMessageEnabled}
            onValueChange={setIsMessageEnabled}
            thumbColor={isMessageEnabled ? thumbColor : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
        <View style={[styles.notificationItem, { borderBottomColor: borderColor }]}>
          <Text style={[styles.notificationText, { color: notificationTextColor }]}>Call</Text>
          <Switch
            value={isCallEnabled}
            onValueChange={setIsCallEnabled}
            thumbColor={isCallEnabled ? thumbColor : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  notificationsContainer: {
    borderRadius: 12, 
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationsScreen;
