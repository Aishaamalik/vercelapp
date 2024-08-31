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
import VecationDetail from './Drawer/VecationDetail';
import Review from './Drawer/Review';
import GuideProfileScreen from './Drawer/GuideProfile';
import HotelDetailsScreen from './Drawer/HotelDetailScreen';
import MyAddress from './Buttom/MyAddress';
import NewAddress from './Buttom/NewAddress';
import EditProfile from './Buttom/EditProfile';
import MyPayment from './Buttom/MyPayment';
import AddCard from './Buttom/AddCard';
import ChangePassword from './Buttom/ChangePassword';
import ForgetPassword from './Buttom/ForgetPassword';
import SecurityScreen from './Buttom/Security';
import Notifications from './Buttom/Notifications';
import Language from './Buttom/Language';
import help from './Buttom/help';
import legal from './Buttom/legal';
import DrawerNavigator from './Drawer/DrawerNavigator';
import CreateAccountScreen from './src/SignUp';
import SignUpScreen from './src/SignUpWithEmail';
import SignIn from './src/SignIn';
import SignInWithEmail from './src/SignInWithEmail';
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
                <Stack.Screen name='VecationDetails' component={VecationDetail}/>
                <Stack.Screen name='Review' component={Review}/>
                <Stack.Screen name='GuideProfile' component={GuideProfileScreen}/>
                <Stack.Screen name='HotelDetail' component={HotelDetailsScreen}/>
                <Stack.Screen name='My Address' component={MyAddress}/>
                <Stack.Screen name='New Address' component={NewAddress}/>
                <Stack.Screen name='Edit Profile' component={EditProfile}/>
                <Stack.Screen name='My Payment' component={MyPayment}/>
                <Stack.Screen name='Add Card' component={AddCard}/>

                
                <Stack.Screen name='Change Password' component={ChangePassword}/>
                <Stack.Screen name='Forget Password' component={ForgetPassword}/>
                <Stack.Screen name='Security' component={SecurityScreen}/>
                <Stack.Screen name='Notifications' component={Notifications}/>
                <Stack.Screen name='Language' component={Language}/>
                <Stack.Screen name='help' component={help}/>
                <Stack.Screen name='legal' component={legal}/>
                <Stack.Screen name='Drawer' component={DrawerNavigator}/>
                <Stack.Screen name='SignUp' component={CreateAccountScreen}/>
                <Stack.Screen name='SignUpWithEmail' component={SignUpScreen}/>
                <Stack.Screen name='SignIn' component={SignIn}/>
                <Stack.Screen name='SignInWithEmail' component={SignInWithEmail}/>
                





            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;

const styles = StyleSheet.create({});
