import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function AddTransactionScreen () {
    return (
        <SafeAreaView style={{backgroundColor:"#4643D3", flex:1,}}>
            <View style={styles.Header}>
                <Text style={styles.Title}>Add transaction</Text>
            </View>
            <View style={styles.bg}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Header: {
        height: 100,
    },
    Title: {
        marginLeft: 35,
        fontSize:22,
        color: '#FFF',
        marginTop: 45,
    },
    bg: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopRightRadius:25,
        borderTopLeftRadius: 25,
    }
})