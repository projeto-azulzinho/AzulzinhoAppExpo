import React, { useEffect, useState } from "react";
import { style } from "./style";
import {
  View,
  Image,
  Text,
  FlatList,
  Alert,
  StatusBar,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  deletarUnidadeMedida,
  listarUnidadeMedidas,
} from "../../controllers/UnidadeMedidaController";

import { Menu } from "../../components/Menu";
import { Titulo } from "../../components/Titulo";
import { BotaoAdicionar } from "../../components/BotaoAdicionar";
import { Cabecario } from "../../components/Cabecario";
import imgDelete from "../../assets/marca-cruzada.png";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menu";

export function UnidadesMedida({ route, navigation }) {
  const [listaUnidadeMedida, setListaUnidadeMedida] = useState([]);
  const { menuAtivo } = useSelector((state) => state.menuAtivo);
  const dispatch = useDispatch();

  const abrirFecharMenu = () => {
    dispatch(toggleMenu());
  };

  const removerUnidadeMedida = async (unidadeMedida, index) => {
    await deletarUnidadeMedida(unidadeMedida.id);
    const novaLista = listaUnidadeMedida;
    novaLista.splice(index, 1);
    setListaUnidadeMedida([...novaLista]);
  };

  const deleteUnidadeMedida = async (unidadeMedida, index) => {
    try {
      Alert.alert("Atenção!", "Deseja deletar esta unidade de medida?", [
        { text: "Cancelar", onPress: () => console.log("Cancel Pressed") },
        {
          text: "Sim",
          onPress: async () => await removerUnidadeMedida(unidadeMedida, index),
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const emptyListUnidadesMedida = () => {
    return (
      <View style={style.listEmpty}>
        <Text style={style.textEmpty}>
          Você não possui unidade de medida cadastrada
        </Text>
      </View>
    );
  };

  useEffect(() => {
    listarUnidadeMedidas().then((res) => setListaUnidadeMedida(res));
  }, [listaUnidadeMedida]);

  return (
    <View style={style.viewSize}>
      <LinearGradient
        style={style.container}
        colors={["#063E56", "#FFFFFF", "#FFFFFF"]}
      >
        <StatusBar backgroundColor="#063E56" barStyle={"light-content"} />
        <Cabecario abrirFecharMenu={abrirFecharMenu} />
        {menuAtivo ? <Menu navegar={navigation} /> : ""}
        <Titulo titulo={"Unidades de Medida"} />
        <BotaoAdicionar
          adicionarItem={() => navigation.navigate("Cadastro Unidades Medida")}
          nomeBotao={"Adicionar Unidade de Medida"}
        />
        <View style={style.backList}>
          <FlatList
            data={listaUnidadeMedida}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={emptyListUnidadesMedida}
            renderItem={({ item, index }) => {
              return (
                <View key={index} style={style.itemStyle}>
                  <Text style={style.textStyle}>
                    {item.nomeUnidade["stringValue"]}
                  </Text>
                  <Pressable onPress={() => deleteUnidadeMedida(item, index)}>
                    <Image style={style.imgDeleteItem} source={imgDelete} />
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
        <StatusBar backgroundColor="#063E56" barStyle={"light-content"} />
        <Cabecario abrirFecharMenu={abrirFecharMenu} />
        {menuAtivo ? <Menu navegar={navigation} /> : ""}
        <View style={styles.containerBarra}>
          <Image style={styles.caixa} source={imgBalao} />
          <TouchableOpacity onPress={abrirFecharMenu}>
            <Image style={styles.caixa} source={imgMenu} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerInputs}>
          <View style={styles.containerTitulo2}>
            <Text style={styles.titulo}>Unidades de Medida</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cadastro Unidades Medida")}
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
    </View> }*/
  );
}
