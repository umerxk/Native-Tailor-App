import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { appThemeColor } from "../common/style";
import Users from "../Users";
import UserDetails from "../UserDetails";
import EachUser from "../UserDetails/EachUser";
import EditUser from "../Users/EditUser";
import Ionicons from "react-native-vector-icons/Ionicons";
import AddUser from "../AddUser";
import Login from "../AuthScreens/Login";
import Register from "../AuthScreens/Register";
import SplashScreen from "../SplashScreen";
import Otp from "../AuthScreens/Register/Otp";
import HomeScreen from "../HomeScreen";


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="All Users" component={Users} />
      <HomeStack.Screen name="UserDetails" component={UserDetails} />
      <HomeStack.Screen name="EachUser" component={EachUser} />
      <HomeStack.Screen name="EditUser" component={EditUser} />
      <SettingsStack.Screen name="add-user" component={AddUser} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function AddUserScreens() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="add-user" component={AddUser} />
      <SettingsStack.Screen name="All Users" component={Users} />
    </SettingsStack.Navigator>
  );
}

const AuthStack = createNativeStackNavigator();

function AuthUserScreens() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="register-user" component={Register} />
      <AuthStack.Screen name="get-otp" component={Otp} />
      <AuthStack.Screen name="login-user" component={Login} />
    </AuthStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const showTab = useSelector((state) => state.flow.showTabs);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SplashScreen"
        screenOptions={({ route }) => ({
          tabBarActiveBackgroundColor: appThemeColor,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Users") {
              iconName = focused ? "walk-outline" : "walk-outline";
            } else if (route.name === "Add User") {
              iconName = focused ? "add-outline" : "add-outline";
            } else if (route.name === "Home") {
              iconName = focused ? "home-outline" : "home-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          unmountOnBlur: true,
          tabBarHideOnKeyboard: route.name === "Add User" ? true : false,
          tabBarShowLabel: false,
          tabBarStyle: {
            display:
              route.name === "RegisterUser" ||
              route.name === "SplashScreen" ||
              route.name === "loginUser"
                ? "none"
                : "flex",
          },
        })}
        backBehavior="firstRoute"
      >
        {!showTab && (
          <Tab.Screen name="SplashScreen" component={SplashScreen} />
        )}
        {!showTab && (
          <Tab.Screen name="RegisterUser" component={AuthUserScreens} />
        )}

        <Tab.Screen name="Users" component={HomeStackScreen} />
        <Tab.Screen name="Add User" component={AddUserScreens} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
