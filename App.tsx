import { PaperProvider } from "loren-ui";
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import Routers from "./src/components/Router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
