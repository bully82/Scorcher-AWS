import { DMSans_700Bold } from "@expo-google-fonts/dm-sans";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    flex: 1,
    fontSize: 18,
    useFonts: DMSans_700Bold,
  },
  paragraph: {
    flex: 1,
    fontSize: 12,
  },
  menuItem: {
    fontSize: 10,
  },
});
