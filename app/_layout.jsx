import React, { useContext } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import UserBlock from "../components/userBlock";
import ThemeProvider from "../providers/themeProvider";
import ThemeContext from "../contexts/themeContext";
import Colors from "../constants/Colors";

const DrawerLayoutContent = () => {
  const { theme } = useContext(ThemeContext);
  const themeColor = Colors[theme];

  return (
    <Drawer
      drawerContent={(props) => <UserBlock {...props} />}
      screenOptions={{
        drawerActiveTintColor: "#874040ff",
        drawerStyle: { backgroundColor: themeColor.bgColor },
        drawerLabelStyle: {
          color: themeColor.textColor,
        },
        headerStyle: { backgroundColor: themeColor.bgColor },
        headerTitleStyle: { color: themeColor.textColor },
        headerTintColor: themeColor.textColor,
      }}
    >
      <Drawer.Screen name="home" options={{ title: "Home" }} />
      <Drawer.Screen name="account" options={{ title: "Account" }} />
      <Drawer.Screen name="(users)" options={{ title: "Users" }} />
      <Drawer.Screen name="(settings)" options={{ title: "Settings" }} />
      <Drawer.Screen
        name="bookDetails"
        options={{
          drawerItemStyle: { display: "none" }, // приховати з меню
        }}
      />
    </Drawer>
  );
};

const RootLayout = () => {
  return (
    <ThemeProvider>
      <DrawerLayoutContent />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
