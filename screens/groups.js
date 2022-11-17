import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function GroupScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Group</Text>
      <Button
        title="League Fixtures"
        onPress={() => navigation.navigate("MyGroups")}
      />
    </SafeAreaView>
  );
}

export default GroupScreen;
