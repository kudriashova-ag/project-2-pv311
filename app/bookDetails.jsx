import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThemeText from '../components/ThemeText';
import ThemeView from '../components/ThemeView';

const BookDetails = () => {
    const book = useLocalSearchParams();
    return (
      <ThemeView style={{ flex: 1 }}>
        <ThemeText>
          {book.title} - {book.author}
        </ThemeText>
      </ThemeView>
    );
}

const styles = StyleSheet.create({})

export default BookDetails;
