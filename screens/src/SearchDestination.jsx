import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';

const destinations = [
    {
        id: '1',
        name: 'Tahiti Beach',
        location: 'Polynesia, French',
        price: '$235',
        rating: 4.4,
        reviews: 32,
        image: require('../Assets/visits/tahitibeach.jpeg'), 
    },
    {
        id: '2',
        name: 'St. Lucia Mountain',
        location: 'South America',
        price: '$235',
        rating: 4.4,
        reviews: 32,
        image: require('../Assets/visits/lucismountain.jpeg'),
    },
    {
        id: '3',
        name: 'Cappadocia',
        location: 'Turkey',
        price: '$423',
        rating: 4.6,
        reviews: 213,
        image: require('../Assets/visits/p1.jpeg'),
    },
    {
        id: '4',
        name: 'Hanalei Bay',
        location: 'Hawaii',
        price: '$235',
        rating: 4.8,
        reviews: 67,
        image: require('../Assets/visits/p2.jpeg'),
    },
    {
        id: '5',
        name: 'Tahiti Beach',
        location: 'Polynesia, French',
        price: '$434',
        rating: 4.8,
        reviews: 324,
        image: require('../Assets/visits/tahitibeach.jpeg'),
    },
    {
        id: '6',
        name: 'St. Lucia Mountain',
        location: 'Polynesia, French',
        price: '$543',
        rating: 4.8,
        reviews: 123,
        image: require('../Assets/visits/lucismountain.jpeg'),
    },
];

const popularFilters = [
    { id: '1', label: 'Hotels (340)' },
    { id: '2', label: 'Swimming Pool (340)' },
    { id: '3', label: '5 stars (100)' },
    { id: '4', label: 'Private Bathroom (200)' },
    { id: '5', label: 'Breakfast Included (115)' },
    { id: '6', label: 'Kitchen (10)' },
];

const starRatings = [1, 2, 3, 4, 5];

const SearchDestinationScreen = ({ navigation }) => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  
    const filteredData = filteredDestinations.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleFilter = (label) => {
        setSelectedFilters((prevSelectedFilters) => {
            if (prevSelectedFilters.includes(label)) {
                return prevSelectedFilters.filter((filter) => filter !== label);
            } else {
                return [...prevSelectedFilters, label];
            }
        });
    };

    const toggleRating = (rating) => {
        setSelectedRatings((prevSelectedRatings) => {
            if (prevSelectedRatings.includes(rating)) {
                return prevSelectedRatings.filter((r) => r !== rating);
            } else {
                return [...prevSelectedRatings, rating];
            }
        });
    };

    const handlePress = (item) => {
        navigation.navigate('VecationDetails', {
            image: item.image,
            title: item.name,
            location: item.location,
            price: item.price,
            rating: item.rating,
            reviews: item.reviews,
        });
    };

    const toggleFavorite = (itemId) => {
        setFilteredDestinations((prevData) =>
            prevData.map((item) =>
                item.id === itemId ? { ...item, favorite: !item.favorite } : item
            )
        );

        const likedItems = filteredDestinations.filter((item) => item.id === itemId && !item.favorite);
        if (likedItems.length > 0) {
            handleFavoritePress();
        }
    };

    const handleFavoritePress = () => {
        const likedItems = filteredDestinations.filter(item => item.favorite);
        navigation.navigate('Liked', { likedItems });
    };

    const applyFilters = () => {
        const filteredData = destinations.filter(item => {
            const rating = item.rating;
            return selectedRatings.length === 0 || selectedRatings.includes(Math.floor(rating));
        });
        setFilteredDestinations(filteredData);
        setModalVisible(false);
    };

    const renderFilterItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.filterItem,
                selectedFilters.includes(item.label) && styles.selectedFilterItem,
            ]}
            onPress={() => toggleFilter(item.label)}
        >
            <Text style={styles.filterItemText}>{item.label}</Text>
        </TouchableOpacity>
    );
  
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
            <Image source={item.image} style={styles.cardImage} />
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => toggleFavorite(item.id)}
            >
                <Ionicons
                    name={item.favorite ? 'heart' : 'heart-outline'}
                    size={24}
                    color={item.favorite ? 'red' : '#00BFFF'}
                />
            </TouchableOpacity>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <View style={styles.cardLocation}>
                    <Ionicons name="location-outline" size={16} color="gray" />
                    <Text style={styles.cardLocationText}>{item.location}</Text>
                </View>
                <Text style={styles.cardPrice}>{item.price}</Text>
                <View style={styles.cardRating}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.cardRatingText}>{item.rating}</Text>
                    <Text style={styles.cardReviews}>({item.reviews})</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Search Destination</Text>
            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Ionicons name="options-outline" size={20} color="#888" />
                </TouchableOpacity>
            </View>

            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <MaterialIcons name="date-range" size={20} color="#888" />
                    <Text style={styles.filterText}>Date</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Ionicons name="location-outline" size={20} color="#888" />
                    <Text style={styles.filterText}>Location</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.recommendationHeader}>
                <Text style={styles.recommendationTitle}>Recommendation</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
            <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter</Text>
            <View style={styles.sliderContainer}>
              <Text>Price Range</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1000}
                step={10}
                minimumTrackTintColor="#00BFFF"
                maximumTrackTintColor="#C0C0C0"
                onValueChange={(value) => setSliderValue(value)}
                value={sliderValue}
              />
              <Text style={styles.sliderValue}>${sliderValue.toFixed(2)} - 1000$</Text>
            </View>
            <Text style={styles.sectionTitle}>Popular Filters</Text>
            <FlatList
              data={popularFilters}
              renderItem={renderFilterItem}
              keyExtractor={(item) => item.id}
              horizontal={false}
              numColumns={2}
              contentContainerStyle={styles.filterList}
            />
            <Text style={styles.sectionTitle}>Star Rating</Text>
            <View style={styles.starRatingContainer}>
              {starRatings.map((rating) => (
                <TouchableOpacity
                  key={rating}
                  style={[
                    styles.starButton,
                    selectedRatings.includes(rating) && styles.selectedStarButton,
                  ]}
                  onPress={() => toggleRating(rating)}
                >
                  <Ionicons name="star" size={20} color={selectedRatings.includes(rating) ? '#FFD700' : '#d3d3d3'} />
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
              <Text style={styles.applyButtonText}>Apply Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearButton}
              onPress={() => {
                setSelectedFilters([]);
                setSelectedRatings([]);
                setSliderValue(0);
                setFilteredDestinations(destinations);
                setModalVisible(false);
              }}
            >
              <Text style={styles.clearButtonText}>Clear All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        marginHorizontal: 5,
    },
    filterText: {
        marginLeft: 5,
        color: '#888',
    },
    recommendationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    recommendationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAllText: {
        color: '#007BFF',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        flex: 1,
        marginHorizontal: 5,
    },
    cardImage: {
        width: '100%',
        height: 120,
    },
    favoriteButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        padding: 5,
    },
    cardContent: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    cardLocationText: {
        marginLeft: 5,
        color: '#888',
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardRating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardRatingText: {
        marginLeft: 5,
        color: '#888',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
      },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  sliderContainer: { marginBottom: 20 },
  slider: { width: '100%', height: 40 },
  sliderValue: { textAlign: 'center', marginTop: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  filterList: { marginBottom: 20 },
  filterItem: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
    
  selectedFilterItem: { backgroundColor: '#00BFFF', borderColor: '#00BFFF' },
  filterItemText: { color: '#000' },
  starRatingContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  starButton: { padding: 5 },
  selectedStarButton: { backgroundColor: '#F5F5F5' },
  applyButton: { backgroundColor: '#00BFFF', padding: 15, borderRadius: 5, alignItems: 'center' },
  applyButtonText: { color: 'white', fontWeight: 'bold' },
  clearButton: { marginTop: 10, alignItems: 'center' },
  clearButtonText: { color: '#FF6347', fontWeight: 'bold' },
});

export default SearchDestinationScreen;
