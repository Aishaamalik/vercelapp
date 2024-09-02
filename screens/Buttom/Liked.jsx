import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Liked = () => {
  const route = useRoute();
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const loadLikedItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('likedItems');
        if (storedItems) {
          setLikedItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error('Failed to load liked items from storage', error);
      }
    };

    loadLikedItems();
  }, []);

  useEffect(() => {
    const saveLikedItems = async () => {
      try {
        await AsyncStorage.setItem('likedItems', JSON.stringify(likedItems));
      } catch (error) {
        console.error('Failed to save liked items to storage', error);
      }
    };

    if (likedItems.length > 0) {
      saveLikedItems();
    }
  }, [likedItems]);

  const toggleFavorite = (item) => {
    setLikedItems((prevLikedItems) => {
      const isLiked = prevLikedItems.find((likedItem) => likedItem.id === item.id);
      if (isLiked) {
        return prevLikedItems.filter((likedItem) => likedItem.id !== item.id);
      } else {
        return [...prevLikedItems, item];
      }
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item)}
      >
        <Icon name="heart" size={20} color={likedItems.some(likedItem => likedItem.id === item.id) ? "red" : "gray"} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.locationContainer}>
        <Icon name="map-marker" size={14} color="gray" />
        <Text style={styles.location}>{item.location}</Text>
      </View>
      <Text style={styles.price}>{item.price}</Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={14} color="gold" />
        <Text style={styles.rating}>{item.rating}</Text>
        <Text style={styles.reviews}>({item.reviews})</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Wishlist</Text>
      <FlatList
        data={likedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingHorizontal: 15,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  location: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f9a825',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
    color: '#000',
  },
  reviews: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
});

export default Liked;
