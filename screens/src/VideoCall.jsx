import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const { width } = Dimensions.get('window');

const CallScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
                <Image
                    source={ require('../Assets/Tourguide/p4.jpg')}
                    style={styles.remoteVideo}
                />
                <Image
                    source={ require('../Assets/Tourguide/p2.jpg')}
                    style={styles.localVideo}
                />
            </View>
            <View style={styles.callInfo}>
                <View style={styles.callInfoContent}>
                    <Image
                    source={ require('../Assets/Tourguide/p4.jpg')}
                    style={styles.avatar}
                    />
                    <View style={styles.callTextContainer}>
                        <Text style={styles.callName}>Richar Kandowen</Text>
                        <Text style={styles.callSubtext}>Richar Kandowen</Text>
                    </View>
                    <Text style={styles.callTime}>07:23</Text>
                </View>
            </View>
            <View style={styles.callControls}>
                <TouchableOpacity style={styles.controlButton}>
                    <Ionicons name="mic-outline" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton}>
                    <Ionicons name="volume-high-outline" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton}>
                    <Ionicons name="videocam-outline" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.endCallButton}>
                    <MaterialIcons name="call-end" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    videoContainer: {
        flex: 1,
        flexDirection:'column',
        alignSelf:'center',
    },
    remoteVideo: {
        flex: 1,
        margin: 5,
    },
    localVideo: {
        flex: 1,
        margin: 5,
    },
    callInfo: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
    },
    callInfoContent: {
        flexDirection: 'row',
        alignItems: 'center',
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
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    callSubtext: {
        color: '#fff',
        fontSize: 14,
    },
    callTime: {
        color: '#FF3B30',
        fontSize: 14,
    },
    callControls: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#fff',
    },
    controlButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    endCallButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FF3B30',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CallScreen;