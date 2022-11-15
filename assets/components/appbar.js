import * as React from "react";
import { Appbar } from "react-native-paper";
import DrawerRight from "./drawer-right";

const AppBar = () => (
  <Appbar.Header>
    <Appbar.Content title="Scorcher" />
    <Appbar.Action icon="information" onPress={() => {}} />
    <Appbar.Action icon="menu" onPress={() => {}} />
  </Appbar.Header>
);

export default AppBar;
