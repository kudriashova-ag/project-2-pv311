import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const UserBlock = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.main}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=1" }}
          style={styles.avatar}
        />
        <Text>UserBlock</Text>
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
    backgroundColor: "#e1e1e1",
    padding: 10,
  },
});

export default UserBlock;
