import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";
import { Field, Formik } from "formik";
import CustomInput from "../../components/CustomInput";
import * as Yup from "yup";

const initialValues = {
    name: "Mark",
    email: ""
}

const AddUser = () => {
  return (
    <ThemeView style={{ flex: 1 }}>
      <ThemeText>Add User</ThemeText>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({  }) => (
          <View>
            <Field name="name" component={CustomInput} />
            <Field name="email" component={CustomInput} />
          </View>
        )}
      </Formik>
    </ThemeView>
  );
};

const styles = StyleSheet.create({});

export default AddUser;