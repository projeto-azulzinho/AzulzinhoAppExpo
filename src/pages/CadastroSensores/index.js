import React, { useEffect, useState, Fragment } from "react";
import { View, ScrollView, StatusBar, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "./style";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menu";

import { Menu } from "../../components/Menu";
import { BotaoSalvar } from "../../components/BotaoSalvar";
import { TextoEntrada } from "../../components/TextoEntrada";
import { Titulo } from "../../components/Titulo";
import { BotaoAdicionar } from "../../components/BotaoAdicionar";
import { Cabecario } from "../../components/Cabecario";
import { ItemInformativo } from "../../components/ItemInformativo";
import { ListaItens } from "../../components/ListaItens";
import { BotaoCancelar } from "../../components/BotaoCancelar";

import { Sensor } from "../../models/SensorModel";
import { GrandezaSensor } from "../../models/GrandezaSensorModel";

import { criarSensor } from "../../controllers/SensorController";
import { criarGrandezaSensor } from "../../controllers/GrandezaSensorController";
import { listarGrandezas } from "../../controllers/GrandezaController";
import { alertMessage } from "../../utils/validation";

export default function CadastroSensores({ navigation }) {
  const [ativo, setAtivo] = useState(false);
  const [listaGrandezas, setListaGrandezas] = useState([]);
  const [grandezasSelecionadas, setGrandezasSelecionadas] = useState([]);
  const [nomeSensor, setNomeSensor] = useState("");

  const { menuAtivo } = useSelector((state) => state.menuAtivo);
  const dispatch = useDispatch();

  const apresentaGrandezas = () => {
    setAtivo(true);
  };

  const sairDaSelecaoGrandezas = () => {
    setAtivo(false);
  };

  const selecionarGrandezas = (grandeza, index) => {
    const novaListaGrandeza = listaGrandezas;
    novaListaGrandeza.splice(index, 1);
    setListaGrandezas([...novaListaGrandeza]);
    setGrandezasSelecionadas([...grandezasSelecionadas, grandeza]);
    setAtivo(false);
  };

  const removeGrandeza = (grandeza, index) => {
    const novaListaSelecionados = grandezasSelecionadas;
    novaListaSelecionados.splice(index, 1);
    setGrandezasSelecionadas([...novaListaSelecionados]);
    setListaGrandezas([...listaGrandezas, grandeza]);
  };

  const abrirFecharMenu = () => {
    dispatch(toggleMenu());
  };

  const telaAnterior = () => {
    console.log("tela anterior");
    navigation.goBack();
  };

  const handleAddSensor = async () => {
    if (nomeSensor.trim().length == 0) {
      alertMessage("Atenção!", "Preencha o campo de texto");
    } else if (grandezasSelecionadas.length == 0) {
      alertMessage("Atenção!", "Lista de seleção vazia");
    } else {
      try {
        resp = await criarSensor(new Sensor(nomeSensor));
        console.log(resp.id);
        await criarGrandezaSensor(
          new GrandezaSensor(resp.id, grandezasSelecionadas)
        );
        alertMessage("Sucesso!", "Cadastro realizado com sucesso!");
        setNomeSensor("");
        setGrandezasSelecionadas([]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    listarGrandezas().then((resp) => {
      setListaGrandezas(resp);
    });

    setGrandezasSelecionadas([]);
    setAtivo(false);
    setListaGrandezas([]);
    setNomeSensor("");
  }, []);

  return (
    <View style={style.viewSize}>
      {ativo ? (
        <ListaItens
          listaItens={listaGrandezas}
          tituloLista={"Grandezas"}
          sairDaSelecao={sairDaSelecaoGrandezas}
          selecionarItem={selecionarGrandezas}
          nomeItem={"nomeGrandeza"}
        />
      ) : (
        ""
      )}
      <LinearGradient
        style={style.container}
        colors={["#063E56", "#FFFFFF", "#FFFFFF"]}
      >
        <StatusBar backgroundColor="#063E56" barStyle={"light-content"} />
        <Cabecario abrirFecharMenu={abrirFecharMenu} />
        {menuAtivo ? <Menu navegar={navigation} /> : ""}
        <Titulo titulo={"Cadastro de Sensores"} />
        <TextoEntrada
          mudarNomeConjunto={setNomeSensor}
          placeholderValue={"Nome do sensor..."}
          inputValue={nomeSensor}
        />
        <View style={style.line} />
        <BotaoAdicionar
          apresentaItens={apresentaGrandezas}
          nomeBotao={"Adicionar Grandeza"}
        />
        <ScrollView style={style.scrollSelecionado}>
          {grandezasSelecionadas.map((grandeza, index) => {
            return (
              <ItemInformativo
                item={grandeza}
                itemNome={"nomeGrandeza"}
                index={index}
                removeItem={removeGrandeza}
              />
            );
          })}
        </ScrollView>
        <View style={{ justifyContent: "flex-end" }}>
          <Pressable onPress={handleAddSensor}>
            <LinearGradient
              style={style.containerSalvar}
              colors={["#184A5B", "#5B5A1E"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={style.botao2}> SALVAR </Text>
            </LinearGradient>
          </Pressable>
          <BotaoCancelar telaAnterior={() => navigation.goBack()} />
        </View>
      </LinearGradient>
    </View>
  );
}
