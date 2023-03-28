import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import Routes from "./src/views/routes"

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

