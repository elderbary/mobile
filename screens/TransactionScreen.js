import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

import { EvilIcons } from '@expo/vector-icons'; 

export default function TransactionScreen ({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor:"#4643D3", flex:1,}}>
            <View style={styles.SearchButton}>
            <TouchableOpacity style={styles.Search} onPress={() => navigation.navigate('SearchScreen')}>
                 <EvilIcons name="search" size={32} color='#FFF' />
            </TouchableOpacity>
            </View>
            <View style={styles.Header}>
                <Text style={styles.Title}>Price</Text>
            </View>
            <View style={styles.bg}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SearchButton: {
        marginTop: 50,
        height: 20,
        marginRight: 32.5,
    },
    Search: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    Header: {
        height: 120,
    },
    Title: {
        marginLeft: 35,
        fontSize:22,
        color: '#FFF',
        marginTop: 25,
    },
    bg: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopRightRadius:25,
        borderTopLeftRadius: 25,
    }
})