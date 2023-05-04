import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import Routes from "./src/views/routes"
import { Provider } from "react-redux"
import { store } from "./src/redux/store";

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </Provider>
  );
}

