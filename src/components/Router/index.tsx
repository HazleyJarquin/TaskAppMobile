import React from "react";
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { IRootStackParamList } from "../../interfaces";
import { SplashScreen } from "../../screens/SplashScreen";
import { Home } from "../../screens/Home";
import { Todos } from "../../screens/Todos";
import { Users } from "../../screens/Users";
import { IconButton } from "loren-ui";

const Stack = createNativeStackNavigator<IRootStackParamList>();

export default function Routers() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="SplashScreen"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Todos"
          options={{
            gestureEnabled: false,
            headerShown: true,
            headerStyle: { backgroundColor: "#FF7043" },
            headerTintColor: "#FFFFFF",
            headerLeft: () => {
              const navigation =
                useNavigation<NavigationProp<IRootStackParamList>>();
              return (
                <IconButton
                  style={{ backgroundColor: "transparent" }}
                  icon="left"
                  color="#FFFFFF"
                  type="AntDesign"
                  onPress={() => navigation.navigate("Home")}
                />
              );
            },
          }}
          component={Todos}
        />
        <Stack.Screen
          name="Users"
          options={{
            gestureEnabled: false,
            headerShown: true,
            headerStyle: { backgroundColor: "#FF7043" },
            headerTintColor: "#FFFFFF",
            headerLeft: () => {
              const navigation =
                useNavigation<NavigationProp<IRootStackParamList>>();
              return (
                <IconButton
                  style={{ backgroundColor: "transparent" }}
                  icon="left"
                  color="#FFFFFF"
                  type="AntDesign"
                  onPress={() => navigation.navigate("Home")}
                />
              );
            },
          }}
          component={Users}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
