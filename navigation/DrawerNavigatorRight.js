import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "../screens/about";
import BottomTabNavigator from "./BottomTabNavigator";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeStackNavigator from "./stack-navigators/HomeStack";
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          // headerTintColor: "white",
          height: 50,
        },
        headerTintColor: "#2c2a2b",
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: "Home",
          headerTitle: () => (
            <Image source={require("../assets/images/favicon.png")} />
          ),
          headerRight: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="account"
                color={"black"}
                size={22}
                Icon
                style={{ marginRight: 15 }}
                onPress={() => alert("This is a button!")}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
