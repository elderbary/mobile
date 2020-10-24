import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image } from 'react-native';

import Home from '../screens/HomeScreen';
import Transactions from '../screens/TransactionScreen';
import CryptoIndex from '../screens/CryptoIndexScreen';
import Summary from '../screens/SummaryScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import Search from '../screens/SearchScreen';

import Icon from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import SearchScreen from '../screens/SearchScreen';



const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor:'#4643D3',
                inactiveTintColor:'#676767',
                style:{
                    height:65,
                    justifyContent:'center',
                    paddingVertical:5,
                    backgroundColor:'#FFF',
                    elevation:2,
                    borderRightColor:"#FFF",
    
                }
            }}
        >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:({color,size})=>(
                            <MaterialCommunityIcons name="home-outline" size={30} color={color}/>
                        )
                    }}
                />
                 <Tab.Screen
                    name='Transactions'
                    component={Transactions}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:({color,size})=>(
                            <MaterialIcons name="attach-money" size={30} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name='AddTransactionScreen'
                    component={AddTransactionScreen}
                    options={{
                        tabBarLabel:'', 
                        tabBarIcon:({color,size})=>(
                            <Icon name="ios-add-circle" size={70} color="#FF7D3B" />

                        )
                    }}
                />
                 <Tab.Screen
                    name='CryptoIndex'
                    component={CryptoIndex}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:({color,size})=>(
                            <FontAwesome name="exchange" size={25} color={color} />
                        )
                    }}
                />
                 <Tab.Screen
                    name='Summary'
                    component={Summary}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:({color,size})=>(
                            <Feather name="pie-chart" size={28} color={color} />
                        )
                    }}
                />
        </Tab.Navigator>
    );
};
const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false,
};

const ChatStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
            name='Home' 
            component={BottomTabNavigator}
            />
            <Stack.Screen 
            name='SearchScreen' 
            component={SearchScreen}
            />
        </Stack.Navigator>
    )
}

export default ChatStackNavigator;