import React from "react";
//import { StyleSheet, Text, View } from "react-native";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(awsconfig);

import { NavigationContainer } from "@react-navigation/native";
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//import Groups from "./screens/groups";
//import Home from "./screens/home";
//import History from "./screens/results";
import MyTabs from "./TabNavigator";

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
