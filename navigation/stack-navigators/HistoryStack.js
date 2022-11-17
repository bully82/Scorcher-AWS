import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HistoryScreen from "../../screens/history";

const Stack = createNativeStackNavigator();

function HistoryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  );
}

export default HistoryNavigator;
