import React, { Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import SwitchSelector from "react-native-switch-selector";


export default function AddTransactionScreen ({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor:"#3C3C3E", flex:1,}}>
            <View style={styles.Header}>
            <Text style={styles.Title}>Add Transaction</Text>
            </View>
            <View style={styles.bg}>
                <View style={styles.SwitchView}>
            <SwitchSelector style={styles.SelectorSwitch}
                initial={0}
                onPress={value => alert(value)}
                textColor='#000000'
                selectedColor='#FFF'
                buttonColor='#3C3C3E'
                borderColor='#FFF'
                height={60}
                fontSize={18}
                valuePadding={0}
                borderRadius={20}
                hasPadding
                options={[
                        { label: "Expenses", value: "Expenses", },
                        { label: "Incomes", value: "Incomes", } 
            ]}
/>
</View>
<View style={styles.PlaceHolderView}>
<TextInput  
 style={styles.Input}
 placeholder='0 zł'/>
</View>
<View style={styles.Form}>

</View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Header: {
        marginTop: 50,
        height: 20,
        marginRight: 0,
        marginLeft: 25,
        height: 60,
        flexDirection: 'row',
    },
    Title: {
        fontSize:22,
        color: '#FFF',
    },
    SwitchView: {
        marginTop: 60,
        alignItems: 'center',
    },
    SelectorSwitch: {
        width: 280,
    },
    PlaceHolderView: {
        alignItems: 'center',
        marginTop: 40,
        justifyContent: 'center',
    },
    Input: {
        width: 140,
        height: 90,
        fontSize: 45,
        textAlign: 'center',
    },
    Form: {
        marginTop: 30,
    },
    bg: {
        backgroundColor: '#F3F4F6',
        flex: 1,
        borderTopRightRadius:25,
        borderTopLeftRadius: 25,
    }
});
``