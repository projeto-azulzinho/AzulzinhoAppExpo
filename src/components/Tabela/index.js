import { React, useState } from "react";
import { View, Text } from "react-native";
import style from "./style";
import { FlatList } from "react-native-gesture-handler";
import { getSensorDeConjunto } from "../../controllers/SensorConjuntoController";
import { getSensor } from "../../controllers/SensorController";

export const Tabela = (props) => {
  const [result, setResult] = useState([]);
  const { resultado, conjunto } = props;
  const [count, setCount] = useState(0);
  console.log(resultado);

  if (resultado.length != 0) {
    let resultado_final = resultado.split("|");

    let ress = [];
    const filtroDeSensores = () => {
      getSensorDeConjunto(conjunto.id).then((sensores) => {
        sensores.forEach((sensorId) => {
          getSensor(sensorId).then((sensor) => {
            index = resultado_final.indexOf(sensor.nomeSensor.stringValue);
            if (index !== -1) {
              ress.push(resultado_final.splice(index, 2));
              setResult(...result, ress);
            }
          });
        });
      });
    };

    if (count < 1) {
      filtroDeSensores();
      setCount(count + 1);
    }

    const dado = {
      valores: result,
    };
    const info = [dado];

    return (
      <FlatList
        data={info}
        renderItem={({ item, index }) => {
          return (
            <View style={style.conjuntoDados}>
              {item.valores.map((valor, index) => {
                // console.log(valor)
                return (
                  <View style={style.dado}>
                    <Text style={style.value}>{valor[0]}</Text>
                    <Text style={style.value}>{valor[1]}</Text>
                    {/* <Text style={style.value}>{valor.grandeza}</Text> */}
                  </View>
                );
              })}
            </View>
          );
        }}
        keyExtractor={(item) => item}
        horizontal={true}
        style={style.list}
        contentContainerStyle={style.contentLista}
      />
    );
  }
};
