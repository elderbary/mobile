import React from 'react';
import {View, Text, StyleSheet, Button,SafeAreaView, Image, TouchableOpacity, useNavigation} from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons'; 


export default function HomeScreen ({ navigation }) {
      return (
        <SafeAreaView style={{backgroundColor: "#4643D3", flex: 1}}>
        <View style={styles.TopSection}>
            <Image style={{width:45, height:45, marginTop: -8,}}
            source={require('../src/images/avatar.png')}
            />
            <Text style={styles.WelcomeName}>Hi, Suzy</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                <SimpleLineIcons name="settings" size={22} color='#FFF' />
            </TouchableOpacity>
        </View>
        <View style={styles.BGTitle}>
            <Text style={styles.Cashe}>zł</Text>
            <Text style={styles.CasheTitle}>2,360</Text>
        </View>
        <View style={styles.bg}> 
            <Text>Eloasd</Text>
        </View>
        </SafeAreaView>
      );
    }
    const styles = StyleSheet.create({
        TopSection: {
            marginTop:50,
            marginLeft:-10,
            marginRight:-10,
            flexDirection:'row',
            justifyContent: 'space-around',
        },
        WelcomeName: {
            fontSize:22,
            color: '#FFF',
        },
        BGTitle: {
            height: 125,
            alignItems: "center",
            flexDirection: 'row',
            justifyContent: 'center',
        },
        Cashe: {
            color: '#FFF',
            marginRight: 3,
            fontSize: 16,
            marginBottom: 40,
        },
        CasheTitle: {
            alignItems: "center",
            color: '#FFF',
            fontSize: 55,
        },
        bg: {
            backgroundColor: '#FFF',
            flex: 1,
            borderTopRightRadius:25,
            borderTopLeftRadius: 25,
        }
    })
