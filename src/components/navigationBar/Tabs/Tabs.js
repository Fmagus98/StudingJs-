import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeoryStackScreen from "../Stacks/TeoryStackScreen"
import ChallengeStackScreen from "../Stacks/ChallengeStackScreen"
import { NavigationContainer } from "@react-navigation/native";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Teoria" component={TeoryStackScreen} />
        <Tab.Screen name="Desafios" component={ChallengeStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;