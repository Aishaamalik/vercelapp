import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

const TravelScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon 
          name="menu" 
          size={30} 
          color="white" 
          onPress={() => navigation.openDrawer()} 
        />
        <View style={styles.headerIcons}>
          <Icon name="moon" size={25} color="white" style={styles.icon} />
          <Icon name="person" size={25} color="white" />
        </View>
      </View>
      <Image
        source={require('../Assets/Mainscreen/splash1.webp')} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Best travel destinations in the world</Text>
      <Text style={styles.description}>
        Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id semiru forgive you.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: height * 0.5, 
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    position: 'absolute',
    top: 60, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'black',
    marginTop: height * 0.5 + 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'gray',
    marginTop: 10,
  },
});

export default TravelScreen;
