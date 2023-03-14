import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Sensor } from "./src/models/SensorModel";
import {
  criarSensor,
  listarSensores,
} from "./src/controllers/SensorController";
import { useState, useEffect } from "react";

export default function App() {
  const [listaSensores, setListaSensores] = useState([]);
  let sensor = new Sensor(1, "Distância");

  const addSensor = async () => {
    criarSensor(sensor);
  };

  const upSensor = async () => {
    atualizarSensor(id, sensor2);
  };

  const delSensor = async () => {
    deletarSensor(id);
  };

  const listSensors = async () => {
    await listarSensores().then((data) => {
      setListaSensores({ ...data });
    });
  };

  useEffect(() => {
    listSensors();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="click aqui" onPress={listSensors} />
      <Button title="add sensor" onPress={addSensor} />
      <Button title="udpdate sensor" onPress={upSensor} />
      <Button title="delete sensor" onPress={delSensor} />
      <View style={styles.lista}>
        {Object.entries(listaSensores).map((sensor) => {
          return (
            <Text key={sensor[1].id}>
              {sensor[1].nomeSensor["stringValue"]}
            </Text>
          );
        })}
      </View>
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
  lista: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textoModelo: {
    fontSize: 18,
    fontWeight: "500",
  },
});
