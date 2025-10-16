import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";
import { Field, Formik } from "formik";
import CustomInput from "../../components/CustomInput";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(15).required(),
  email: Yup.string().email().required(),
});

const AddUser = () => {

    const createUser = async (values) => { 
        axios.post('https://jsonplaceholder.typicode.com/users', values)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

  return (
    <ThemeView style={{ flex: 1 }}>
      <ThemeText>Add User</ThemeText>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => createUser(values)}
      >
        {({ handleSubmit }) => (
          <View>
            <Field name="name" component={CustomInput} />
            <Field name="email" component={CustomInput} />
            <Pressable onPress={handleSubmit}>
              <Text>Submit</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </ThemeView>
  );
};

const styles = StyleSheet.create({});

export default AddUser;
