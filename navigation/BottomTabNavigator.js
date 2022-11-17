import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GroupStackNavigator from "./stack-navigators/GroupStack";
import HomeStackNavigator from "./stack-navigators/HomeStack";
import NotificationStackNavigator from "./stack-navigators/NotificationsStack";
import HistoryNavigator from "./stack-navigators/HistoryStack";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#202020",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#e43301",
        tabBarInactiveTintColor: "#ffffff",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
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
            <MaterialCommunityIcons
              name="chat-processing-outline"
              color={color}
              size={22}
            />
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
