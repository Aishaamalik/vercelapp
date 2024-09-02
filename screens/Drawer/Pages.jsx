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
    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Pages</Text>
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Authentication</Text>
                    <View style={styles.sectionContent}>
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
                    <Text style={styles.sectionTitle}>Home</Text>
                    <View style={styles.sectionContent}>
                        <PageItem title="Home Page" onPress={() => handleNavigation('Overview')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Chat</Text>
                    <View style={styles.sectionContent}>
                        <PageItem title="Chat Page" onPress={() => handleNavigation('Chat')} />
                        <PageItem title="Message Page" onPress={() => handleNavigation('Message')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Call</Text>
                    <View style={styles.sectionContent}>
                        <PageItem title="Audio Call Page" onPress={() => handleNavigation('Audio Call')} />
                        <PageItem title="Video Call Page" onPress={() => handleNavigation('VideoCall')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Profile</Text>
                    <View style={styles.sectionContent}>
                        <PageItem title="User Profile Page" onPress={() => handleNavigation('UserProfile')} />
                        <PageItem title="User Info Page" onPress={() => handleNavigation('UserInfo')} />
                        <PageItem title="Guide Profile Page" onPress={() => handleNavigation('GuideProfile')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Profile Settings</Text>
                    <View style={styles.sectionContent}>
                        <PageItem title="Address Page" onPress={() => handleNavigation('Address')} />
                        <PageItem title="Add Address Page" onPress={() => handleNavigation('AddAddress')} />
                        <PageItem title="Add Card Page" onPress={() => handleNavigation('AddCard')} />
                        <PageItem title="Change Password Page" onPress={() => handleNavigation('ChangePassword')} />
                        <PageItem title="Notifications Page" onPress={() => handleNavigation('Notifications')} />
                        <PageItem title="Security Page" onPress={() => handleNavigation('Security')} />
                        <PageItem title="Language Page" onPress={() => handleNavigation('Language')} />
                        <PageItem title="Payment Page" onPress={() => handleNavigation('Payment')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Hotel</Text>
                    <View style={styles.sectionContent}>
                        <PageItem title="Book Hotel Page" onPress={() => handleNavigation('BookHotel')} />
                        <PageItem title="Checkout Hotel Page" onPress={() => handleNavigation('CheckoutHotel')} />
                        <PageItem title="Hotels Page" onPress={() => handleNavigation('Hotels')} />
                        <PageItem title="Hotel Details Page" onPress={() => handleNavigation('HotelDetails')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Vacation</Text>
                    <View style={styles.sectionContent}>
                        <PageItem title="Vacation Details Page" onPress={() => handleNavigation('VacationDetails')} />
                        <PageItem title="Wishlist Page" onPress={() => handleNavigation('Wishlist')} />
                        <PageItem title="Explore Page" onPress={() => handleNavigation('Explore')} />
                        <PageItem title="Checkout Vacation Page" onPress={() => handleNavigation('CheckoutVacation')} />
                        <PageItem title="Search Result Page" onPress={() => handleNavigation('SearchResult')} />
                        <PageItem title="Location Page" onPress={() => handleNavigation('Location')} />
                        <PageItem title="Booked Ticket Page" onPress={() => handleNavigation('BookedTicket')} />
                        <PageItem title="Ticket Details Page" onPress={() => handleNavigation('TicketDetails')} />
                        <PageItem title="Tour Guide Page" onPress={() => handleNavigation('TourGuide')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Others</Text>
                    <View style={styles.sectionContent}>
                        <PageItem title="Welcome" onPress={() => handleNavigation('Welcome')} />
                        <PageItem title="Notification" onPress={() => handleNavigation('Notification')} />
                        <PageItem title="Review" onPress={() => handleNavigation('Review')} />
                        <PageItem title="Legal Policies Page" onPress={() => handleNavigation('LegalPolicies')} />
                        <PageItem title="Help And Support Page" onPress={() => handleNavigation('HelpAndSupport')} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
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
        color: '#333', 
    },
    sectionContent: {
        backgroundColor: '#ffffff',
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
        color: '#333', 
    },
});

export default PagesScreen;
