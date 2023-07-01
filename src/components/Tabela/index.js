import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import style from "./style";
import { FlatList } from "react-native-gesture-handler";
import { getSensorDeConjunto } from "../../controllers/SensorConjuntoController";
import { getSensor } from "../../controllers/SensorController";
import { criarMedicao } from "../../controllers/MedicaoController"
import { Medicao } from "../../models/MedicaoModel"

export const Tabela = (props) => {
    const [result, setResult] = useState([]);
    const { resultado, conjunto } = props;
  
    useEffect(() => {
      if (resultado.length !== 0) {
        const resultado_final = resultado.split("|");
        const ress = [];
  
        const filtroDeSensores = () => {
          getSensorDeConjunto(conjunto.id).then((sensores) => {
            const promises = sensores.map((sensorId) => {
              return getSensor(sensorId).then((sensor) => {
                const nomeSensor = sensor.nomeSensor.stringValue;
                const index = resultado_final.indexOf(nomeSensor);
                if (index !== -1) {
                  const valor = resultado_final[index + 1];
                  ress.push({ nome: nomeSensor, valor: resultado_final[index + 1] });
                }
              });
            });
  
            Promise.all(promises).then(() => {
              if (ress.length > 0) {
                setResult(ress);
                const medicao = new Medicao(new Date(), ress)
                criarMedicao(medicao)
              }
            });
          });
        };
        if (conjunto) {
          filtroDeSensores();
        }
      }
    }, [resultado, conjunto]);
  
    const dado = {
      valores: result,
    };
  
    const info = [dado];
  
    return (
      <FlatList
        data={info}
        renderItem={({ item }) => (
          <View style={style.conjuntoDados}>
            {item.valores.map((valor, index) => (
              <View style={style.dado} key={index}>
                <Text style={style.value}>{valor.nome}</Text>
                <Text style={style.value}>{valor.valor}</Text>
                {/* <Text style={style.value}>{valor.grandeza}</Text> */}
              </View>
            ))}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        style={style.list}
        contentContainerStyle={style.contentLista}
      />
    );
  };