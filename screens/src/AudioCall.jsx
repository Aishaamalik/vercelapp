import { useSelector } from 'react-redux';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const CallScreen = ({ navigation }) => {
    const isDay = useSelector(state => state.theme.isDay); 
    
    const dynamicStyles = {
        container: {
            flex: 1,
            backgroundColor: isDay ? '#fff' : '#000',
        },
        heading: {
            color: isDay ? '#000' : '#fff',
        },
        controlButton: {
            backgroundColor: isDay ? '#f0f0f0' : '#333',
        },
        endCallButton: {
            backgroundColor: '#FF3B30',
        },
        callInfo: {
            backgroundColor: isDay ? '#f8f8f8' : '#333',
        },
        callName: {
            color: isDay ? '#000' : '#fff',
        },
        callSubtext: {
            color: isDay ? '#666' : '#aaa',
        },
        callTime: {
            color: '#FF3B30',
        },
    };

    return (
        <View style={[styles.container, dynamicStyles.container]}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={isDay ? "#000" : "#fff"} />
                </TouchableOpacity>
                <Text style={[styles.heading, dynamicStyles.heading]}>Call</Text>
            </View>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../Assets/Tourguide/p1.jpg')}
                    style={styles.profileImage}
                />
            </View>
            <View style={styles.callControls}>
                <TouchableOpacity style={[styles.controlButton, dynamicStyles.controlButton]}>
                    <Ionicons name="mic-outline" size={24} color={isDay ? "#000" : "#fff"} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.endCallButton, dynamicStyles.endCallButton]}>
                    <MaterialIcons name="call-end" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.controlButton, dynamicStyles.controlButton]}>
                    <Ionicons name="videocam-outline" size={24} color={isDay ? "#000" : "#fff"} />
                </TouchableOpacity>
            </View>
            <View style={[styles.callInfo, dynamicStyles.callInfo]}>
                <View style={styles.callInfoContent}>
                    <Image
                        source={require('../Assets/Tourguide/p1.jpg')}
                        style={styles.avatar}
                    />
                    <View style={styles.callTextContainer}>
                        <Text style={[styles.callName, dynamicStyles.callName]}>Richar Kandowen</Text>
                        <Text style={[styles.callSubtext, dynamicStyles.callSubtext]}>Richar Kandowen</Text>
                    </View>
                    <Text style={[styles.callTime, dynamicStyles.callTime]}>07:23</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    heading: {
        flex: 1, 
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: width - 40,
        height: width - 40,
        borderRadius: (width - 40) / 2,
    },
    callControls: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 20,
    },
    controlButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    endCallButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    callInfo: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    callInfoContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    callTextContainer: {
        flex: 1,
        marginLeft: 10,
    },
    callName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    callSubtext: {
        fontSize: 14,
    },
    callTime: {
        fontSize: 14,
    },
});

export default CallScreen;
