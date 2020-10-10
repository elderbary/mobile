import React from 'react';
import {View, Test, StyleSheet} from 'react-native';

const OptionsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Options Screen!</Text>
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

export default OptionsScreen;