import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThemeView from '../../components/ThemeView';
import ThemeText from '../../components/ThemeText';

const One = () => {
    return (
      <ThemeView style={{ flex: 1 }}>
        <ThemeText>One</ThemeText>
      </ThemeView>
    );
}

const styles = StyleSheet.create({})

export default One;
