import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../screens/home";
import History from "../../screens/history";

const Drawer = createDrawerNavigator();

function DrawerRight() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={History} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerRight;
