import { StyleSheet, SafeAreaView } from "react-native";
import Stack from "./src/routes/Stack";
import "react-native-gesture-handler";
import { MyDrawer } from "./src/routes/Drawer";
import { Grandezas } from "./src/views/grandezas";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyDrawer />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
