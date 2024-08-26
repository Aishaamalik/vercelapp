// OverviewScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
  { title: 'Airport', icon: 'https://via.placeholder.com/40' },
  { title: 'Rental', icon: 'https://via.placeholder.com/40' },
  { title: 'Hotel', icon: 'https://via.placeholder.com/40' },
  { title: 'More', icon: 'https://via.placeholder.com/40' },
];

const OverviewScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <Icon name="moon" size={24} color="white" style={styles.headerIcon} />
          <Icon name="person" size={24} color="white" style={styles.headerIcon} />
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/60' }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.greeting}>Hi, Andy</Text>
          <Text style={styles.location}>Netherlands</Text>
        </View>
        <View style={styles.profileIcons}>
          <Icon name="notifications" size={24} color="black" style={styles.profileIcon} />
          <Icon name="chatbox" size={24} color="black" style={styles.profileIcon} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#aaa" />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
        />
        <Icon name="options" size={20} color="#aaa" />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <Image
              source={{ uri: category.icon }}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>{category.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 15,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#888',
  },
  profileIcons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  profileIcon: {
    marginLeft: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  category: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
  },
});

export default OverviewScreen;