import React from "react";
import { View, FlatList, Text, Pressable, Image } from "react-native";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { State } from "react-native-gesture-handler";
import { toggleMenu } from "../../redux/menu";

export const Menu = (props) => {
  const telas = [
    { key: "Home", pag: "Home" },
    { key: "Conjunto Sensores", pag: "Conjunto sensores" },
    { key: "Sensores", pag: "Sensores" },
    { key: "Grandezas", pag: "Grandezas" },
    { key: "Unidades de Medida", pag: "Unidades Medida" },
    {
      key: "Cadastro de Conjunto de Sensores",
      pag: "Cadastro conjunto de sensores",
    },
    { key: "Cadastro de Sensores", pag: "Cadastro de sensores" },
    { key: "Cadastro de Grandezas", pag: "Cadastro Grandezas" },
    { key: "Cadastro de Unidades de Medida", pag: "Cadastro Unidades Medida" },
    { key:"Localização", pag: "Localização" }
  ];

  const dispatch = useDispatch();
  const { menuAtivo } = useSelector((state) => state.menuAtivo);

  const navegarPagina = (pagina) => {
    dispatch(toggleMenu());
    props.navegar.navigate(pagina);
  };

  return (
    <View style={style.bgMenu}>
      <FlatList
        contentContainerStyle={style.list}
        data={telas}
        renderItem={({ item }) => (
          <Pressable
            style={style.items}
            onPress={() => navegarPagina(item.pag)}
          >
            <Text style={style.itemText}>{item.key}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};
