import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import { useSelector } from 'react-redux';


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
    const isDay = useSelector(state => state.theme.isDay);

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
                selectedFilters.includes(item.label) && styles.selectedFilterItem(isDay),
            ]}
            onPress={() => toggleFilter(item.label)}
        >
            <Text style={styles.filterItemText(isDay)}>{item.label}</Text>
        </TouchableOpacity>
    );
  
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card(isDay)} onPress={() => handlePress(item)}>
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
            <View style={styles.cardContent(isDay)}>
                <Text style={styles.cardTitle(isDay)}>{item.name}</Text>
                <View style={styles.cardLocation(isDay)}>
                    <Ionicons name="location-outline" size={16} color="gray" />
                    <Text style={styles.cardLocationText(isDay)}>{item.location}</Text>
                </View>
                <Text style={styles.cardPrice(isDay)}>{item.price}</Text>
                <View style={styles.cardRating(isDay)}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.cardRatingText(isDay)}>{item.rating}</Text>
                    <Text style={styles.cardReviews(isDay)}>({item.reviews})</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container(isDay)}>
            <View style={styles.header(isDay)}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={isDay ? '#000' : '#fff'} />
                </TouchableOpacity>
                <Text style={styles.headerTitle(isDay)}>Search Destination</Text>
            </View>

            <View style={styles.searchContainer(isDay)}>
                <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput(isDay)}
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Ionicons name="options-outline" size={20} color="#888" />
                </TouchableOpacity>
            </View>

            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton(isDay)}>
                    <MaterialIcons name="date-range" size={20} color="#888" />
                    <Text style={styles.filterText(isDay)}>Date</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton(isDay)}>
                    <Ionicons name="location-outline" size={20} color="#888" />
                    <Text style={styles.filterText(isDay)}>Location</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.recommendationHeader}>
                <Text style={styles.recommendationTitle(isDay)}>Recommendation</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAllText(isDay)}>See All</Text>
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
                    <View style={styles.modalContent(isDay)}>
                        <Text style={styles.modalTitle(isDay)}>Filter</Text>
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
                        <Text style={styles.sectionTitle(isDay)}>Popular Filters</Text>
                        <FlatList
                            data={popularFilters}
                            renderItem={renderFilterItem}
                            keyExtractor={(item) => item.id}
                            horizontal={false}
                            numColumns={2}
                            contentContainerStyle={styles.filterList}
                        />
                        <Text style={styles.sectionTitle(isDay)}>Star Rating</Text>
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
                        <TouchableOpacity style={styles.applyButton(isDay)} onPress={applyFilters}>
                            <Text style={styles.applyButtonText}>Apply Filter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clearButton} onPress={() => {
                            setSelectedFilters([]);
                            setSelectedRatings([]);
                            setSliderValue(0);
                            setFilteredDestinations(destinations);
                            setModalVisible(false);
                        }}>
                            <Text style={styles.clearButtonText}>Clear All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: (isDay) => ({
        flex: 1,
        backgroundColor: isDay ? '#fff' : '#000',
        paddingHorizontal: 20,
        paddingTop: 40,
    }),
    header: (isDay) => ({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    }),
    headerTitle: (isDay) => ({
        fontSize: 20,
        fontWeight: 'bold',
        color: isDay ? '#000' : '#fff',
    }),
    searchContainer: (isDay) => ({
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: isDay ? '#f0f0f0' : '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    }),
    searchInput: (isDay) => ({
        flex: 1,
        fontSize: 16,
        color: isDay ? '#000' : '#fff',
    }),
    searchIcon: {
        marginRight: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    filterButton: (isDay) => ({
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: isDay ? '#e0e0e0' : '#555',
        borderRadius: 8,
        padding: 10,
    }),
    filterText: (isDay) => ({
        marginLeft: 10,
        color: isDay ? '#000' : '#fff',
    }),
    recommendationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    recommendationTitle: (isDay) => ({
        fontSize: 18,
        fontWeight: 'bold',
        color: isDay ? '#000' : '#fff',
    }),
    seeAllText: (isDay) => ({
        color: isDay ? '#00BFFF' : '#1E90FF',
    }),
    card: (isDay) => ({
        flex: 1,
        margin: 10,
        backgroundColor: isDay ? '#fff' : '#333',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
    }),
    cardImage: {
        width: '100%',
        height: 150,
    },
    favoriteButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    cardContent: (isDay) => ({
        padding: 10,
    }),
    cardTitle: (isDay) => ({
        fontSize: 16,
        fontWeight: 'bold',
        color: isDay ? '#000' : '#fff',
    }),
    cardLocation: (isDay) => ({
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    }),
    cardLocationText: (isDay) => ({
        marginLeft: 5,
        color: isDay ? '#000' : '#ccc',
    }),
    cardPrice: (isDay) => ({
        fontSize: 14,
        fontWeight: 'bold',
        color: isDay ? '#000' : '#fff',
    }),
    cardRating: (isDay) => ({
        flexDirection: 'row',
        alignItems: 'center',
    }),
    cardRatingText: (isDay) => ({
        marginLeft: 5,
        color: isDay ? '#000' : '#fff',
    }),
    cardReviews: (isDay) => ({
        marginLeft: 5,
        color: isDay ? '#888' : '#aaa',
    }),
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: (isDay) => ({
        width: '90%',
        backgroundColor: isDay ? '#fff' : '#333',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    }),
    modalTitle: (isDay) => ({
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: isDay ? '#000' : '#fff',
    }),
    sliderContainer: {
        width: '100%',
        marginBottom: 20,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    sliderValue: {
        textAlign: 'center',
        marginVertical: 10,
    },
    sectionTitle: (isDay) => ({
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: isDay ? '#000' : '#fff',
    }),
    filterList: {
        marginBottom: 20,
    },
    filterItem: {
        padding: 10,
        borderRadius: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selectedFilterItem: (isDay) => ({
        backgroundColor: isDay ? '#00BFFF' : '#1E90FF',
        borderColor: isDay ? '#00BFFF' : '#1E90FF',
    }),
    filterItemText: (isDay) => ({
        color: isDay ? '#000' : '#fff',
    }),
    starRatingContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    starButton: {
        margin: 5,
    },
    selectedStarButton: {
        borderWidth: 2,
        borderColor: '#FFD700',
    },
    applyButton: (isDay) => ({
        backgroundColor: isDay ? '#00BFFF' : '#1E90FF',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    }),
    applyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    clearButton: {
        backgroundColor: '#ff4d4d',
        borderRadius: 8,
        padding: 10,
    },
    clearButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default SearchDestinationScreen;
