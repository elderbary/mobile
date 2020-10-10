import React from 'react';
import {View, Test, StyleSheet} from 'react-native';

const TransactionsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Transactions Screen!</Text>
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

export default TransactionsScreen;