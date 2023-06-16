import React, { useState } from "react";
import { criarGrandeza } from "../../controllers/GrandezaController";
import { Grandeza } from "../../models/GrandezaModel";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import {
  criarUnidadeMedida,
  listarUnidadeMedidas,
} from "../../controllers/UnidadeMedidaController";
import imgBalao from "../../assets/balao-de-ar-quente.png";
import imgMenu from "../../assets/barra-de-menu.png";
import { UnidadeMedida } from "../../models/UnidadeMedidaModel";

export function CadastroUnidadeMedida({ navigation }) {
  const [unidadeMedida, setUnidadeMedida] = useState("");

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
    </View>
  );
}
const styles = StyleSheet.create({
  textUM: {
    fontWeight: "500",
  },
  buttomUM: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,

    height: 50,
    width: "70%",
  },
  textModal: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 20,

    marginBottom: 40,
  },
  buttomSavePos: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  textStyle: {
    fontWeight: "700",
    fontSize: 20,
    color: "#fff",
  },
  itemStyle: {
    display: "flex",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",

    padding: 5,
    marginLeft: 30,
    marginRight: 30,
    marginVertical: 8,
  },
  modalBody: {
    width: "80%",
    height: "50%",
    borderRadius: 30,
  },
  backModal: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#013850",
  },
  buttonEscolha: {
    backgroundColor: "#013850",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#013850",
    opacity: 0.7,
  },
  textEscolha: {
    color: "#ffffff",
  },
  textInput: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,

    borderWidth: 1,
    borderColor: "#013850",
  },
  containerInputs: {
    flex: 2,
    //backgroundColor: "#ffffff",
    marginLeft: 30,
    marginRight: 30,
    gap: 30,
  },
  container: {
    width: "100%",
    height: "100%",
  },
  containerBarra: {
    paddingTop: "20%",
    paddingBottom: "10%",
    paddingLeft: "10%",
    paddingRight: "10%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  espacamento: {
    // width: 25,
    // height: 20,
    // backgroundColor: "#000200",
    // borderTopStartRadius: 10,
    // borderTopEndRadius: 10,
    // borderBottomStartRadius: 30,
    // borderBottomEndRadius: 30,
    paddingTop: "10%",
  },

  espacamento2: {
    // width: 25,
    // height: 20,
    // backgroundColor: "#000200",
    // borderTopStartRadius: 10,
    // borderTopEndRadius: 10,
    // borderBottomStartRadius: 30,
    // borderBottomEndRadius: 30,
    paddingTop: "90%",
  },

  containerTitulo: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  containerTitulo2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#013850",
    height: 65,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,

    elevation: 3,
  },

  titulo: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  NomeSensor: {
    color: "#BFBFBF",
    paddingLeft: "1%",
  },

  Sensores: {
    color: "#000000",
    paddingLeft: "1%",
  },

  containerNomeSensor: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 2,
    height: 45,
    paddingTop: 12,
    paddingLeft: 7,
    paddingRight: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  containerInputGrandezas: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 2,
    height: 45,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  botaoGrandeza: {
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 3,
    height: 45,
    paddingTop: 5,
    paddingLeft: 10,
  },

  botao: {
    color: "#000000",
    paddingLeft: 90,
    paddingTop: 5,
  },

  botao2: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  containerSalvar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,
    height: 50,
    padding: 5,
    marginBottom: 20,
  },
});
