import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Choose from './pages/Choose';
import Selectfavorite from './pages/Selectfavorite';
import Index from './pages/Index';
import CustomDrawer from './components/CustomDrawer';
import Navigation from './Navigation';
// import Navigation from './navigation';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// export const HomeStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="Choose" component={Choose} />
//     <Stack.Screen name="Selectfavorite" component={Selectfavorite} />
//     <Stack.Screen
//       name="Index"
//       component={Index}
//       options={{
//         headerShown: true,
//         title: 'Browse',
//         headerTitleStyle: {
//           alignSelf: 'center',
//         },
//       }}
//     />
//   </Stack.Navigator>
// );

export default function App() {
  return <Navigation/>
  // (
  //   <NavigationContainer>
  //     <Drawer.Navigator
  //       drawerContent={(props) => <CustomDrawer {...props} />}
  //       screenOptions={{ headerShown: false }}
  //       initialRouteName="Home"
  //     >

  //       <Drawer.Screen name="Login" component={Login} />
  //       <Drawer.Screen name="Signup" component={Signup} />
  //     </Drawer.Navigator>
  //     <StatusBar style="auto" />
  //   </NavigationContainer>
  // );
}
