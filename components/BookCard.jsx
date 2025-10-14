import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import ThemeText from "./ThemeText";
import { useRouter } from "expo-router";

const BookCard = ({ book }) => {
  const router = useRouter();
  return (
    <View>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "bookDetails",
            params: book,
          })
        }
      >
        <Image
          source={{ uri: book.cover }}
          style={{ width: 200, height: 150 }}
        />
        <ThemeText>{book.title}</ThemeText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookCard;
