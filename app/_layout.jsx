import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import UserBlock from '../components/userBlock';

const RootLayout = () => {
    const schema = useColorScheme();

    return (
      <Drawer
        drawerContent={(props) => <UserBlock {...props} />}
        screenOptions={{
            drawerActiveTintColor: "#874040ff",
            drawerStyle: { backgroundColor: schema === "dark" ? "#333" : "#fff" },
            drawerLabelStyle: {
                color: schema === "dark" ? "#fff" : "#333",
            },
        }}
      >
        <Drawer.Screen name="home" options={{ title: "Home" }} />
        <Drawer.Screen name="account" options={{ title: "Account" }} />
        <Drawer.Screen name="(settings)" options={{ title: "Settings" }} />
      </Drawer>
    );
}

const styles = StyleSheet.create({})

export default RootLayout;
