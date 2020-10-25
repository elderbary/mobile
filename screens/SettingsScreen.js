import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

export default function SettingsScreen () {
    
    return (
        <SafeAreaView style={{backgroundColor:"#4643D3", flex:1,}}>
            <View style={styles.Header}>
                <Text style={styles.Title}>Settings</Text>
            </View>
            <ScrollView style={styles.bg}>
                <View style={styles.Content}>
                <Text style={styles.SectionTitle}>USER</Text>
                <View>
  {
    list.map((item, i) => (
      <ListItem key={i}>
        <ListItem.Content style={{marginTop: 10, marginRight: 30, height: 50, marginLeft: -5, backgroundColor: '#FFF', borderWidth: 2, }}>
          <ListItem.Title style={{fontSize: 17, marginLeft: 15,}}>{item.title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const list = [
    {
      title: 'Name',
    },
    {
      title: 'Avatar',
    },
  ];

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