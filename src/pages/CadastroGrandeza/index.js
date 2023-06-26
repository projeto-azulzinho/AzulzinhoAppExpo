import React, { useEffect, useState } from "react";
import { criarGrandeza } from "../../controllers/GrandezaController";
import { Grandeza } from "../../models/GrandezaModel";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  StatusBar,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import imgBalao from "../../assets/balao-de-ar-quente.png";
import imgMenu from "../../assets/barra-de-menu.png";
import { ButtomSave } from "../../components/ButtomSave";
import { styles } from "./style";
import { alertMessage } from "../../utils/validation";
import { listarUnidadeMedidas } from "../../controllers/UnidadeMedidaController";

import { Menu } from "../../components/Menu";
import { Titulo } from "../../components/Titulo";
import { Cabecario } from "../../components/Cabecario";
import { TextoEntrada } from "../../components/TextoEntrada";
import { BotaoAdicionar } from "../../components/BotaoAdicionar";
import { ListaItens } from "../../components/ListaItens";
import { ItemInformativo } from "../../components/ItemInformativo";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menu";
import { BotaoCancelar } from "../../components/BotaoCancelar";
import { Pressable } from "react-native";

export function CadastroGrandezas({ route, navigation }) {
  /* const [grandeza, setGrandeza] = useState("");
  const [unidadeMedidaId, setUnidadeMedidaId] = useState("");
  const [unidadeMedida, setUnidadeMedida] = useState(
    "Escolha a Unidade de Medida"
  );
  const [salvar, setSalvar] = useState(false);

  console.warn(route.params);
  const handleaAddGrandeza = async () => {
    if (grandeza.trim().length == 0) {
      alertMessage("Atenção!", "Preencha o campo grandeza");
    } else if (unidadeMedida == "Escolha a Unidade de Medida") {
      alertMessage("Atenção!", "Escolha a unidade de medida");
    } else {
      try {
        await criarGrandeza(new Grandeza(grandeza, unidadeMedidaId));
        alertMessage("Sucesso!", "Cadastro realizado com sucesso!");
        setSalvar(true);
        setGrandeza("");
        setUnidadeMedida("Escolha a Unidade de Medida");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleItemSelected = () => {
     if (salvar == false && fromOtherScreen) {
      setUnidadeMedida(unidadeMedidaParam);
      setUnidadeMedidaId(unidadeMedidaIdParam);
      console.warn(unidadeMedida, unidadeMedidaId);
    } else {
      setUnidadeMedida("Escolha a Unidade de Medida");
    } 
  };

  const handleOnPressChoice = () => {
    setSalvar(false);
    navigation.navigate("Unidades de Medida");
  }; */

  const [ativo, setAtivo] = useState(false);
  const [listaUnidadesMedida, setListaUnidadesMedida] = useState([]);
  const [unidadesSelecionadas, setUnidadesSelecionadas] = useState([]);
  const [grandeza, setGrandeza] = useState("");

  const { menuAtivo } = useSelector((state) => state.menuAtivo);
  const dispatch = useDispatch();

  const apresentaGrandezas = () => {
    setAtivo(true);
  };

  const sairDaSelecaoGrandezas = () => {
    setAtivo(false);
  };

  const selecionarGrandezas = (unidadeMedida, index) => {
    const novaListaUnidadeMedida = listaUnidadesMedida;
    novaListaUnidadeMedida.splice(index, 1);
    setListaUnidadesMedida([...novaListaUnidadeMedida]);
    setUnidadesSelecionadas([...unidadesSelecionadas, unidadeMedida]);
    setAtivo(false);
  };

  const removeGrandeza = (unidadeMedida, index) => {
    const novaListaSelecionados = unidadesSelecionadas;
    novaListaSelecionados.splice(index, 1);
    setUnidadesSelecionadas([...novaListaSelecionados]);
    setListaUnidadesMedida([...listaUnidadesMedida, unidadeMedida]);
  };

  const abrirFecharMenu = () => {
    dispatch(toggleMenu());
  };

  const telaAnterior = () => {
    console.log("tela anterior");
    navigation.goBack();
  };

  const handleaAddGrandeza = async () => {
    if (grandeza.trim().length == 0) {
      alertMessage("Atenção!", "Preencha o campo grandeza");
    } else if (unidadesSelecionadas.length == 0) {
      alertMessage("Atenção!", "Escolha a unidade de medida");
    } else {
      try {
        await criarGrandeza(new Grandeza(grandeza, unidadesSelecionadas));
        alertMessage("Sucesso!", "Cadastro realizado com sucesso!");
        setGrandeza("");
        setUnidadesSelecionadas([]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  //console.log(unidadesSelecionadas);
  useEffect(() => {
    listarUnidadeMedidas().then((resp) => {
      setListaUnidadesMedida(resp);
    });

    setUnidadesSelecionadas([]);
    setAtivo(false);
    setListaUnidadesMedida([]);
    setGrandeza("");
  }, []);

  return (
    <View style={styles.viewSize}>
      {ativo ? (
        <ListaItens
          listaItens={listaUnidadesMedida}
          tituloLista={"Unidades Medida"}
          sairDaSelecao={sairDaSelecaoGrandezas}
          selecionarItem={selecionarGrandezas}
          nomeItem={"nomeUnidade"}
        />
      ) : (
        ""
      )}
      <LinearGradient
        style={styles.container}
        colors={["#063E56", "#FFFFFF", "#FFFFFF"]}
      >
        <StatusBar backgroundColor="#063E56" barStyle={"light-content"} />
        <Cabecario abrirFecharMenu={abrirFecharMenu} />
        {menuAtivo ? <Menu navegar={navigation} /> : ""}
        <Titulo titulo={"Cadastro de Grandeza"} />
        <TextoEntrada
          mudarNomeConjunto={setGrandeza}
          placeholderValue={"Nome da Grandeza..."}
          inputValue={grandeza}
        />
        <View style={styles.line} />
        <BotaoAdicionar
          apresentaItens={apresentaGrandezas}
          nomeBotao={"Adicionar Unidades de Medida"}
        />
        <ScrollView style={styles.scrollSelecionado}>
          {unidadesSelecionadas.map((unidadeMedida, index) => {
            return (
              <ItemInformativo
                item={unidadeMedida}
                itemNome={"nomeUnidade"}
                index={index}
                removeItem={removeGrandeza}
              />
            );
          })}
        </ScrollView>
        <View style={{ justifyContent: "flex-end" }}>
          <Pressable onPress={handleaAddGrandeza}>
            <LinearGradient
              style={styles.containerSalvar}
              colors={["#184A5B", "#5B5A1E"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.botao2}> SALVAR </Text>
            </LinearGradient>
          </Pressable>
          <BotaoCancelar telaAnterior={() => navigation.goBack()} />
        </View>
      </LinearGradient>
    </View>
    /*{ <View>
      <LinearGradient
        style={styles.container}
        colors={["#FFFFFF", "#FFFFFF", "#063E56"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0.1 }}
      >
        <View style={styles.containerBarra}>
          <Image style={styles.caixa} source={imgBalao} />
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.caixa} source={imgMenu} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerInputs}>
          <View style={styles.containerTitulo2}>
            <Text style={styles.titulo}> Cadastro de Grandezas </Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={setGrandeza}
            placeholder="Nome da Grandeza..."
            value={grandeza}
          />
          <TouchableOpacity onPress={handleOnPressChoice}>
            <View style={styles.buttonEscolha}>
              <Text style={styles.titulo}>{unidadeMedida}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.buttomSavePos}>
            <ButtomSave handlePress={handleaAddGrandeza} />
          </View>
        </View>
      </LinearGradient>
    </View> }*/
  );
}
