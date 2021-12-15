import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import Chat from "../containers/Chat";
import Profile from "../containers/Profile";
import Discovery from "../containers/Discovery";
import { View, Platform } from "react-native";
import { CompassIcon, ChatIcon, ProfileIcon } from "../components/atoms/icons";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{ marginBottom: Platform.OS === "ios" ? 20 : 0 }}>
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation?.navigate(state?.routeNames[index])}
    >
      <BottomNavigationTab title="Discovery" icon={CompassIcon} />
      <BottomNavigationTab title="Chat" icon={ChatIcon} />
      <BottomNavigationTab title="Profile" icon={ProfileIcon} />
    </BottomNavigation>
  </View>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Discovery" component={Discovery} />
    <Screen name="Chat" component={Chat} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigation;
