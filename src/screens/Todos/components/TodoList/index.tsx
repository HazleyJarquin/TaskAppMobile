import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { shallow } from "zustand/shallow";
import { TodoItem } from "../TodoItem";
import { useTodoStore } from "../../../../store/useTodoStore";

export const TodoList = () => {
  const { todos } = useTodoStore((state) => ({ todos: state.todos }), shallow);

  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <View style={styles.noTodosContainer}>
          <Text style={{ color: "#FF7043", fontSize: 60, fontWeight: "bold" }}>
            All tasks done, congrats
          </Text>
        </View>
      ) : (
        <FlatList
          style={{
            width: "100%",
            height: "50%",
          }}
          data={todos}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TodoItem todo={item} index={index} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  modalContainer: {
    width: "90%",
    height: "40%",
    backgroundColor: "#D9D9D9",
    margin: "auto",
    borderRadius: 10,
  },
  noTodosContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
});
