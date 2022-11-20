import { Text, StatusBar } from "react-native";
import GlobalStyle from "../Styles/GlobalStyle";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text style={[GlobalStyle.CustomFont]}>Game Modes</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
