import * as React from 'react';
import { useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./screens/LoginPage";
import SignUp from "./screens/SignUp";
import Event from './screens/Event';

import { useFonts } from 'expo-font';
import 'firebase/firestore';
import { auth } from './components/AuthUtils';
import { signOut } from 'firebase/auth'; // Import the appropriate function from Firebase auth
import LogoutButton from './components/LogoutButton';
import MainGroupPage from './screens/Group/MainGroupPage';

import CreateEvent from './screens/CreateEvent';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const handleLogout = async () => {
  try {
    await signOut(auth);
    // Additional logic after successful logout (if needed)
  } catch (error) {
    console.error('Error logging out:', error.message);
  }
};


const App = () => {
  const [showHomeScreen, setShowHomeScreen] = React.useState(false);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        setShowHomeScreen(true);
      } else {
        setShowHomeScreen(false);
      }
    });

    return () => subscriber(); // Make sure to unsubscribe when the component unmounts
  }, []);

  const BottomTabs = () => {
    return (
        <Tabs.Navigator 
          screenOptions={{ 
            headerShown: true,
            tabBarStyle: {
              backgroundColor: 'rgb(46,46,46)',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white', 
            headerStyle: {
              backgroundColor: 'rgb(46,46,46)',
            },
          }}>

          <Tabs.Screen
            name="Home"
            component={Event}
            options={{
              tabBarIcon: ({ size }) => (
                <Ionicons name="md-home-outline" size={size} color="white" />
              ),
              
            }}
          >
          </Tabs.Screen>

        <Tabs.Screen
          name='Groups'
          component={Event}
          options={{
            tabBarIcon: ({ size }) => (
              <Ionicons
                name='md-game-controller-outline'
                size={size}
                color='white'
              />
            ),
          }}
        ></Tabs.Screen>

        <Tabs.Screen
          name='Events'
          component={Event}
          options={{
            tabBarIcon: ({ size }) => (
              <Ionicons name='md-search' size={size} color='white' />
            ),
          }}
        ></Tabs.Screen>

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
            component={Login}
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
    'GothicA1-Regular': require('./assets/fonts/GothicA1-Regular.ttf'),
    'GothicA1-Medium': require('./assets/fonts/GothicA1-Medium.ttf'),
    'GothicA1-SemiBold': require('./assets/fonts/GothicA1-SemiBold.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {/* remember to change next line into !showHomeScreen */}
        {showHomeScreen ? (
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={BottomTabs}
              options={{ 
                headerStyle: {
                  backgroundColor: 'rgb(46,46,46)',
                },
                headerShown: false 
              }}
            />

            <Stack.Screen
              name="CreateEvent"
              component={CreateEvent}
              options={{
                headerShown: true, headerRight: () => <LogoutButton onPress={() => handleLogout()} />, 
                headerStyle: {
                  backgroundColor: 'rgb(46,46,46)',
                },
                headerTitle: 'Create an Event', 
                headerTintColor: 'white',
              }}
            />
          </Stack.Navigator>

        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen
              name='Login'
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='SignUp'
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

export default App;
