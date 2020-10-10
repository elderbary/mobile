import React from 'react';
import {View, Test, StyleSheet} from 'react-native';

const SummaryScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Summary Screen!</Text>
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

export default SummaryScreen;