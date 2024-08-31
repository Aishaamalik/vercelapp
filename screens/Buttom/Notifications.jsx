import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NotificationsScreen = () => {
    const [isPaymentReminderEnabled, setIsPaymentReminderEnabled] = useState(true);
    const [isScheduleReminderEnabled, setIsScheduleReminderEnabled] = useState(true);
    const [isMessageEnabled, setIsMessageEnabled] = useState(true);
    const [isCallEnabled, setIsCallEnabled] = useState(true);
    const navigation =useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>
            <View style={styles.notificationsContainer}>
                <Text style={styles.sectionTitle}>Messages Notifications</Text>
                <View style={styles.notificationItem}>
                    <Text style={styles.notificationText}>Payment Reminder</Text>
                    <Switch
                        value={isPaymentReminderEnabled}
                        onValueChange={setIsPaymentReminderEnabled}
                    />
                </View>
                <View style={styles.notificationItem}>
                    <Text style={styles.notificationText}>Schedule Reminder</Text>
                    <Switch
                        value={isScheduleReminderEnabled}
                        onValueChange={setIsScheduleReminderEnabled}
                    />
                </View>
                <View style={styles.notificationItem}>
                    <Text style={styles.notificationText}>Message</Text>
                    <Switch
                        value={isMessageEnabled}
                        onValueChange={setIsMessageEnabled}
                    />
                </View>
                <View style={styles.notificationItem}>
                    <Text style={styles.notificationText}>Call</Text>
                    <Switch
                        value={isCallEnabled}
                        onValueChange={setIsCallEnabled}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        color: '#333', 
    },
    notificationsContainer: {
        backgroundColor: '#F3F4F6',
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
        color: '#555', 
    },
    notificationItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    notificationText: {
        fontSize: 16,
        color: '#333', 
    },
});

export default NotificationsScreen;
