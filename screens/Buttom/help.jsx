import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FAQItem = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={styles.faqItem}>
            <TouchableOpacity 
                onPress={() => setExpanded(!expanded)} 
                style={styles.faqQuestion}
            >
                <Text style={styles.questionText}>{question}</Text>
                <MaterialIcons 
                    name={expanded ? "expand-less" : "expand-more"} 
                    size={24} 
                    color="#555"
                />
            </TouchableOpacity>
            {expanded && <Text style={styles.answerText}>{answer}</Text>}
        </View>
    );
};

const HelpAndSupportScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Help and Support</Text>
            </View>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                placeholderTextColor="#888"
            />
            <ScrollView style={styles.content}>
                <FAQItem
                    question="How do I reset my password?"
                    answer="You can reset your password by clicking on the Forgot Password? link in the login page."
                />
                <FAQItem
                    question="I forgot my password, what should I do?"
                    answer="If you forgot your password, you can reset it by using the Forgot Password? link on the login page."
                />
                <FAQItem
                    question="How can I contact support?"
                    answer="You can contact support through the Contact Us page in the app or by emailing support@example.com."
                />
                <FAQItem
                    question="Where can I find the app's privacy policy?"
                    answer="The privacy policy can be found in the Settings section under 'Privacy Policy.'"
                />
                <FAQItem
                    question="How do I update my account information?"
                    answer="To update your account information, go to the Account Settings page in the app."
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9', 
        padding: 20,
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
    searchBar: {
        height: 45,
        backgroundColor: '#EFEFEF',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        color: '#333',
    },
    content: {
        flex: 1,
    },
    faqItem: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0', 
        paddingBottom: 15,
    },
    faqQuestion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    questionText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    answerText: {
        marginTop: 5,
        fontSize: 14,
        color: '#555',
    },
});

export default HelpAndSupportScreen;
