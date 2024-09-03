import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GuideProfileScreen = ({ route, navigation }) => {
    const defaultImage = require('../Assets/Tourguide/p1.jpg'); 
    const defaultName = 'Default Guide Name';

    const { guideImage = defaultImage, guideName = defaultName } = route.params || {};

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                    accessibilityLabel="Back"
                    accessibilityHint="Go back to the previous screen"
                >
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Profile</Text>
            </View>

            <Image
                source={require('../Assets/Tourguide/background.jpg')}
                style={styles.backgroundImage}
            />

            <View style={styles.profileContainer}>
                <Image
                    source={guideImage}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>{guideName}</Text>
                <Text style={styles.profileSubtitle}>
                    International tour guide in <Text style={styles.highlightedText}>Pakistan</Text>
                </Text>
                <Text style={styles.profileSubtitle}>Travel and food vlogger</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.messageButton} accessibilityLabel="Send Message">
                    <Text style={styles.buttonText}>Send Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton} accessibilityLabel="Call Now">
                    <Text style={styles.buttonText1}>Call Now</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>Guide</Text>
                    <Text style={styles.infoValue}>700+</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>Experience</Text>
                    <Text style={styles.infoValue}>3 Years</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>Rate</Text>
                    <Text style={styles.infoValue}>4.0/5</Text>
                </View>
            </View>

            <View style={styles.aboutContainer}>
                <Text style={styles.aboutTitle}>About Us</Text>
                <Text style={styles.aboutText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac leo lorem nisl. Viverra
                    vulputate sodales quis et dui, lacus. Iaculis eu egestas leo egestas vel. Ultrices ut magna
                    nulla facilisi commodo enim, orci feugiat pharetra.
                </Text>
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingHorizontal: 20,
        width: '100%',
        zIndex: 10,
    },
    backButton: {
        padding: 10,
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: height * 0.3, // Adjust height based on screen size
        width: '100%',
        resizeMode: 'cover',
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: height * 0.3, // Adjust marginTop based on background image height
        paddingHorizontal: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#fff',
    },
    profileName: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 15,
        color: 'black',
    },
    profileSubtitle: {
        fontSize: 16, 
        color: 'black',
        textAlign: 'center',
        marginTop: 5,
    },
    highlightedText: {
        color: '#FF5733',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    messageButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    callButton: {
        backgroundColor: '#F0F0F0',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonText1: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    infoBox: {
        alignItems: 'center',
    },
    infoLabel: {
        color: 'black',
        fontSize: 14,
    },
    infoValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0CAFFF',
    },
    aboutContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    aboutTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
    aboutText: {
        fontSize: 16,
        lineHeight: 22,
        color: 'black',
    },
});

export default GuideProfileScreen;
