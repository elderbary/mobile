import React from 'react';
import {View, Text, StyleSheet, Button,SafeAreaView} from 'react-native';

export default function HomeScreen () {
    return (
        <SafeAreaView style={{backgroundColor: "#4643D3", flex: 1}}>
        <View style={styles.bg}> 
            <Text>Eloasd</Text>
        </View>
        </SafeAreaView>
    )
    }

    const styles = StyleSheet.create({
        bg: {
            backgroundColor: '#FFF',
            flex: 1,
            borderTopRightRadius:25,
            borderTopLeftRadius: 25,
        }
    })