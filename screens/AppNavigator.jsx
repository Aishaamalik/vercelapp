import { Settings, StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splashscreen from './WelcomeScreens/Splashscreen';
import Screen1 from './WelcomeScreens/Screen1';
import SliderScreen from './WelcomeScreens/Slider';
import Component from './Drawer/Component';
import ButtomNavigator from './Buttom/ButtomNavigator';
import SettingScreen from './Drawer/SettingScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,

                }}>
                <Stack.Screen name='Splash' component={Splashscreen} options={{ headerShown: false }} />
                <Stack.Screen name='Slider' component={SliderScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Screen1' component={Screen1} options={{ headerShown: false }} />
                <Stack.Screen
                    name='Component'
                    component={Component}
                    options={{
                        headerShown: false,
                        presentation: 'transparentModal'
                    }}
                />
                <Stack.Screen
                    name='Settings'
                    component={SettingScreen}
                    options={{
                        headerShown: false,
                        presentation: 'transparentModal'
                    }}
                />
                <Stack.Screen name='Buttontabs' component={ButtomNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;

const styles = StyleSheet.create({});
