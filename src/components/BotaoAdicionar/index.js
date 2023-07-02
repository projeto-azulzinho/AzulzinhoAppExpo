import React from "react";
import style from "./style";
import { Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const BotaoAdicionar = (props) => {
  const { apresentaItens, nomeBotao, adicionarItem } = props;

  if (adicionarItem == undefined)
    return (
      <LinearGradient
        style={style.btnBorda}
        colors={["#184A5B", "#5B5A1E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      >
        <Pressable style={style.btnForma} onPress={apresentaItens}>
          <Text style={style.btnTexto}> {nomeBotao} </Text>
        </Pressable>
      </LinearGradient>
    );
  else {
    return (
      <LinearGradient
        style={style.btnBorda}
        colors={["#184A5B", "#5B5A1E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      >
        <Pressable style={style.btnForma} onPress={adicionarItem}>
          <Text style={style.btnTexto}> {nomeBotao} </Text>
        </Pressable>
      </LinearGradient>
    );
  }
};
