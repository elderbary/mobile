import React from 'react';
import {View, Test, StyleSheet} from 'react-native';

const CryptoIndexScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The CryptoIndex Screen!</Text>
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

export default CryptoIndexScreen;