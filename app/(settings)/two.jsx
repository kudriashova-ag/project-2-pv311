import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThemeView from '../../components/ThemeView';
import ThemeText from '../../components/ThemeText';

const Two = () => {
    return (
      <ThemeView style={{ flex: 1 }}>
        <ThemeText>Two</ThemeText>
      </ThemeView>
    );
}

const styles = StyleSheet.create({})

export default Two;
