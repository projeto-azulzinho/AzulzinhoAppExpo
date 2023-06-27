import React, { useEffect, useState } from "react";
import { View, ScrollView, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "./style";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menu";

import { Menu } from "../../components/Menu";
import { Titulo } from "../../components/Titulo";
import { BotaoAdicionar } from "../../components/BotaoAdicionar";
import { Cabecario } from "../../components/Cabecario";
import { ItemInformativo } from "../../components/ItemInformativo";

import {
  listarSensores,
  deletarSensor,
} from "../../controllers/SensorController";
import { deletarSensorDeConjunto } from "../../controllers/SensorConjuntoController";

export default function Sensores({ navigation }) {
  const [listaSensores, setListaSensores] = useState([]);
  const { menuAtivo } = useSelector((state) => state.menuAtivo);
  const dispatch = useDispatch();

  const abrirFecharMenu = () => {
    dispatch(toggleMenu());
  };

  const removeSensor = (sensor, index) => {
    deletarSensorDeConjunto(sensor.id);
    deletarSensor(sensor.id);
    const novaLista = listaSensores;
    novaLista.splice(index, 1);
    setListaSensores([...novaLista]);
  };

  const editarSensor = () => {
    navigation.navigate("Cadastro de sensores");
  };

  useEffect(() => {
    listarSensores().then((res) => setListaSensores(res));
  }, [toggleMenu]);

  return (
    <View style={style.viewSize}>
      <LinearGradient
        style={style.container}
        colors={["#063E56", "#FFFFFF", "#FFFFFF"]}
      >
        <StatusBar backgroundColor="#063E56" barStyle={"light-content"} />
        <Cabecario abrirFecharMenu={abrirFecharMenu} />
        {menuAtivo ? <Menu navegar={navigation} /> : ""}
        <Titulo titulo={"Sensores"} />
        <BotaoAdicionar
          adicionarItem={() => navigation.navigate("Cadastro de sensores")}
          nomeBotao={"Adicionar Sensor"}
        />
        <ScrollView style={style.scrollSelecionado}>
          {listaSensores.map((sensor, index) => {
            return (
              <ItemInformativo
                item={sensor}
                itemNome={"nomeSensor"}
                index={index}
                removeItem={removeSensor}
                editarItem={editarSensor}
              />
            );
          })}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
