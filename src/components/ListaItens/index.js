import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import style from "./style";

export const ListaItens = (props) => {
  const { sairDaSelecao, tituloLista, listaItens, selecionarItem, nomeItem } =
    props;

  return (
    <Pressable style={style.selecaoContainer} onPress={sairDaSelecao}>
      <View style={style.selecionaCabecario}>
        <Text style={style.SensoresCabecarioTexto}>{tituloLista}</Text>
      </View>
      <View style={style.scrollSize}>
        <ScrollView
          contentContainerStyle={style.scroll}
          style={style.scrollParent}
        >
          {listaItens.map((item, index) => {
            return (
              <Pressable
                style={style.selecionaItem}
                key={item.id}
                onPress={() => selecionarItem(item, index)}
              >
                <Text style={style.SelecionaNomeItem}>
                  {item[nomeItem].stringValue}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </Pressable>
  );
};
