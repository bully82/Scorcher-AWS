import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../../screens/about";

const Stack = createNativeStackNavigator();

function AboutStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default AboutStackNavigator;
