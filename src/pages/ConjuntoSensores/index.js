import React, { useEffect, useState } from "react";
import { View, ScrollView, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "./style";

import { toggleMenu } from "../../redux/menu";
import { useSelector, useDispatch } from "react-redux";

import { Menu } from "../../components/Menu";
import { Titulo } from "../../components/Titulo";
import { BotaoAdicionar } from "../../components/BotaoAdicionar";
import { Cabecario } from "../../components/Cabecario";
import { ItemInformativo } from "../../components/ItemInformativo";

import {
  listarConjuntos,
  deletarConjunto,
} from "../../controllers/ConjuntoController";
import { deletarSensoresConjunto } from "../../controllers/SensorConjuntoController";

export default function ConjuntoSensores({ navigation }) {
  const [listaConjuntos, setListaCojuntos] = useState([]);
  const { menuAtivo } = useSelector((state) => state.menuAtivo);
  const dispatch = useDispatch();

  const abrirFecharMenu = () => {
    dispatch(toggleMenu());
  };

  const removeConjunto = (conjunto, index) => {
    deletarSensoresConjunto(conjunto.id);
    deletarConjunto(conjunto.id);
    const novaLista = listaConjuntos;
    novaLista.splice(index, 1);
    setListaCojuntos([...novaLista]);
  };

  const editarCojunto = () => {
    navigation.navigate("Cadastro conjunto de sensores");
  };

  useEffect(() => {
    listarConjuntos().then((res) => setListaCojuntos(res));
  }, []);

  return (
    <View style={style.viewSize}>
      <LinearGradient
        style={style.container}
        colors={["#063E56", "#FFFFFF", "#FFFFFF"]}
      >
        <StatusBar backgroundColor="#063E56" barStyle={"light-content"} />
        <Cabecario abrirFecharMenu={abrirFecharMenu} />
        {menuAtivo ? <Menu navegar={navigation} /> : ""}
        <Titulo titulo={"Conjunto de Sensores"} />
        <BotaoAdicionar
          adicionarItem={() =>
            navigation.navigate("Cadastro conjunto de sensores")
          }
          nomeBotao={"Adicionar Conjunto de Sensores"}
        />
        <ScrollView style={style.scrollSelecionado}>
          {listaConjuntos.map((comjunto, index) => {
            return (
              <ItemInformativo
                item={comjunto}
                itemNome={"nomeConjunto"}
                index={index}
                removeItem={removeConjunto}
                editarItem={editarCojunto}
              />
            );
          })}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
