import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Feather";

import BottomTabNavigator from "./BottomTabNavigator";
import HomeStackNavigator from "./stack-navigators/HomeStack";
import AboutStackNavigator from "./stack-navigators/AboutStack";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {Object.entries(props.descriptors).map(([key, descriptor], index) => {
        const focused = index === props.state.index;
        return (
          <DrawerItem
            key={key}
            label={() => (
              <Text
                style={focused ? styles.drawerLabelFocused : styles.drawerLabel}
              >
                {descriptor.options.title}
              </Text>
            )}
            onPress={() =>
              descriptor.navigation.navigate(descriptor.route.name)
            }
            style={[
              styles.drawerItem,
              focused ? styles.drawerItemFocused : null,
            ]}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#202020",
          height: 50,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}
          >
            <Icon2 name="info" size={22} color="#fff" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{
          headerTitleAlign: "center",
          title: "Home",
          headerTitle: () => (
            <Image source={require("../assets/images/favicon.png")} />
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <Icon name="bars" size={22} color="#fff" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          title: "About",
          headerTitle: () => <Text style={styles.headerTitle}>About</Text>,
        }}
      />
      <Drawer.Screen
        name="LocationsStack"
        component={HomeStackNavigator}
        options={{
          title: "Locations",
          headerTitle: () => (
            <Text style={styles.headerTitle}>Our Locations</Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: "#551E18",
    fontWeight: "500",
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  drawerItemFocused: {
    backgroundColor: "#ba9490",
  },
});

export default DrawerNavigator;
