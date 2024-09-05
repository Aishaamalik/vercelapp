import { useSelector} from 'react-redux';
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Liked = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const isDay = useSelector(state => state.theme.isDay); 

  const [likedItems, setLikedItems] = useState(route.params?.likedItems || []);

  useEffect(() => {
    if (!route.params?.likedItems) {
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
    }
  }, [route.params?.likedItems]);

  const toggleFavorite = useCallback((item) => {
    setLikedItems((prevLikedItems) => {
      const isLiked = prevLikedItems.find((likedItem) => likedItem.id === item.id);
      const updatedLikedItems = isLiked
        ? prevLikedItems.filter((likedItem) => likedItem.id !== item.id)
        : [...prevLikedItems, item];
      AsyncStorage.setItem('likedItems', JSON.stringify(updatedLikedItems));

      return updatedLikedItems;
    });
  }, []);
  const renderItem = useCallback(({ item }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: isDay ? '#fff' : '#444', borderColor: isDay ? '#ddd' : '#666' }]} 
      onPress={() => navigation.navigate('VecationDetails', {
        image: item.image,
        title: item.title,
        location: item.location,
        price: item.price,
        rating: item.rating,
        reviews: item.reviews,
      })}
    >
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item)}
      >
        <Icon name="heart" size={20} color={likedItems.some(likedItem => likedItem.id === item.id) ? "red" : "gray"} />
      </TouchableOpacity>
      <Text style={[styles.title, { color: isDay ? '#333' : '#fff' }]}>{item.title}</Text>
      <View style={styles.locationContainer}>
        <Icon name="map-marker" size={14} color={isDay ? 'gray' : '#aaa'} />
        <Text style={[styles.location, { color: isDay ? 'gray' : '#aaa' }]}>{item.location}</Text>
      </View>
      <Text style={[styles.price, { color: isDay ? '#f9a825' : '#ffd700' }]}>{item.price}</Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={14} color="gold" />
        <Text style={[styles.rating, { color: isDay ? '#000' : '#fff' }]}>{item.rating}</Text>
        <Text style={[styles.reviews, { color: isDay ? 'gray' : '#aaa' }]}>({item.reviews})</Text>
      </View>
    </TouchableOpacity>
  ), [likedItems, isDay]);
  
  


  return (
    <View style={[styles.container, { backgroundColor: isDay ? '#f0f0f0' : '#333' }]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color={isDay ? "#333" : "#fff"} />
        </TouchableOpacity>
        <Text style={[styles.header, { color: isDay ? '#333' : '#fff' }]}>My Wishlist</Text>
      </View>
      <FlatList
        data={likedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    paddingRight: 20,
  },
  themeButton: {
    padding: 10,
  },
  list: {
    paddingHorizontal: 15,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 12,
    padding: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
  },
  reviews: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
});

export default Liked;
