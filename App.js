import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import Home from './screens/HomeScreen';
import Transactions from './screens/TransactionScreen';


const Tab = createBottomTabNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });
}


export default function App () {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
    <AppLoading  startAsync={fetchFonts} 
    onFinish={() => setFontLoaded(true)}
    />
    );
}


  return (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}