import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const reviews = [
  {
    id: '1',
    name: 'Jhone Kenoady',
    date: '23 Nov 2022',
    rating: 5,
    comment: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    id: '2',
    name: 'Jhone Kenoady 2',
    date: '23 Nov 2022',
    rating: 5,
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
  const renderReview = ({ item }) => (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <Image
          source={require('../Assets/Profile/pic1.jpeg')}
          style={styles.profileImage}
        />
        <View style={styles.reviewHeaderText}>
          <Text style={styles.reviewerName}>{item.name}</Text>
          <Text style={styles.reviewDate}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        {[...Array(item.rating)].map((_, index) => (
          <Icon key={index} name="star" size={16} color="#FFD700" />
        ))}
      </View>
      <Text style={styles.reviewComment}>{item.comment}</Text>
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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review</Text>
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
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  reviewsList: {
    padding: 15,
  },
  reviewContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    color: '#333',
  },
  reviewDate: {
    color: '#888',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  reviewComment: {
    color: '#666',
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
