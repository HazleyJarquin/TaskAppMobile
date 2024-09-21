import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#ffffff",
  },
  addButton: {
    backgroundColor: "#201F1F",
    padding: 3,
  },
  buttonDisabled: {
    backgroundColor: "#201F1F",
    opacity: 0.8,
    padding: 3,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
