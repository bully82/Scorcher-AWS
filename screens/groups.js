import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function GroupScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Button
        title="League Fixtures"
        onPress={() => navigation.navigate("MyGroups")}
      />
      <Text>list of groups and national league</Text>
    </SafeAreaView>
  );
}

export default GroupScreen;
