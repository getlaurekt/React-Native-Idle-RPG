import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import TopBar from ".././components/TopBar";
import WeaponList from ".././components/WeaponList";

const HomeScreen = () => {
  return (
    <View>
      <TopBar />
      <WeaponList />
    </View>
  );
};

export default HomeScreen;
