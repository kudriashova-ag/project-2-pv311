import React, { useContext, useEffect } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import UserBlock from "../components/userBlock";
import ThemeProvider from "../providers/themeProvider";
import ThemeContext from "../contexts/themeContext";
import Colors from "../constants/Colors";
import { Provider, useDispatch } from "react-redux";
import { store } from "../store/store";
import { fetchUser } from "../features/auth/authThunk";

const DrawerLayoutContent = () => {
  const { theme } = useContext(ThemeContext);
  const themeColor = Colors[theme];
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(fetchUser());
  }, [])

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
    <Provider store={store}>
      <ThemeProvider>
        <DrawerLayoutContent />
      </ThemeProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
