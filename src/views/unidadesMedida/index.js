import React, { useEffect, useState } from "react";
import { styles } from "./style";
import {
  deletarGrandeza,
  listarGrandezas,
} from "../../controllers/GrandezaController";
import { View, Text, Image, FlatList, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import imgBalao from "../../assets/balao-de-ar-quente.png";
import imgMenu from "../../assets/barra-de-menu.png";
import imgDelete from "../../assets/marca-cruzada.png";
import {
  deletarUnidadeMedida,
  listarUnidadeMedidas,
} from "../../controllers/UnidadeMedidaController";

export function UnidadesMedida({ route, navigation }) {
  const [listaUnidadeMedida, setListaUnidadeMedida] = useState([]);

  const { fromAnotherScreen } = route.params;

  const handlePressItem = (id, nome) => {
    if (fromAnotherScreen) {
      navigation.navigate("Cadastro de grandezas", {
        fromOtherScreen: true,
        unidadeMedidaParam: nome,
        unidadeMedidaIdParam: id,
      });
    }
  };

  const deleteUnidadeMedida = async (id) => {
    try {
      Alert.alert("Atenção!", "Deseja deletar esta unidade de medida?", [
        { text: "Cancelar", onPress: () => console.log("Cancel Pressed") },
        { text: "Sim", onPress: async () => await deletarUnidadeMedida(id) },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  const listUnidadeMedida = async () => {
    const data = await listarUnidadeMedidas();
    setListaUnidadeMedida(data);
  };

  useEffect(() => {
    listUnidadeMedida();
  }, []);

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
            <Text style={styles.titulo}>Unidades de Medida</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cadastro de unidade de medida")}
          >
            <View style={styles.buttonEscolha}>
              <Text style={{ color: "#013850", fontWeight: "500" }}>
                Adicionar Unidade de Medida
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.backList}>
            <FlatList
              data={listaUnidadeMedida}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item, index }) => {
                return (
                  <View key={index} style={styles.itemStyle}>
                    <TouchableOpacity
                      onPress={() =>
                        handlePressItem(
                          item.id,
                          item.nomeUnidade["stringValue"]
                        )
                      }
                    >
                      <Text style={styles.textStyle}>
                        {item.nomeUnidade["stringValue"]}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteUnidadeMedida(item.id)}
                    >
                      <Image style={styles.imgDeleteItem} source={imgDelete} />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
