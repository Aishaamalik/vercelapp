import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

const { height } = Dimensions.get('window');

const TravelScreen = ({ navigation }) => {
  const isDay = useSelector(state => state.theme.isDay);

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDay ? 'white' : '#333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDay ? '#007AFF' : '#555',
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
      color: isDay ? 'black' : 'white',
      marginTop: height * 0.5 + 20,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      marginHorizontal: 20,
      color: isDay ? 'gray' : 'lightgray',
      marginTop: 10,
    },
  });

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <View style={dynamicStyles.header}>
        <Icon 
          name="menu" 
          size={30} 
          color="white" 
          onPress={() => navigation.openDrawer()} 
        />
        <View style={dynamicStyles.headerIcons}>
          <Icon1 name="moon" size={25} color="white" style={dynamicStyles.icon} />
          <Icon name="person-outline" size={25} color="white" onPress={() => navigation.navigate('Buttontabs')} />
        </View>
      </View>
      <Image
        source={require('../Assets/Mainscreen/splash1.webp')} 
        style={dynamicStyles.image}
        resizeMode="cover"
      />
      <Text style={dynamicStyles.title}>Best travel destinations in the world</Text>
      <Text style={dynamicStyles.description}>
        Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id semiru forgive you.
      </Text>
    </SafeAreaView>
  );
};

export default TravelScreen;
