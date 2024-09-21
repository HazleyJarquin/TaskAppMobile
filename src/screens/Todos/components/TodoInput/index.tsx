import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles/styles";
import { shallow } from "zustand/shallow";
import React from "react";

import { Button, Input } from "loren-ui";
import { useModalStore } from "../../../../store/useShowModalStore";
import { useTodoStore } from "../../../../store/useTodoStore";
export const TodoInput = () => {
  const [text, setText] = useState("");
  const setShowModal = useModalStore((state) => state.setShowModal, shallow);
  const { addTodo } = useTodoStore(
    (state) => ({ addTodo: state.addTodo }),
    shallow
  );
  const handlePress = () => {
    addTodo({ name: text, isCompleted: false });
    setText("");
    setShowModal(false);
  };

  const handleChangeText = (newText: string) => {
    setText(newText);
  };
  return (
    <View style={styles.container}>
      <Input
        onChangeText={handleChangeText}
        value={text}
        placeholder="Add Todo"
      />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={text.trim() === "" ? styles.buttonDisabled : styles.addButton}
          onPress={handlePress}
          disabled={text.trim() === ""}
          text="Add Todo"
        />
      </View>
    </View>
  );
};
