import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const reviews = [
  {
    id: '1',
    name: 'Jhone Kenoady',
    date: '23 Nov 2022',
    rating: 1,
    comment: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    images: [
      require('../Assets/visits/ledadubeach.jpeg'),
      require('../Assets/visits/ledadubeach.jpeg'),
      require('../Assets/visits/ledadubeach.jpeg'),
    ],
  },
  {
    id: '2',
    name: 'Jhone Kenoady 2',
    date: '23 Nov 2022',
    rating: 3,
    comment: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    images: [
      require('../Assets/visits/ledadubeach.jpeg'),
      require('../Assets/visits/ledadubeach.jpeg'),
      require('../Assets/visits/ledadubeach.jpeg'),
    ],
  },
  {
    id: '3',
    name: 'Jhone Kenoady 3',
    date: '23 Nov 2022',
    rating: 5,
    comment: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    images: [
      require('../Assets/visits/ledadubeach.jpeg'),
      require('../Assets/visits/ledadubeach.jpeg'),
    ],
  },
];

const ReviewScreen = ({ navigation }) => {
  const isDay = useSelector(state => state.theme.isDay);

  const renderReview = ({ item }) => (
    <View style={[styles.reviewContainer, { backgroundColor: isDay ? '#FFFFFF' : '#333333', borderColor: isDay ? '#E0E0E0' : '#555555' }]}>
      <View style={styles.reviewHeader}>
        <Image
          source={require('../Assets/Profile/pic1.jpeg')}
          style={styles.profileImage}
        />
        <View style={styles.reviewHeaderText}>
          <Text style={[styles.reviewerName, { color: isDay ? '#333333' : '#FFFFFF' }]}>{item.name}</Text>
          <Text style={[styles.reviewDate, { color: isDay ? '#888888' : '#AAAAAA' }]}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        {[...Array(item.rating)].map((_, index) => (
          <Icon key={index} name="star" size={16} color="#FFD700" />
        ))}
      </View>
      <Text style={[styles.reviewComment, { color: isDay ? '#666666' : '#CCCCCC' }]}>{item.comment}</Text>
      {item.images && item.images.length > 0 && (
        <View style={styles.reviewImagesContainer}>
          {item.images.map((image, index) => (
            <Image key={index} source={image} style={styles.reviewImage} />
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDay ? '#F5F5F5' : '#1E1E1E' }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: isDay ? '#FFFFFF' : '#333333' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={isDay ? '#000000' : '#FFFFFF'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#333333' : '#FFFFFF' }]}>Review</Text>
      </View>

      {/* Reviews List */}
      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.reviewsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  reviewsList: {
    padding: 15,
  },
  reviewContainer: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  reviewHeaderText: {
    marginLeft: 15,
  },
  reviewerName: {
    fontSize: 18,
    fontWeight: '600',
  },
  reviewDate: {
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  reviewComment: {
    fontSize: 14,
  },
  reviewImagesContainer: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  reviewImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default ReviewScreen;
