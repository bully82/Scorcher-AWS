import React from "react";
import { useEffect } from "react";

import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(awsconfig);

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet } from "react-native";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
//import { AppBar } from "@react-native-material/core";
import { SafeAreaView } from "react-native-safe-area-context";

function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
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
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: "hidden",
  },
});

export default withAuthenticator(App);
