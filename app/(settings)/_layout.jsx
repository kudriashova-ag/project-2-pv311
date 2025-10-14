import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import One from './one';
import Two from './two';

const Tab = createMaterialTopTabNavigator();

const SettingsLayout = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="one" component={One} options={{ title: 'One' }} />
            <Tab.Screen name="two" component={Two} options={{ title: 'Two' }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default SettingsLayout;
