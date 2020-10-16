import React from 'react';
import {SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';

export default class HomeScreen extends React.Component{

    render() {
        return(
            <SafeAreaView style={{backgroundColor:'#4643D3'}}>
                <View style={{
                backgroundColor:"#4643D3",
                height:220,
                flexDirection:"row",
            }}>
            <View style={{
                marginTop: 50,
                marginHorizontal: 25,
                }}>
                <Image source={require('../src/images/avatar.png')} 
                style={{
                width: 45,
                height: 45,
                resizeMode: 'contain',
                }}/>
            </View>
            <View style={{
                alignItems:"center",
                marginTop: 50, 
            }}>
            <Text>
                Hi, Suzy
            </Text>
            </View>

            <View>
                <Image source={require('../src/images/settings.png')}/>
            </View>
          </View>

          <View style={{
                backgroundColor:"#fff",
                height:'100vh',
                borderTopRightRadius:30,
                borderTopLeftRadius:30,
            }}>

          </View>
            </SafeAreaView>

        )
    }
}