import React from "react";
import { StyleSheet, View } from "react-native";
import { TodoInput } from "../../../TodoInput";

export const AddTodoModalChildren = () => {
  return (
    <View style={styles.container}>
      <TodoInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
