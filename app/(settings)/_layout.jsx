import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import One from "./one";
import Two from "./two";
import ThemeContext from "../../contexts/themeContext";
import Colors from "../../constants/Colors";

const Tab = createMaterialTopTabNavigator();

const SettingsLayout = () => {
  const { theme } = useContext(ThemeContext);
  const themeColor = Colors[theme];
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: themeColor.bgColor,
        },
        tabBarActiveTintColor: themeColor.textColor, 
        tabBarInactiveTintColor: "#aaa", 
        tabBarIndicatorStyle: {
          backgroundColor: Colors.primary,
          height: 2,
        },
      }}
    >
      <Tab.Screen name="one" component={One} options={{ title: "One" }} />
      <Tab.Screen name="two" component={Two} options={{ title: "Two" }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default SettingsLayout;
