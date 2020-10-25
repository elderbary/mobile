import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

export default function SettingsScreen () {
    return (
        <SafeAreaView style={{backgroundColor:"#4643D3", flex:1,}}>
            <View style={styles.Header}>
                <Text style={styles.Title}>Settings</Text>
            </View>
            <ScrollView style={styles.bg}>
                <View style={styles.Content}>
                <Text style={styles.SectionTitle}>USER</Text>
                </View>
            </ScrollView>
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
    },
    Content: {
        marginTop: 20,
        marginLeft: 35,
    },
    SectionTitle: {
        fontSize: 13,
        color: 'lightgrey',
        marginTop: 10,
    },
})