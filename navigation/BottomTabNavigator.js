import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import GroupStackNavigator from "./stack-navigators/GroupStack";
import HomeStackNavigator from "./stack-navigators/HomeStack";
import NotificationStackNavigator from "./stack-navigators/NotificationsStack";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={30} color={focused ? "#551E18" : "#000"} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>,
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="bed" size={30} color={focused ? "#551E18" : "#000"} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Book Room</Text>,
        }}
      />
      <Tab.Screen
        name="ContactStack"
        component={NotificationStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="phone" size={30} color={focused ? "#551E18" : "#000"} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Contact Us</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: "#292929",
    fontSize: 12,
  },
});

export default BottomTabNavigator;
