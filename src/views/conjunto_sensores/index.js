import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import style from "./style";
import { LinearGradient } from "expo-linear-gradient";
import imgBalao from "../../assets/balao-de-ar-quente.png";
import imgMenu from "../../assets/barra-de-menu.png";
import imgDelete from "../../assets/marca-cruzada.png";

export function Conjunto_sensores() {
  return (
    <View>
      <LinearGradient style={style.container} colors={["#063E56", "#FFFFFF"]}>
        <View style={style.containerBarra}>
          <Image style={style.caixa} source={imgBalao} />
          <Image style={style.caixa} source={imgMenu} />
        </View>

        <View style={style.containerTitulo}>
          <View style={style.containerTitulo2}>
            <Text style={style.titulo}> Conjunto de Sensores </Text>
          </View>

          <View style={style.espacamento}></View>
          <View style={style.botaoGrandeza}>
            <Text title="botaoConjunto" style={style.botao}>
              {" "}
              Adiciona Conjunto de Sensores{" "}
            </Text>
          </View>

          <View style={style.espacamento}></View>
          <View style={style.containerNomeSensor}>
            <Text style={style.Sensores}> Conjunto 1 </Text>
            <Image style={style.caixaDelete} source={imgDelete} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
