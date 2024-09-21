import { View, Text, StyleSheet, BackHandler, FlatList } from "react-native";
import React, { useEffect } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { IRootStackParamList } from "../../interfaces";
import { Button } from "loren-ui";
import { useUsersStore } from "../../store/useUsersStore";
import { shallow } from "zustand/shallow";
import { AnimatedUserProfileBanner } from "../../components/AnimatedUserProfileBanner";

export const Users = () => {
  const { users } = useUsersStore((state) => ({ users: state.users }), shallow);
  const navigation = useNavigation<NavigationProp<IRootStackParamList>>();

  useEffect(() => {
    const handleBackPress = () => {
      navigation.navigate("Home");
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{
          width: "100%",
          padding: 20,
        }}
        data={users}
        keyExtractor={(u) => u.id}
        renderItem={({ item, index }) => (
          <AnimatedUserProfileBanner index={index} users={item} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
