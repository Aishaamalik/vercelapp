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
          color={item.favorite ? 'red' : 'black'}
        />
      </TouchableOpacity>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <View style={styles.cardLocation}>
        <Icon name="location-outline" size={16} color="black" />
        <Text style={styles.cardLocationText}>{item.location}</Text>
      </View>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <View style={styles.cardRating}>
        <Icon name="star" size={16} color="#f9a825" />
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
                minimumTrackTintColor="#E0A75E"
                maximumTrackTintColor="#C0C0C0"
                onValueChange={(value) => setSliderValue(value)}
                value={sliderValue}
              />
              <Text style={styles.sliderValue}>${sliderValue.toFixed(2)} -1000$</Text>
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
                  <Icon name="star" size={20} color={selectedRating === rating ? '#ffd700' : '#d3d3d3'} />
                </TouchableOpacity>
              ))}
            </View>


            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearButton}>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  contentContainer: {
    paddingVertical: 10,
  },
  card: {
    width: '48%',
    height: 300,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    color: 'black',
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardLocationText: {
    marginLeft: 5,
    color: 'black',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardRatingText: {
    marginLeft: 5,
    color: 'black',
  },
  cardReviews: {
    marginLeft: 5,
    color: 'black',
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sliderContainer: {
    marginVertical: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderValue: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  modalContainer: {
    flex: 1,
    justifyContent:'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  priceRangeText: {
    textAlign: 'center',
    marginTop: 10,
  },
  filterList: {
    marginTop: 10,
  },
  filterItem: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    margin: 5,
  },
  selectedFilterItem: {
    borderColor: '#1fb28a',
    backgroundColor: '#e0f7f3',
  },
  filterItemText: {
    fontSize: 14,
  },
  starRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  starButton: {
    padding: 10,
  },
  selectedStarButton: {
    backgroundColor: '#e0f7f3',
    borderRadius: 20,
  },
  applyButton: {
    backgroundColor: '#1fb28a',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  clearButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  clearButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Menu;
