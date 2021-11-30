import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "./src/screens/PostScreen";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem from "./src/components/CarouselCardItem";
import data from "./src/data";
import LottieView from "lottie-react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const { width, height } = Dimensions.get("window");

 
export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="TabsStack" component={TabsStack} />
        <Stack.Screen name="post" component={PostScreen} />
  </Stack.Navigator>
      </NavigationContainer> 
   
    </>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 80;
  return width / 5;
}

function TabsStack () {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    tabBarOptions={{
      showLabel: true,
      activeTintColor: "#4699d4",
      style: {
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        marginHorizontal: 20,
        height: 60,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        paddingHorizontal: 20,
      },
    }}
  >
    {
    }
    <Tab.Screen
      name={"Home"}
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              position: "absolute",
            }}
          >
            <FontAwesome5
              name="home"
              size={20}
              color={focused ? "#4699d4" : "#d4d4d4"}
            ></FontAwesome5>
          </View>
        ),
      }}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          Animated.spring(tabOffsetValue, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        },
      })}
    ></Tab.Screen>

    <Tab.Screen
      name={"Search"}
      component={SearchScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              position: "absolute",
            }}
          >
            <FontAwesome5
              name="search"
              size={20}
              color={focused ? "#4699d4" : "#d4d4d4"}
            ></FontAwesome5>
          </View>
        ),
      }}
      listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: (e) => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth(),
            useNativeDriver: true,
          }).start();
        },
      })}
    ></Tab.Screen>

    <Tab.Screen
      name={"Notifications"}
      component={NotificationScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              position: "absolute",
            }}
          >
            <FontAwesome5
              name="bell"
              size={20}
              color={focused ? "#4699d4" : "#d4d4d4"}
            ></FontAwesome5>
          </View>
        ),
      }}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 3,
            useNativeDriver: true,
          }).start();
        },
      })}
    ></Tab.Screen>

    <Tab.Screen
      name={"Settings"}
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              position: "absolute",
            }}
          >
            <FontAwesome5
              name="user-alt"
              size={20}
              color={focused ? "#4699d4" : "#d4d4d4"}
            ></FontAwesome5>
          </View>
        ),
      }}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 4,
            useNativeDriver: true,
          }).start();
        },
      })}
    />
  </Tab.Navigator>
  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
