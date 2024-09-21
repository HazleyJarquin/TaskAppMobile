import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { shallow } from "zustand/shallow";
import { IRootStackParamList } from "../../interfaces";
import { useGetAllUsers } from "../../services/getAllUsers.services";
import { useUsersStore } from "../../store/useUsersStore";

export const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<IRootStackParamList>>();
  const { data: UsersData } = useGetAllUsers();
  const { setUsers } = useUsersStore(
    (state) => ({
      setUsers: state.setUsers,
    }),
    shallow
  );

  useEffect(() => {
    if (UsersData?.data) {
      setUsers(UsersData.data);
      navigation.navigate("Users");
    }
  }, [UsersData, setUsers, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/splash.png")}
        resizeMode="cover"
        style={styles.image}
      />
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
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
