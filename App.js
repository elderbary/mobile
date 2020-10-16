import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';



import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import Home from './screens/HomeScreen';
import Transactions from './screens/TransactionScreen';
import CryptoIndex from './screens/CryptoIndexScreen';
import Summary from './screens/SummaryScreen';


const Tab = createMaterialBottomTabNavigator();

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
    <Tab.Navigator 
    initialRouteName="Home"
    initialRouteName="Feed"
    activeColor="#4643D3"
    inactiveColor= "#676767"
    style={{ backgroundColor: 'white' }}>
      <Tab.Screen
       name="Home"
       component={Home}
       options={{
        tabBarLabel: 'Home',
        tabBarColor: "#FFFFFF",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
       />
      <Tab.Screen
       name="Transactions"
        component={Transactions}
        options={{
          tabBarLabel: 'Transactions',
          tabBarColor: "#FFFFFF",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
      <Tab.Screen
       name="CryptoIndex"
      component={CryptoIndex}
        options={{
          tabBarLabel: 'Crypto Index',
          tabBarColor: "#FFFFFF",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
      <Tab.Screen 
      name="Summary"
       component={Summary}
       options={{
        tabBarLabel: 'Summary ',
        tabBarColor: "#FFFFFF",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
       />
    </Tab.Navigator>
  </NavigationContainer>
  );
}