import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splashscreen from './WelcomeScreens/Splashscreen';
import Screen1 from './WelcomeScreens/Screen1';
import SliderScreen from './WelcomeScreens/Slider';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={Splashscreen} options={{ headerShown: false }} />
                <Stack.Screen name='Slider' component={SliderScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Screen1' component={Screen1} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})