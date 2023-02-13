import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Languages from "../Screens/ProgrammingLanguage/Languages"
import ItemContainer from "../Screens/ItemContainer/ItemContainer";

const SettingsStackScreen = () => {
  const SettingsStack = createNativeStackNavigator();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Desafios" component={Languages} />
      <SettingsStack.Screen name="JavascriptDesafio" component={ItemContainer}/>
      <SettingsStack.Screen name="ReactJs" component={ItemContainer}/>
      <SettingsStack.Screen name="React Native" component={ItemContainer}/>

    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;