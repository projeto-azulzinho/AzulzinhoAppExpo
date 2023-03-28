import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  atualizarConjunto,
  consultarConjunto,
  criarConjunto,
  deletarConjunto,
  listarConjuntos,
} from "./src/controllers/ConjuntoController";
import {
  atualizarGrandeza,
  consultarGrandeza,
  criarGrandeza,
  deletarGrandeza,
  listarGrandezas,
} from "./src/controllers/GrandezaController";
import {
  criarMedicao,
  listarMedicoes,
  consultarMedicao,
} from "./src/controllers/MedicaoController";
import {
  atualizarModoColeta,
  consultarModoColeta,
  criarModoColeta,
  deletarModoColeta,
  listarModoColetas,
} from "./src/controllers/ModoColetaController";
import { criarSensor } from "./src/controllers/SensorController";
import {
  atualizarUnidadeMedida,
  consultarUnidadeMedida,
  criarUnidadeMedida,
  deletarUnidadeMedida,
  listarUnidadeMedidas,
} from "./src/controllers/UnidadeMedidaController";
import { Conjunto } from "./src/models/ConjuntoModel";
import { Grandeza } from "./src/models/GrandezaModel";
import { Medicao } from "./src/models/MedicaoModel";
import { ModoColeta } from "./src/models/ModoColetaModel";
import { Sensor } from "./src/models/SensorModel";
import { UnidadeMedida } from "./src/models/UnidadeMedidaModel";

export default function App() {
  const modoColeta1 = new ModoColeta("Modo2", "124s", "JlxKJ9VLU6iTVtLtkjrp");

  async function criarMed() {
    const resp = await deletarModoColeta("8yX9vbgDanJaLHE99fEY");
    console.log(resp);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Nova MED" onPress={criarMed}>
        Nova MED
      </Button>
      <StatusBar style="auto" />
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
