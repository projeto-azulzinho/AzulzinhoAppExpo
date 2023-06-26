import React, { useState } from "react";
import { View, Text, StatusBar, Alert } from "react-native";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { criarUnidadeMedida } from "../../controllers/UnidadeMedidaController";

import { UnidadeMedida } from "../../models/UnidadeMedidaModel";

import { Menu } from "../../components/Menu";
import { Titulo } from "../../components/Titulo";
import { Cabecario } from "../../components/Cabecario";
import { TextoEntrada } from "../../components/TextoEntrada";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menu";
import { BotaoCancelar } from "../../components/BotaoCancelar";

export function CadastroUnidadeMedida({ navigation }) {
  const [unidadeMedida, setUnidadeMedida] = useState("");
  const { menuAtivo } = useSelector((state) => state.menuAtivo);
  const dispatch = useDispatch();

  const abrirFecharMenu = () => {
    dispatch(toggleMenu());
  };

  const handleaAddGrandeza = async () => {
    if (unidadeMedida.trim().length == 0) {
      Alert.alert("Atenção!", "Preencha o campo unidade de medida", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      try {
        await criarUnidadeMedida(new UnidadeMedida(unidadeMedida));
        Alert.alert("Sucesso!", "Cadastro realizado com sucesso!", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        setUnidadeMedida("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.viewSize}>
      <LinearGradient
        style={styles.container}
        colors={["#063E56", "#FFFFFF", "#FFFFFF"]}
      >
        <StatusBar backgroundColor="#063E56" barStyle={"light-content"} />
        <Cabecario abrirFecharMenu={abrirFecharMenu} />
        {menuAtivo ? <Menu navegar={navigation} /> : ""}
        <Titulo titulo={"Cadastro de Unidade de Medida"} />
        <TextoEntrada
          mudarNomeConjunto={setUnidadeMedida}
          placeholderValue={"Nome Unidade de Medida..."}
          inputValue={unidadeMedida}
        />
        <View style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <TouchableOpacity onPress={handleaAddGrandeza}>
            <LinearGradient
              style={styles.containerSalvar}
              colors={["#184A5B", "#5B5A1E"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.botao2}> SALVAR </Text>
            </LinearGradient>
          </TouchableOpacity>
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
            <Text style={styles.titulo}> Cadastro de Unidades de Medida </Text>
          </View>

          <TextInput
            style={styles.textInput}
            onChangeText={setUnidadeMedida}
            placeholder="Nome da Unidade de Medida..."
            value={unidadeMedida}
          />

          <View style={styles.buttomSavePos}>
            <TouchableOpacity onPress={handleaAddGrandeza}>
              <LinearGradient
                style={styles.containerSalvar}
                colors={["#184A5B", "#5B5A1E"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.botao2}> SALVAR </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View> }*/
  );
}
