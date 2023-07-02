import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/index";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
