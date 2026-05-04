import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LearnScreen from "./screens/LearnScreen";
import QuizScreen from "./screens/QuizScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
