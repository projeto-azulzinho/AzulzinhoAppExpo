import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getFirestore, collection, getDocs, doc, addDoc } from 'firebase/firestore/lite';
import db from './src/connection/firebaseConfig'

export default function App() {

  const handleClick = () => {
    const sensorRef = doc(db, 'sensores', 'sensor1')

    addDoc(sensorRef, {
      nome: "sensor de umidade"
    })
    .then(res => console.log("deu certo"))
  
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="click aqui" onClick={handleClick} />
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
