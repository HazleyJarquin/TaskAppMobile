import React from "react";
import { View, StyleSheet } from "react-native";
import { TodoList } from "./components/TodoList";
import { IconButton, Modal } from "loren-ui";
import { useModalStore } from "../../store/useShowModalStore";
import { shallow } from "zustand/shallow";
import { AddTodoModalChildren } from "./components/TodoList/components/AddTodoModalChildren";

export const Todos = () => {
  const { showModal, setShowModal } = useModalStore(
    (state) => ({
      showModal: state.showModal,
      setShowModal: state.setShowModal,
    }),
    shallow
  );
  return (
    <View style={styles.container}>
      {showModal && (
        <Modal
          onIconClosePress={() => setShowModal(false)}
          visible={showModal}
          children={<AddTodoModalChildren />}
          title="Add Todo"
        />
      )}
      <TodoList />
      <IconButton
        style={styles.addButtonContainer}
        icon="plus"
        type="AntDesign"
        color="#fff"
        onPress={() => setShowModal(true)}
        size={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#FF7043",
  },
});
