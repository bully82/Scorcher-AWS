import React from "react";
import { useEffect } from "react";

import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(awsconfig);

import * as SplashScreen from "expo-splash-screen";
import { Text, StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";

function App() {
  const [fontsLoaded] = useFonts({
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   BottomTab: {
//     flex: 1,
//     justifyContent: "flex-end",
//     //     overflow: "hidden",
//     //     marginTop: StatusBar.currentHeight,
//   },
// });

export default withAuthenticator(App);
