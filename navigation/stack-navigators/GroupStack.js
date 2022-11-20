import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroupScreen from "../../screens/groups";
import MyGroups from "../../screens/groups-mygroups";

const Stack = createNativeStackNavigator();

function GroupStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Groups"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Groups"
        component={GroupScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="MyGroups"
        component={MyGroups}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default GroupStackNavigator;
