import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FAQItem = ({ question, answer, isDay }) => {
    const [expanded, setExpanded] = useState(false);

    // Dynamic styles for FAQ items based on the theme
    const dynamicStyles = {
        questionText: {
            color: isDay ? '#333' : '#fff',
        },
        answerText: {
            color: isDay ? '#555' : '#ccc',
        },
        faqItemBorder: {
            borderBottomColor: isDay ? '#E0E0E0' : '#444',
        },
    };

    return (
        <View style={[styles.faqItem, dynamicStyles.faqItemBorder]}>
            <TouchableOpacity 
                onPress={() => setExpanded(!expanded)} 
                style={styles.faqQuestion}
            >
                <Text style={[styles.questionText, dynamicStyles.questionText]}>{question}</Text>
                <MaterialIcons 
                    name={expanded ? "expand-less" : "expand-more"} 
                    size={24} 
                    color={isDay ? "#555" : "#ccc"}
                />
            </TouchableOpacity>
            {expanded && <Text style={[styles.answerText, dynamicStyles.answerText]}>{answer}</Text>}
        </View>
    );
};

const HelpAndSupportScreen = () => {
    const navigation = useNavigation();
    const isDay = useSelector(state => state.theme.isDay); // Redux selector for theme

    // Dynamic styles based on the theme
    const dynamicStyles = {
        container: {
            backgroundColor: isDay ? '#F9F9F9' : '#333',
        },
        headerTitle: {
            color: isDay ? '#333' : '#fff',
        },
        searchBar: {
            backgroundColor: isDay ? '#EFEFEF' : '#555',
            color: isDay ? '#333' : '#fff',
        },
    };

    return (
        <View style={[styles.container, dynamicStyles.container]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color={isDay ? "#333" : "#fff"} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, dynamicStyles.headerTitle]}>Help and Support</Text>
            </View>
            <TextInput
                style={[styles.searchBar, dynamicStyles.searchBar]}
                placeholder="Search..."
                placeholderTextColor={isDay ? "#888" : "#ccc"}
            />
            <ScrollView style={styles.content}>
                <FAQItem
                    question="How do I reset my password?"
                    answer="You can reset your password by clicking on the Forgot Password? link in the login page."
                    isDay={isDay}
                />
                <FAQItem
                    question="I forgot my password, what should I do?"
                    answer="If you forgot your password, you can reset it by using the Forgot Password? link on the login page."
                    isDay={isDay}
                />
                <FAQItem
                    question="How can I contact support?"
                    answer="You can contact support through the Contact Us page in the app or by emailing support@example.com."
                    isDay={isDay}
                />
                <FAQItem
                    question="Where can I find the app's privacy policy?"
                    answer="The privacy policy can be found in the Settings section under 'Privacy Policy.'"
                    isDay={isDay}
                />
                <FAQItem
                    question="How do I update my account information?"
                    answer="To update your account information, go to the Account Settings page in the app."
                    isDay={isDay}
                />
            </ScrollView>
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
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    searchBar: {
        height: 45,
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
    },
    content: {
        flex: 1,
    },
    faqItem: {
        marginBottom: 15,
        borderBottomWidth: 1,
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
    },
    answerText: {
        marginTop: 5,
        fontSize: 14,
    },
});

export default HelpAndSupportScreen;
