import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Languages from "../Screens/ProgrammingLanguage/Languages"
import ItemContainer from "../Screens/ItemContainer/ItemContainer"

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Teoria" component={Languages} />
      <HomeStack.Screen name="TeoriaContenedor" component={ItemContainer} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;