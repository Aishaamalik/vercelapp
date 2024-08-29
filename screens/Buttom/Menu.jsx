import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const initialData = [
  {
    id: '1',
    image: require('../Assets/visits/tahitibeach.jpeg'),
    title: 'Tahiti Beach',
    location: 'Polynesia, French',
    price: '$235',
    rating: '4.4',
    reviews: '32',
    favorite: false,
  },
  {
    id: '2',
    image: require('../Assets/visits/lucismountain.jpeg'),
    title: 'St. Lucia Mountain',
    location: 'South America',
    price: '$453',
    rating: '4.4',
    reviews: '102',
    favorite: false,
  },
  
  {
    id: '3',
    title: 'Cappadocia',
    location: 'Turki',
    price: '$423',
    rating: '4.6',
    reviews: '213',
    image: require('../Assets/visits/p1.jpeg'),
    favorite: false,

},
{
    id: '4',
    title: 'Hanalei Bay',
    location: 'Hawaii',
    price: '$235',
    rating: '4.8',
    reviews: '67',
    image: require('../Assets/visits/p2.jpeg'),
    favorite: false,

},
{
    id: '5',
    title: 'Tahiti Beach',
    location: 'Polynesia, French',
    price: '$434',
    rating: '4.8',
    reviews: '324',
    image: require('../Assets/visits/tahitibeach.jpeg'),
    favorite: false,

},
{
    id: '6',
    title: 'St. Lucia Mountain',
    location: 'Polynesia, French',
    price: '$543',
    rating: '4.8',
    reviews: '123',
    image: require('../Assets/visits/lucismountain.jpeg'),
    favorite: false,

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

const Menu = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
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
      title: item.title,
      location: item.location,
      price: item.price,
      rating: item.rating,
      reviews: item.reviews,
    });
  };

  const toggleFavorite = (itemId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, favorite: !item.favorite } : item
      )
    );

    const likedItems = data.filter((item) => item.id === itemId && !item.favorite);
    if (likedItems.length > 0) {
      handleFavoritePress();
    }
  };

  const handleFavoritePress = () => {
    const likedItems = data.filter(item => item.favorite);
    navigation.navigate('Liked', { likedItems });
  };

  const applyFilters = () => {
    const filteredData = data.filter(item => {
      const rating = parseFloat(item.rating);
      return selectedRatings.length === 0 || selectedRatings.includes(Math.floor(rating));
    });
    setData(filteredData);
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
        style={styles.favoriteIcon}
        onPress={() => toggleFavorite(item.id)}
      >
        <Icon
          name={item.favorite ? 'heart' : 'heart-outline'}
          size={24}
          color={item.favorite ? 'red' : '#00BFFF'}
        />
      </TouchableOpacity>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <View style={styles.cardLocation}>
        <Icon name="location-outline" size={16} color="gray" />
        <Text style={styles.cardLocationText}>{item.location}</Text>
      </View>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <View style={styles.cardRating}>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={styles.cardRatingText}>{item.rating}</Text>
        <Text style={styles.cardReviews}>({item.reviews})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="black" />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          placeholderTextColor={'black'}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="options" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsHorizontalScrollIndicator={false}
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
                  <Icon name="star" size={20} color={selectedRatings.includes(rating) ? '#FFD700' : '#d3d3d3'} />
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
                setData(initialData);
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
  container: { flex: 1, padding: 10 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  card: {
    width: '48%',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold' ,color:'black'},
  cardLocation: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  cardLocationText: { marginLeft: 5, color: 'gray' },
  cardPrice: { fontSize: 16, color: '#00BFFF', marginTop: 5 },
  cardRating: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  cardRatingText: { marginLeft: 5 },
  cardReviews: { marginLeft: 5, color: 'gray' },
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

export default Menu;
