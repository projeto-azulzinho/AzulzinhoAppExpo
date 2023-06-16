import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import style from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { criarSensor } from "../../controllers/SensorController";
import { Sensor } from "../../models/SensorModel";
import imgBalao from "../../assets/balao-de-ar-quente.png";
import imgMenu from "../../assets/barra-de-menu.png";
import imgBotao from "../../assets/botao-x.png";

export function Cadastro_sensores() {
  const [nomeSensor, onChangeNomeSensor] = useState("");

  const addSensor = () => {
    const sensor = new Sensor(nomeSensor);
    criarSensor(sensor);
  };

  return (
    <View>
      <LinearGradient style={style.container} colors={["#063E56", "#FFFFFF"]}>
        <View style={style.containerBarra}>
          <Image style={style.caixa} source={imgBalao} />
          <Image style={style.caixa} source={imgMenu} />
        </View>

        <View style={style.containerTitulo}>
          <View style={style.containerTitulo2}>
            <Text style={style.titulo}> Cadastro de sensores </Text>
          </View>
          <View style={style.espacamento}></View>

          <View style={style.containerNomeSensor2}>
            <TextInput
              style={style.NomeSensor}
              onChangeText={onChangeNomeSensor}
              placeholder="Nome do sensor..."
              value={nomeSensor}
            ></TextInput>
          </View>
          <View style={style.espacamento}></View>
          <View style={style.botaoGrandeza}>
            <Text title="botaoGrandeza" style={style.botao}>
              {" "}
              Adiciona Grandeza{" "}
            </Text>
          </View>

          <View style={style.espacamento}></View>
          <View style={style.containerNomeSensor}>
            <Text style={style.Sensores}> Celsius </Text>
            <Image style={style.caixa} source={imgBotao} />
          </View>
          <View style={style.espacamento2}></View>
          <LinearGradient
            style={style.containerSalvar}
            colors={["#184A5B", "#5B5A1E"]}
          >
            <Text style={style.botao2} onPress={addSensor}>
              {" "}
              SALVAR{" "}
            </Text>
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  );
}
