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
    price: '$235',
    rating: '4.4',
    reviews: '41',
    favorite: false,
  },
  {
    id: '3',
    image: require('../Assets/visits/tahitibeach.jpeg'),
    title: 'Tahiti Beach',
    location: 'Polynesia, French',
    price: '$235',
    rating: '4.4',
    reviews: '32',
    favorite: false,
  },
  {
    id: '4',
    image: require('../Assets/visits/lucismountain.jpeg'),
    title: 'St. Lucia Mountain',
    location: 'South America',
    price: '$235',
    rating: '4.4',
    reviews: '41',
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
  const [selectedRating, setSelectedRating] = useState(null); 

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const toggleFilter = (label) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (prevSelectedFilters.includes(label)) {
        return prevSelectedFilters.filter((filter) => filter !== label);
      } else {
        return [...prevSelectedFilters, label];
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
              numColumns={3}
              contentContainerStyle={styles.filterList}
            />
            <Text style={styles.sectionTitle}>Star Rating</Text>
            <View style={styles.starRatingContainer}>
              {starRatings.map((rating) => (
                <TouchableOpacity
                  key={rating}
                  style={[
                    styles.starButton,
                    selectedRating === rating && styles.selectedStarButton,
                  ]}
                  onPress={() => setSelectedRating(rating)}
                >
                  <Icon name="star" size={20} color={selectedRating === rating ? '#FFD700' : '#d3d3d3'} />
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearButton} onPress={() => setSelectedFilters([])}>
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
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  cardLocationText: {
    marginLeft: 5,
    color: 'gray',
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 5,
    color: 'black',
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  cardRatingText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  cardReviews: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  sliderContainer: {
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderValue: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  filterList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  selectedFilterItem: {
    backgroundColor: '#00BFFF',
  },
  filterItemText: {
    color: '#00BFFF',
  },
  starRatingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  starButton: {
    margin: 5,
  },
  selectedStarButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
  },
  applyButton: {
    backgroundColor: '#00BFFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#00BFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Menu;
