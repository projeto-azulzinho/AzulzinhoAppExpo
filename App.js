import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Conjunto } from "./src/models/ConjuntoModel";
import {
  criarConjunto,
  atualizarConjunto,
  deletarConjunto,
  listarConjuntos,
} from "./src/controllers/ConjuntoController";
import { useState, useEffect } from "react";

export default function App() {
  const [listaConjuntos, setListaConjuntos] = useState([]);
  let conjunto = new Conjunto("predicao de direcao de ventos");
  let conjunto2 = new Conjunto("predicao do sentido de ventos");

  const addConjunto = async () => {
    criarConjunto(conjunto);
  };

  const upConjunto = async () => {
    atualizarConjunto(id, conjunto2);
  };

  const delConjunto = async () => {
    deletarConjunto(id);
  };

  const listConjuntos = async () => {
    await listarConjuntos().then((data) => {
      setListaSensores({ ...data });
    });
  };

  useEffect(() => {
    listConjuntos();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="click aqui" onPress={listConjuntos} />
      <Button title="add sensor" onPress={addConjunto} />
      <Button title="udpdate sensor" onPress={upConjunto} />
      <Button title="delete sensor" onPress={delConjunto} />
      <View style={styles.lista}>
        {Object.entries(listaConjuntos).map((conjunto) => {
          return (
            <Text key={conjunto[1].id}>
              {conjunto[1].nomeConjunto["stringValue"]}
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
