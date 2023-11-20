import * as React from "react";
import {StyleSheet, View} from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts } from "expo-font";
import LoginPage from "./screens/LoginPage";
import Event from './screens/EventHome';

const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const BottomTabs = () => {
    return (
        <Tabs.Navigator 
          screenOptions={{ 
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'rgb(46,46,46)',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white', 
          }}>

          <Tabs.Screen
            name="Home"
            component={Event}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="md-home-outline" size={size} color="white" />
              )
            }}
          >
          </Tabs.Screen>

          <Tabs.Screen
            name="My Groups"
            component={Event}
            options={{
              tabBarIcon: ({ size }) => (
                <Ionicons name="md-people-outline" size={size} color="white" />
              )
            }}
          >
          </Tabs.Screen>

          <Tabs.Screen
            name="Events"
            component={Event}
            options={{
              tabBarIcon: ({ size }) => (
                <Ionicons name="md-game-controller-outline" size={size} color="white" />
              )
            }}
          >
          </Tabs.Screen>

          <Tabs.Screen
            name="Search"
            component={Event}
            options={{
              tabBarIcon: ({ size }) => (
                <Ionicons name="md-search" size={size} color="white" />
              )
            }}
          >
          </Tabs.Screen>

          <Tabs.Screen
            name="Profile" 
            component={LoginPage}
            options={{
              tabBarIcon: ({ size }) => (
                <Ionicons name="md-settings-outline" size={size} color="white" />
              )
            }}
          />

        </Tabs.Navigator>
    )
    
  }

  const [fontsLoaded, error] = useFonts({
    "GothicA1-Regular": require("./assets/fonts/GothicA1-Regular.ttf"),
    "GothicA1-Medium": require("./assets/fonts/GothicA1-Medium.ttf"),
    "GothicA1-SemiBold": require("./assets/fonts/GothicA1-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Bottomtabs"
            component={BottomTabs}
            options={{ headerShown: true }}
          />
        </RootStack.Navigator>
        {/* {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null} */}
      </NavigationContainer>
    </>
    
  );
};

// const styles = StyleSheet.create {
//   bottom: {
//     backgroundColor: 'rgb(46,46,46)',
//     color: 'white',
//   }
// }
export default App;
