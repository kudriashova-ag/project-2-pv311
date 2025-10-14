import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ThemeView from '../components/ThemeView';
import ThemeText from '../components/ThemeText';

const Account = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
          <ThemeText style={{ fontSize: 40 }}>
            Account Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            {"\n"}Accusamus neque porro{"\n"} nisi ab asperiores dolore! {"\n"}
            Assumenda excepturi corrupti {"\n"}fugit veritatis amet {"\n"}
            similique in quaerat{"\n"}repellendus iure,{"\n"} magni cum,{"\n"}{" "}
            dicta nulla.Account Lorem ipsum dolor sit amet consectetur
            adipisicing elit. {"\n"}Accusamus neque porro{"\n"} nisi ab
            asperiores dolore! {"\n"}
            Assumenda excepturi corrupti {"\n"}fugit veritatis amet {"\n"}
            similique in quaerat{"\n"}repellendus iure,{"\n"} magni cum,{"\n"}{" "}
            dicta nulla.Account Lorem ipsum dolor sit amet consectetur
            adipisicing elit. {"\n"}Accusamus neque porro{"\n"} nisi ab
            asperiores dolore! {"\n"}
            Assumenda excepturi corrupti {"\n"}fugit veritatis amet {"\n"}
            similique in quaerat{"\n"}repellendus iure,{"\n"} magni cum,{"\n"}{" "}
            dicta nulla.{"\n"}
            Last line
          </ThemeText>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Account;
