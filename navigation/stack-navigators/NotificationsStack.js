import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home";
import Fixtures from "../../screens/home-fixtures";
import NotoficationScreen from "../../screens/notifications";

const Stack = createNativeStackNavigator();

function NotificationStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Notifications" component={NotoficationScreen} />
    </Stack.Navigator>
  );
}

export default NotificationStackNavigator;
