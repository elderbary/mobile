import React from 'react';
import {View, Test, StyleSheet} from 'react-native';

const AddTransactionScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Add Transaction Screen!</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AddTransactionScreen;