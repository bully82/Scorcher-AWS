import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../Styles/GlobalStyle";

function ProfileScreen() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
}

export default ProfileScreen;
