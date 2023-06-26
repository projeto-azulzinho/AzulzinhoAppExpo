import React, { useEffect, useState } from "react";
import { styles } from "./style";
import {
  deletarGrandeza,
  listarGrandezas,
} from "../../controllers/GrandezaController";
import {
  View,
  Text,
  Image,
  FlatList,
  Alert,
  StatusBar,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import imgBalao from "../../assets/balao-de-ar-quente.png";
import imgMenu from "../../assets/barra-de-menu.png";
import imgDelete from "../../assets/marca-cruzada.png";

import { Menu } from "../../components/Menu";
import { Titulo } from "../../components/Titulo";
import { BotaoAdicionar } from "../../components/BotaoAdicionar";
import { Cabecario } from "../../components/Cabecario";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menu";

export function Grandezas({ route, navigation }) {
  const [listaGrandezas, setListaGrandezas] = useState([]);
  const { menuAtivo } = useSelector((state) => state.menuAtivo);
  const dispatch = useDispatch();

  const abrirFecharMenu = () => {
    dispatch(toggleMenu());
  };

  const removerGrandeza = async (grandeza, index) => {
    await deletarGrandeza(grandeza.id);
    const novaLista = listaGrandezas;
    novaLista.splice(index, 1);
    setListaGrandezas([...novaLista]);
  };

  const deleteGrandeza = async (grandeza, index) => {
    try {
      Alert.alert("Atenção!", "Deseja deletar esta grandeza?", [
        { text: "Cancelar", onPress: () => console.log("Cancel Pressed") },
        {
          text: "Sim",
          onPress: async () => await removerGrandeza(grandeza, index),
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  /* const listGrandezas = async () => {
    const data = await listarGrandezas();
    setListaGrandezas(data);
    console.log(data);
  }; */

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
    listarGrandezas().then((res) => setListaGrandezas(res));
  }, []);

  return (
    <View style={styles.viewSize}>
      <LinearGradient
        style={styles.container}
        colors={["#063E56", "#FFFFFF", "#FFFFFF"]}
      >
        <StatusBar backgroundColor="#063E56" barStyle={"light-content"} />
        <Cabecario abrirFecharMenu={abrirFecharMenu} />
        {menuAtivo ? <Menu navegar={navigation} /> : ""}
        <Titulo titulo={"Grandezas"} />
        <BotaoAdicionar
          adicionarItem={() => navigation.navigate("Cadastro Grandezas")}
          nomeBotao={"Adicionar Grandeza"}
        />
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
                  <Pressable onPress={() => deleteGrandeza(item, index)}>
                    <Image style={styles.imgDeleteItem} source={imgDelete} />
                  </Pressable>
                </View>
              );
            }}
          />
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
            <Text style={styles.titulo}>Grandezas</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cadastro Grandezas")}
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
    </View> }*/
  );
}
