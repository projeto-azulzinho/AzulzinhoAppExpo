import React, { useEffect, useState } from "react";
import { criarGrandeza } from "../../controllers/GrandezaController";
import { Grandeza } from "../../models/GrandezaModel";
import { View, Text, TextInput, Image, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import imgBalao from "../../assets/balao-de-ar-quente.png";
import imgMenu from "../../assets/barra-de-menu.png";
import { ButtomSave } from "../../components/ButtomSave";
import styles from "./style";

export function CadastroGrandezas({ route, navigation }) {
  const [grandeza, setGrandeza] = useState("");
  const [unidadeMedidaId, setUnidadeMedidaId] = useState("");
  const [unidadeMedida, setUnidadeMedida] = useState(
    "Escolha a Unidade de Medida"
  );
  const [salvar, setSalvar] = useState(false);
  const { fromOtherScreen, unidadeMedidaParam, unidadeMedidaIdParam } =
    route.params;

  console.warn(route.params);
  const handleaAddGrandeza = async () => {
    if (grandeza.trim().length == 0) {
      Alert.alert("Atenção!", "Preencha o campo grandeza", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else if (unidadeMedida == "Escolha a Unidade de Medida") {
      Alert.alert("Atenção!", "Escolha a unidade de medida", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      try {
        await criarGrandeza(new Grandeza(grandeza, unidadeMedidaId));
        Alert.alert("Sucesso!", "Cadastro realizado com sucesso!", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
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
    navigation.navigate("Unidades de Medida", {
      fromAnotherScreen: true,
    });
  };

  useEffect(() => {
    handleItemSelected();
  }, [handleItemSelected]);

  return (
    <View>
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
    </View>
  );
}
