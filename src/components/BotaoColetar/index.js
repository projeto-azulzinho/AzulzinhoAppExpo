import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "./style";

export const BotaoColetar = (props) => {
  // const {  } = props

  const iniciarColeta = async () => {
    console.log("coleta iniciada");
  };

  return (
    <Pressable onPress={iniciarColeta}>
      <LinearGradient
        style={style.btnShape}
        colors={["#184A5B", "#5B5A1E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      >
        <Text style={style.btnText}> COLETAR DADOS </Text>
      </LinearGradient>
    </Pressable>
  );
};
