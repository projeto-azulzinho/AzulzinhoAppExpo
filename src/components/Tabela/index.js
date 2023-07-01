import { React, useState } from "react";
import { View, Text } from "react-native";
import style from "./style";
import { FlatList } from "react-native-gesture-handler";
import { getSensorDeConjunto } from "../../controllers/SensorConjuntoController";
import { getSensor } from "../../controllers/SensorController";
import { useEffect } from "react";

export const Tabela = (props) => {
  const [result, setResult] = useState([]);
  //const { resultado, conjunto } = props;
  const { dadosProntos } = props;
  //const [count, setCount] = useState(0);
  //console.log(resultado);

  /* if (resultado.length != 0) {
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
    const info = [dado]; */

  useEffect(() => {
    if (dadosProntos.length >= 1) {
      dadosFormatados = [];
      dadosProntos.forEach((element) => {
        const dado = {
          NomeSensor: element[0],
          ValorSensor: element[1],
        };
        dadosFormatados.push(dado);
      });
      setResult(dadosFormatados);
      console.log(result);
    }
  }, []);

  if (dadosProntos != undefined) {
    return (
      <FlatList
        data={result}
        renderItem={({ item, index }) => {
          return (
            <View style={style.conjuntoDados}>
              {item.map((valor, index) => {
                console.log(valor);
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
  } else {
    return <></>;
  }
};
