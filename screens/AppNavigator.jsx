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
import Airport from './Categories/Airport';
import Cafe from './Categories/Cafe';
import Camera from './Categories/Camera';
import Hotel from './Categories/Hotel';
import Luggage from './Categories/Luggage';
import Rental from './Categories/Rental';
import Ship from './Categories/Ship';
import Taxi from './Categories/Taxi';
import Villa from './Categories/Villa';
import TourGuideScreen from './Drawer/TourGuide';
import HotelListScreen from './Drawer/Hotellist';
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
                <Stack.Screen name='Airport' component={Airport}/>
                <Stack.Screen name='Cafe' component={Cafe}/>
                <Stack.Screen name='Camera' component={Camera}/>
                <Stack.Screen name='Hotel' component={Hotel}/>
                <Stack.Screen name='Luggage' component={Luggage}/>
                <Stack.Screen name='Rental' component={Rental}/>
                <Stack.Screen name='Ship' component={Ship}/>
                <Stack.Screen name='Taxi' component={Taxi}/>
                <Stack.Screen name='Villa' component={Villa}/>
                <Stack.Screen name='TourGuide' component={TourGuideScreen}/>
                <Stack.Screen name='HotelList' component={HotelListScreen}/>



            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;

const styles = StyleSheet.create({});
