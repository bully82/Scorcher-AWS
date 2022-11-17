import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroupScreen from "../../screens/groups";
import MyGroups from "../../screens/groups-mygroups";

const Stack = createNativeStackNavigator();

function GroupStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Groups" component={GroupScreen} />
      <Stack.Screen name="MyGroups" component={MyGroups} />
    </Stack.Navigator>
  );
}

export default GroupStackNavigator;
