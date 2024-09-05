import { useSelector } from 'react-redux';
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
  
  const isDay = useSelector(state => state.theme.isDay);

  const backgroundColor = isDay ? '#fff' : '#121212';
  const headerTextColor = isDay ? '#333' : '#fff';
  const sectionBackgroundColor = isDay ? '#F3F4F6' : '#1e1e1e';
  const sectionTitleColor = isDay ? '#555' : '#b3b3b3';
  const languageTextColor = isDay ? '#333' : '#fff';
  const borderColor = isDay ? '#E0E0E0' : '#333';

  const renderLanguageItem = (language) => (
    <TouchableOpacity
      key={language}
      style={[styles.languageItem, { borderBottomColor: borderColor }]}
      onPress={() => setSelectedLanguage(language)}
    >
      <Text style={[styles.languageText, { color: languageTextColor }]}>{language}</Text>
      <RadioButton
        value={language}
        status={selectedLanguage === language ? 'checked' : 'unchecked'}
        onPress={() => setSelectedLanguage(language)}
        color={isDay ? '#333' : '#fff'}
      />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={headerTextColor} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: headerTextColor }]}>Language</Text>
      </View>
      <View style={[styles.languageSection, { backgroundColor: sectionBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Suggested Languages</Text>
        {languages.suggested.map((language) => renderLanguageItem(language))}
      </View>
      <View style={[styles.languageSection, { backgroundColor: sectionBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Other Languages</Text>
        {languages.others.map((language) => renderLanguageItem(language))}
      </View>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  languageSection: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  languageText: {
    fontSize: 16,
  },
});

export default LanguageScreen;
