import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import DrawerNavigator from '../Drawer/DrawerNavigator';

const HomeTabNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate('Overview'); 
  }, [navigation]);

  return <DrawerNavigator />;
};

export default HomeTabNavigator;
