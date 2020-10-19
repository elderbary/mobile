import React from 'react';
import {View, Text, StyleSheet, Button,SafeAreaView} from 'react-native';

export default function HomeScreen () {
    return (
        <SafeAreaView style={{backgroundColor: "#4643D3", flex: 1}}>
        <View style={styles.BGTitle}>
            <Text style={styles.Cashe}>zł</Text>
            <Text style={styles.CasheTitle}>2,360</Text>
        </View>
        <View style={styles.bg}> 
            <Text>Eloasd</Text>
        </View>
        </SafeAreaView>
    )
    }

    const styles = StyleSheet.create({
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
        },
    })