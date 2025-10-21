import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ThemeContext from "../contexts/themeContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import ThemeText from "./ThemeText";
import { useSelector } from "react-redux";


const UserBlock = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {user} = useSelector(state => state.auth)

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.main}>
        <View>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=1" }}
            style={styles.avatar}
          />
          <ThemeText>{user?.name}</ThemeText>
        </View>
        <Pressable onPress={toggleTheme}>
          <ThemeText>
            {theme === "light" ? (
              <AntDesign name="moon" size={24}  />
            ) : (
              <AntDesign name="sun" size={24} />
            )}
          </ThemeText>
        </Pressable>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  main: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default UserBlock;
