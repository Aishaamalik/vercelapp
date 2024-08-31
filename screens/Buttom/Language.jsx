import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const languages = {
  suggested: ['English (UK)', 'English', 'Bahasa Indonesia'],
  others: ['Chinese', 'Croatian', 'Czech', 'Danish', 'Filipino', 'Finland'],
};

const LanguageScreen = () => {
  const navigation = useNavigation(); 
  const [selectedLanguage, setSelectedLanguage] = useState('English (UK)');

  const renderLanguageItem = (language) => (
    <TouchableOpacity
      key={language}
      style={styles.languageItem}
      onPress={() => setSelectedLanguage(language)}
    >
      <Text style={styles.languageText}>{language}</Text>
      <RadioButton
        value={language}
        status={selectedLanguage === language ? 'checked' : 'unchecked'}
        onPress={() => setSelectedLanguage(language)}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Language</Text>
      </View>
      <View style={styles.languageSection}>
        <Text style={styles.sectionTitle}>Suggested Languages</Text>
        {languages.suggested.map((language) => renderLanguageItem(language))}
      </View>
      <View style={styles.languageSection}>
        <Text style={styles.sectionTitle}>Other Languages</Text>
        {languages.others.map((language) => renderLanguageItem(language))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#333',
  },
  languageSection: {
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  languageText: {
    fontSize: 16,
    color: '#333',
  },
});

export default LanguageScreen;
