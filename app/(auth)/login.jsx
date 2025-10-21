import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ThemeView from "../../components/ThemeView";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import CustomInput from "../../components/CustomInput";
import { useDispatch } from "react-redux";
import {loginUser} from "../../features/auth/authThunk";


const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Login = () => {
    const dispatch = useDispatch();

  const handleSubmit = (values) => {
      dispatch(loginUser(values));
    
      
  };

  return (
    <ThemeView style={{ flex: 1, padding: 20 }}>
      <Text>Login</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({handleSubmit}) => (
          <View>
            <Field name="email" component={CustomInput} />
            <Field name="password" component={CustomInput} />
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

export default Login;
