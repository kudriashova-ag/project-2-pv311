import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ThemeContext from "../contexts/themeContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import ThemeText from "./ThemeText";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "../features/auth/authSlice";

const UserBlock = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(logout())
   }


  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.main}>
        {user && (
          <View>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=1" }}
              style={styles.avatar}
            />
            <ThemeText>{user.name}</ThemeText>
            <Pressable onPress={logoutHandler}><ThemeText>Logout</ThemeText></Pressable>
          </View>
        )}
        <Pressable onPress={toggleTheme}>
          <ThemeText>
            {theme === "light" ? (
              <AntDesign name="moon" size={24} />
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
