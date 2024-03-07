import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './screens/Login';
import Signup from './screens/Signup';
import Key from 'react-native-vector-icons/FontAwesome5';
import { Ionicons } from "@expo/vector-icons"
import Choose from './pages/Choose';
import Selectfavorite from './pages/Selectfavorite';
import Index from './pages/Index';
import Books from './pages/tabs/Books';
import Library from './pages/tabs/Library';
import Profile from './pages/tabs/Profile';
import CustomDrawer from './components/CustomDrawer';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function DrawerGroup() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            // screenOptions={{ headerShown: false }}
            initialRouteName="Home"

        >

            <Drawer.Screen name="Books" component={Books} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Signup" component={Signup} />
        </Drawer.Navigator>
    )
}


function HomeStackGroup() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Choose' component={Choose} />
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
            {/* <Stack.Screen name='Drawer' component={DrawerGroup} /> */}


        </Stack.Navigator>
    )
}





function TabGroup() {

    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarShowLabel: false,

                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;
                    if (route.name === "Book") {
                        iconName = focused ? "book" : "book-outline";
                    }
                    else if (route.name === "HomeStackGroup") {
                        iconName = focused ? "search" : "search-outline";
                        // iconName = focused ? "settings" : "ios-settings-sharp";
                    }
                    else if (route.name === "Library") {
                        iconName = focused ? "library" : "library-outline";
                    }
                    else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    }
                    return (
                        <View >
                            <Ionicons name={iconName} size={size} color={color} />
                        </View>
                    );
                },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "gray",
                headerShown: false,


            })}

        >
            {/* <Tab.Screen name='Signup' component={Signup} /> */}
            <Tab.Screen
                name='HomeStackGroup'
                component={HomeStackGroup}
                options={({ route }) => ({
                    tabBarStyle: { display: getTabBarVisibility(route) },
                    // tabBarShowLabel: false,


                })}
            />
            <Tab.Screen
                name='Book'
                component={Books}

            />
            <Tab.Screen
                name='Library'
                component={Library}

            />
            <Tab.Screen
                name='Profile'
                component={Profile}

            />
        </Tab.Navigator>
    )

}


export default function Navigation() {
    return (
        <NavigationContainer >
            {/* <Home/> */}
            <TabGroup />
        </NavigationContainer>
    )
}

const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log(routeName)

    if (routeName == "Login" || routeName == "Home" || routeName == "Signup" || routeName == "Choose" || routeName == "Selectfavorite" || !routeName) {
        return 'none';
    }
    return 'flex';
}