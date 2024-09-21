import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { IRootStackParamList } from "../../interfaces";
import { Button } from "loren-ui";
import { useUsersStore } from "../../store/useUsersStore";
import { shallow } from "zustand/shallow";

export const Home = () => {
  const navigation = useNavigation<NavigationProp<IRootStackParamList>>();
  const { users } = useUsersStore((state) => ({ users: state.users }), shallow);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Task App</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          text="Todos"
          mode="contained-tonal"
          onPress={() => navigation.navigate("Todos")}
          contentStyle={{ width: "100%", height: 60 }}
        />
        <Button
          text="Users"
          mode="outlined"
          onPress={() =>
            users.length > 0
              ? navigation.navigate("Users")
              : navigation.navigate("SplashScreen")
          }
          contentStyle={{ width: "100%", height: 60 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF7043",
  },
  logoContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    gap: 10,
  },
  logoText: {
    fontSize: 40,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
