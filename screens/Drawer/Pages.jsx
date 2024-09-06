import { useSelector } from 'react-redux';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PageItem = ({ title, onPress }) => (
    <TouchableOpacity style={styles.pageItem} onPress={onPress}>
        <MaterialIcons name="widgets" size={24} color="#007bff" />
        <Text style={styles.pageTitle}>{title}</Text>
        <MaterialIcons name="chevron-right" size={24} color="#888" />
    </TouchableOpacity>
);

const PagesScreen = ({ navigation }) => {
    const isDay = useSelector(state => state.theme.isDay);
    
    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View style={[styles.container, { backgroundColor: isDay ? '#f2f2f2' : '#333' }]}>
            <View style={[styles.header, { backgroundColor: isDay ? '#007bff' : '#222' }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color={isDay ? '#fff' : '#ddd'} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: isDay ? '#fff' : '#ddd' }]}>Pages</Text>
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: isDay ? '#333' : '#ddd' }]}>Authentication</Text>
                    <View style={[styles.sectionContent, { backgroundColor: isDay ? '#fff' : '#444' }]}>
                        <PageItem title="Sign Up Page" onPress={() => handleNavigation('SignUp')} />
                        <PageItem title="Sign Up With Email Page" onPress={() => handleNavigation('SignUpWithEmail')} />
                        <PageItem title="Sign In Page" onPress={() => handleNavigation('SignIn')} />
                        <PageItem title="Sign In With Email Page" onPress={() => handleNavigation('SignInWithEmail')} />
                        <PageItem title="Create New Password Page" onPress={() => handleNavigation('Create Password')} />
                        <PageItem title="Forgot Password Page" onPress={() => handleNavigation('Forget Password')} />
                        <PageItem title="Enter OTP Page" onPress={() => handleNavigation('Otp')} />
                        <PageItem title="Select Language Page" onPress={() => handleNavigation('Language')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: isDay ? '#333' : '#ddd' }]}>Home</Text>
                    <View style={[styles.sectionContent, { backgroundColor: isDay ? '#fff' : '#444' }]}>
                        <PageItem title="Home Page" onPress={() => handleNavigation('Overview')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: isDay ? '#333' : '#ddd' }]}>Chat</Text>
                    <View style={[styles.sectionContent, { backgroundColor: isDay ? '#fff' : '#444' }]}>
                        <PageItem title="Chat Page" onPress={() => handleNavigation('Chat')} />
                        <PageItem title="Message Page" onPress={() => handleNavigation('Message')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: isDay ? '#333' : '#ddd' }]}>Call</Text>
                    <View style={[styles.sectionContent, { backgroundColor: isDay ? '#fff' : '#444' }]}>
                        <PageItem title="Audio Call Page" onPress={() => handleNavigation('Audio Call')} />
                        <PageItem title="Video Call Page" onPress={() => handleNavigation('Video Call')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: isDay ? '#333' : '#ddd' }]}>Profile</Text>
                    <View style={[styles.sectionContent, { backgroundColor: isDay ? '#fff' : '#444' }]}>
                        <PageItem title="User Profile Page" onPress={() => handleNavigation('Profile')} />
                        <PageItem title="User Info Page" onPress={() => handleNavigation('Edit Profile')} />
                        <PageItem title="Guide Profile Page" onPress={() => handleNavigation('GuideProfile')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: isDay ? '#333' : '#ddd' }]}>Profile Settings</Text>
                    <View style={[styles.sectionContent, { backgroundColor: isDay ? '#fff' : '#444' }]}>
                        <PageItem title="Address Page" onPress={() => handleNavigation('My Address')} />
                        <PageItem title="Add Address Page" onPress={() => handleNavigation('New Address')} />
                        <PageItem title="Add Card Page" onPress={() => handleNavigation('Add Card')} />
                        <PageItem title="Change Password Page" onPress={() => handleNavigation('Change Password')} />
                        <PageItem title="Notifications Page" onPress={() => handleNavigation('Notifications')} />
                        <PageItem title="Security Page" onPress={() => handleNavigation('Security')} />
                        <PageItem title="Language Page" onPress={() => handleNavigation('Language')} />
                        <PageItem title="Payment Page" onPress={() => handleNavigation('My Payment')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: isDay ? '#333' : '#ddd' }]}>Hotel</Text>
                    <View style={[styles.sectionContent, { backgroundColor: isDay ? '#fff' : '#444' }]}>
                        <PageItem title="Book Hotel Page" onPress={() => handleNavigation('Book Hotel')} />
                        <PageItem title="Checkout Hotel Page" onPress={() => handleNavigation('Checkout')} />
                        <PageItem title="Hotels Page" onPress={() => handleNavigation('HotelList')} />
                        <PageItem title="Hotel Details Page" onPress={() => handleNavigation('HotelDetail')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: isDay ? '#333' : '#ddd' }]}>Vacation</Text>
                    <View style={[styles.sectionContent, { backgroundColor: isDay ? '#fff' : '#444' }]}>
                        <PageItem title="Vacation Details Page" onPress={() => handleNavigation('VecationDetails')} />
                        <PageItem title="Wishlist Page" onPress={() => handleNavigation('Liked')} />
                        <PageItem title="Explore Page" onPress={() => handleNavigation('Explore')} />
                        <PageItem title="Checkout Vacation Page" onPress={() => handleNavigation('CheckoutVacation')} />
                        <PageItem title="Search Result Page" onPress={() => handleNavigation('Search')} />
                        <PageItem title="Booked Ticket Page" onPress={() => handleNavigation('Booked')} />
                        <PageItem title="Ticket Details Page" onPress={() => handleNavigation('Detail Ticket')} />
                        <PageItem title="Tour Guide Page" onPress={() => handleNavigation('TourGuide')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: isDay ? '#333' : '#ddd' }]}>Others</Text>
                    <View style={[styles.sectionContent, { backgroundColor: isDay ? '#fff' : '#444' }]}>
                        <PageItem title="Welcome" onPress={() => handleNavigation('Slider')} />
                        <PageItem title="Notification" onPress={() => handleNavigation('Main Notifications')} />
                        <PageItem title="Review" onPress={() => handleNavigation('Review')} />
                        <PageItem title="Legal Policies Page" onPress={() => handleNavigation('legal')} />
                        <PageItem title="Help And Support Page" onPress={() => handleNavigation('help')} />
                    </View>
                </View>
            </ScrollView>
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
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    content: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionContent: {
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    pageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 8,
        backgroundColor: '#fff',
        elevation: 2,
    },
    pageTitle: {
        flex: 1,
        marginLeft: 15,
        fontSize: 16,
        color: 'black',
    },
});

export default PagesScreen;
