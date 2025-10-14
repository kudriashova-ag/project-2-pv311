import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';

const ThemeView = ({children}) => {
    const scheme = useColorScheme();

    return (
        <View style={[styles.main, { backgroundColor: scheme === 'dark' ? '#222' : 'white' }]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10
    }
})

export default ThemeView;
