import React from "react";
import { Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "./style";
import { alertMessage } from "../../utils/validation";

export const BotaoSalvar = (props) => {
  const {
    funcao1,
    dados1,
    Modal1,
    funcao2,
    dados2,
    Modal2,
    clear,
    campoTextoVerificacao,
  } = props;

  const inserirDados = async () => {
    if (campoTextoVerificacao.trim().length == 0) {
      alertMessage("Atenção!", "Preencha o campo de texto");
    } else if (dados2.length == 0) {
      alertMessage("Atenção!", "Lista de seleção vazia");
    } else {
      if (funcao2 != undefined) {
        const refDoc = await funcao1(new Modal1(...dados1));
        const ids = dados2.map((item) => item.id);
        await funcao2(new Modal2(refDoc.id, ids));
      } else {
        salvarDados();
      }
      clear();
    }
  };

  return (
    <Pressable onPress={inserirDados}>
      <LinearGradient
        style={style.btnShape}
        colors={["#184A5B", "#5B5A1E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      >
        <Text style={style.btnText}>SALVAR</Text>
      </LinearGradient>
    </Pressable>
  );
};
