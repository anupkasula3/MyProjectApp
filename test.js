import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './screens/Login';
import Signup from './screens/Signup';
import Key from 'react-native-vector-icons/FontAwesome5';
import { Ionicons } from "@expo/vector-icons"
import Choose from './pages/Choose';
import Selectfavorite from './pages/Selectfavorite';
import Index from './pages/Index';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function HomeStackGroup() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}  />
            <Stack.Screen name='Choose' component={Choose} options={{ tabBarVisible: false }} />
            <Stack.Screen name="Selectfavorite" component={Selectfavorite} />
            <Stack.Screen
                name="Index"
                component={Index}
                options={{
                    headerShown: true,
                    title: 'Browse',
                    headerTitleStyle: {
                        alignSelf: 'center',
                    },
                }}
            />

        </Stack.Navigator>
    )
}

function getTabBarVisible(route) {
    console.log(route.name)
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : route.params?.screen || 'Signup'; 

    // Hide the tab bar for the Login and Signup screens
    if (routeName === 'Login' || routeName == 'Signup') {
        return false;
    }

    return true;
}

function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;
                    if (route.name === "Signup") {
                        iconName = focused ? "ios-notifications" : "notifications-outline";
                    }
                    else if (route.name === "HomeStackGroup") {
                        iconName = focused ? "settings" : "ios-settings-sharp";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "gray",
                tabBarVisible: getTabBarVisible(route),
            })}>
            <Tab.Screen name='Signup' component={Signup} />
            <Tab.Screen name='HomeStackGroup' component={HomeStackGroup} options={{ headerShown: false, tabBarLabel: "@abcd" }} />
        </Tab.Navigator>
    )

}


export default function Navigation() {
    return (
        <NavigationContainer>
            {/* <Home/> */}
            <TabGroup />
        </NavigationContainer>
    )
}