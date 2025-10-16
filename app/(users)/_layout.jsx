import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const UsersLayout = () => {
    return (
      <Stack>
        <Stack.Screen name="users" />
        <Stack.Screen name="addUser" />
      </Stack>
    );
}

const styles = StyleSheet.create({})

export default UsersLayout;
