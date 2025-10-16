import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Account = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.text}>
          Account Lorem ipsum dolor sit amet consectetur adipisicing elit.{"\n"}
          Accusamus neque porro{"\n"} nisi ab asperiores dolore! {"\n"}
          Assumenda excepturi corrupti {"\n"}fugit veritatis amet {"\n"}
          similique in quaerat{"\n"}repellendus iure,{"\n"} magni cum,{"\n"}
          dicta nulla.Account Lorem ipsum dolor sit amet consectetur adipisicing
          elit. {"\n"}Accusamus neque porro{"\n"} nisi ab asperiores dolore!{" "}
          {"\n"}
          Assumenda excepturi corrupti {"\n"}fugit veritatis amet {"\n"}
          similique in quaerat{"\n"}repellendus iure,{"\n"} magni cum,{"\n"}
          dicta nulla.Account Lorem ipsum dolor sit amet consectetur adipisicing
          elit. {"\n"}Accusamus neque porro{"\n"} nisi ab asperiores dolore!{" "}
          {"\n"}
          Assumenda excepturi corrupti {"\n"}fugit veritatis amet {"\n"}
          similique in quaerat{"\n"}repellendus iure,{"\n"} magni cum,{"\n"}
          dicta nulla.{"\n"}
          Last line
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  text: {
    fontSize: 30,
  },
});

export default Account;
