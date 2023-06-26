import React from "react";
import { View, TextInput } from "react-native";
import style from "./style";

export const TextoEntrada = (props) => {
  const { mudarNomeConjunto, placeholderValue, inputValue } = props;

  return (
    <View style={style.textoEntrada}>
      <TextInput
        onChangeText={mudarNomeConjunto}
        placeholder={placeholderValue}
        value={inputValue}
      ></TextInput>
    </View>
  );
};
