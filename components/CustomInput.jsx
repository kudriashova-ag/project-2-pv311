import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomInput = ({ field, form, ...props }) => {
  const hasError =
    form.errors[field.name] &&
    form.initialValues[field.name] != form.values[field.name];
  
  return (
    <View>
      <TextInput
        value={field.value}
        onChangeText={form.handleChange(field.name)}
        style={styles.input}
        placeholder={field.name}
      />
      {hasError && (
        <Text style={{ color: "red" }}>{form.errors[field.name]}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
});

export default CustomInput;
