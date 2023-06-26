import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";
import { LinearGradient } from "expo-linear-gradient";
import style from "./style";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menu";

import { Menu } from "../../components/Menu";
import { Titulo } from "../../components/Titulo";
import { Cabecario } from "../../components/Cabecario";
import { Tabela } from "../../components/Tabela";
import { BotaoColetar } from "../../components/BotaoColetar";
import { BotaoPararColeta } from "../../components/BotaoPararColeta";

import {
  listarConjuntos,
  deletarConjunto,
} from "../../controllers/ConjuntoController";
import { deletarSensoresConjunto } from "../../controllers/SensorConjuntoController";
import { CabecarioTabela } from "../../components/CabecarioTabela";

export default function Home({ navigation }) {
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
    listarConjuntos().then((res) => {
      const listaNomeConjunto = res.map(
        (conjunto) => conjunto.nomeConjunto.stringValue
      );
      setListaCojuntos(listaNomeConjunto);
    });
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
        <Titulo titulo={"Leitura de Sensores"} />
        <SelectDropdown
          data={listaConjuntos}
          onSelect={(selectedItem, index) => {
            // setModoColeta(index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={style.btnModoColeta}
          buttonTextStyle={style.nomeColeta}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#444"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          defaultButtonText={"Selecione o conjunto"}
        />
        <CabecarioTabela />
        <Tabela />
        <BotaoColetar />
        <BotaoPararColeta />
      </LinearGradient>
    </View>
  );
}
