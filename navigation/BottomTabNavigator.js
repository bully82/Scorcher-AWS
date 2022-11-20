import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GroupStackNavigator from "./stack-navigators/GroupStack";
import HomeStackNavigator from "./stack-navigators/HomeStack";
import NotificationStackNavigator from "./stack-navigators/NotificationsStack";
import HistoryNavigator from "./stack-navigators/HistoryStack";
import DrawerNavigator from "./DrawerNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarStyle: {
        // backgroundColor: "#000000",
        //},
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#aa00f7",
        tabBarInactiveTintColor: "#2c2a2b",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={DrawerNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupStackNavigator}
        options={{
          tabBarLabel: "Groups",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HistoryStack"
        component={HistoryNavigator}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="NotifciationStack"
        component={NotificationStackNavigator}
        options={{
          tabBarLabel: "Groups",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: "#202020",
    fontSize: 12,
  },
});

export default BottomTabNavigator;
