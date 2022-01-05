import React, { useState } from "react";
import { StatusBar, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          backBehavior="history"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "md-home" : "md-home-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "search" : "search-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            //tabBarShowLabel: false,
            tabBarItemStyle: {
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingVertical: 5,
              //backgroundColor: 'transparent'
            },
            tabBarStyle: {
              borderTopColor: "#f1f1f1",
              borderLeftColor: "#f1f1f1",
              borderRightColor: "#f1f1f1",
              //borderColor: 'grey',
              borderTopWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              //borderRadius: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              //backgroundColor: 'black',
              //elevation: 0,
              //position: 'absolute',
              //left: 20,
              //bottom: 20,
              //right: 20
            },
            tabBarActiveTintColor: "#00b894",
            tabBarInactiveTintColor: "gray",
            //tabBarActiveBackgroundColor: 'crimson',
            //tabBarInactiveBackgroundColor: 'crimson',
          })}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Search"
            component={SearchScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
