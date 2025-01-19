import { FontAwesome } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import Drawer from "expo-router/drawer";
import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="leaderboard" />
    </Stack>
  );
};

export default RootLayout;
