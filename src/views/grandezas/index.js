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

export function Grandezas({ route, navigation }) {
  const [listaGrandezas, setListaGrandezas] = useState([]);
  const { fromOtherScreen, unidadeMedidaParam, unidadeMedidaIdParam } =
    route.params;

  console.log(route.params);
  const deleteGrandeza = async (id) => {
    try {
      Alert.alert("Atenção!", "Deseja deletar esta grandeza?", [
        { text: "Cancelar", onPress: () => console.log("Cancel Pressed") },
        { text: "Sim", onPress: async () => await deletarGrandeza(id) },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  const listGrandezas = async () => {
    const data = await listarGrandezas();
    setListaGrandezas(data);
    console.log(data);
  };

  const emptyListGrandezas = () => {
    return (
      <View style={styles.listEmpty}>
        <Text style={styles.textEmpty}>
          Você não possui grandeza cadastrada
        </Text>
      </View>
    );
  };

  useEffect(() => {
    listGrandezas();
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
            <Text style={styles.titulo}>Grandezas</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cadastro de grandezas")}
          >
            <View style={styles.buttonEscolha}>
              <Text style={{ color: "#013850", fontWeight: "500" }}>
                Adicionar Grandeza
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.backList}>
            <FlatList
              data={listaGrandezas}
              keyExtractor={(item) => String(item.id)}
              ListEmptyComponent={emptyListGrandezas}
              renderItem={({ item, index }) => {
                return (
                  <View key={index} style={styles.itemStyle}>
                    <Text style={styles.textStyle}>
                      {item.nomeGrandeza["stringValue"]}
                    </Text>
                    <TouchableOpacity onPress={() => deleteGrandeza(item.id)}>
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
