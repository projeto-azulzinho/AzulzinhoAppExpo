import React, { useEffect, useState } from "react";
import { View, ScrollView, StatusBar, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import style from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { Menu } from "../../components/Menu";
import { Titulo } from "../../components/Titulo";
import { BotaoAdicionar } from "../../components/BotaoAdicionar";
import { Cabecario } from "../../components/Cabecario";
import { ItemInformativo } from "../../components/ItemInformativo";
import { toggleMenu } from "../../redux/menu";
import {
  listarConjuntos,
  deletarConjunto,
} from "../../controllers/ConjuntoController";
import {
  deletarSensoresConjunto,
  getSensorDeConjunto,
} from "../../controllers/SensorConjuntoController";
import { CabecarioTabela } from "../../components/CabecarioTabela";
import { Tabela } from "../../components/Tabela";
import { BotaoColetar } from "../../components/BotaoColetar";
import { BotaoPararColeta } from "../../components/BotaoPararColeta";
import SelectDropdown from "react-native-select-dropdown";
import { getSensor, listarSensores } from "../../controllers/SensorController";

export default function Home({ navigation }) {
  const [listSensores, setListSensores] = useState([]);
  const [conjuntoSelecionado, setConjuntoselecionado] = useState();
  const [updateListaConjunto, setUpdateListaConjunto] = useState(false);
  const [listaNomeConjuntos, setListaNomeCojuntos] = useState([]);
  const [listaConjuntos, setListaCojuntos] = useState([]);
  const [resultadoColeta, setResultadoColeta] = useState([]);
  const [getData, setGetData] = useState(false);
  const [result, setResult] = useState([]);
  const { menuAtivo } = useSelector((state) => state.menuAtivo);
  const dispatch = useDispatch();

  const abrirFecharMenu = () => {
    dispatch(toggleMenu());
  };

  const getDataTrue = () => {
    setGetData(true);
  };

  const getDataFalse = () => {
    setGetData(false);
  };

  const resultadoSensores = (valores) => {
    //VOLTAR AQUIII!!!!
    //setResultadoColeta(valores);
    setResultadoColeta(
      "Sensor_Chuva|1024|Humidade|59.00|Temperatura|26.00|Pressão|97883.00|Altitude|290.85|TemperaturaBMP|29.20"
    );
    console.log(resultadoColeta);
    const resp = setSensores(resultadoColeta);
    resp.map((dado, index) => {
      console.log(dado, index);
    });
    const dado = {};
    setListSensores(setSensores());
    //const listSensores = setSensores(resultadoColeta);
    //console.log(listSensores);
  };

  const removeConjunto = (conjunto, index) => {
    deletarSensoresConjunto(conjunto.id);
    deletarConjunto(conjunto.id);
    const novaLista = listaConjuntos;
    novaLista.splice(index, 1);
    setListaCojuntos([...novaLista]);
  };

  const editarCojunto = () => {
    navigation.navigate("Cadastro conjunto de sensores");
  };

  async function setSensores() {
    setResultadoColeta(
      "Sensor_Chuva|1024|Humidade|59.00|Temperatura|26.00|Pressão|97883.00|Altitude|290.85|TemperaturaBMP|29.20"
    );
    if (resultadoColeta.length != 0) {
      let resultado_final = resultadoColeta.split("|");
      let ress = [];
      const respListaSensores = await listarSensores();
      const respSensoresConjuntos = await getSensorDeConjunto(
        conjuntoSelecionado.id
      );
      respSensoresConjuntos.forEach((sensoresId) => {
        const found = respListaSensores.find(
          (element) => element.id === sensoresId
        );
        index = resultado_final.indexOf(found.nomeSensor.stringValue);
        if (index !== -1) {
          ress.push(resultado_final.splice(index, 2));
          setResult(...result, ress);
        }
      });
      setListSensores(ress);
    }
  }
  /* const setSensores = (resultado) => {
    if (resultado.length != 0) {
      

      let ress = [];
      //console.log(resultado);
      getSensorDeConjunto(conjuntoSelecionado.id).then((sensores) => {
        console.log(sensores);
        sensores.forEach((sensorId) => {
          getSensor(sensorId).then((sensor) => {
            index = resultado_final.indexOf(sensor.nomeSensor.stringValue);
            if (index !== -1) {
              ress.push(resultado_final.splice(index, 2));
              setResult(...result, ress);
            }
          });
        });
      });
      //console.log(ress);
      return ress;
    }
  }; */

  //console.log(conjuntoSelecionado);
  useEffect(() => {
    //     async function fetchData() {
    //     try {
    //       const response = await fetch('http://192.168.1.10:3000/leitura');
    //       const text = await response.text();
    //       setResultadoColeta(text);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

    //   fetchData();
    listarConjuntos().then((res) => {
      const listaNomeConjunto = res.map(
        (conjunto) => conjunto.nomeConjunto.stringValue
      );
      const listaConjuntos = res.map((conjunto) => conjunto);
      setListaNomeCojuntos(listaNomeConjunto);
      setListaCojuntos(listaConjuntos);
    });
  }, [updateListaConjunto]);

  return (
    <View style={style.viewSize}>
      <LinearGradient style={style.container} colors={["#063E56", "#FFFFFF"]}>
        <StatusBar backgroundColor="#063E56" barStyle={"light-content"} />

        <Cabecario abrirFecharMenu={abrirFecharMenu} />

        {menuAtivo ? <Menu navegar={navigation} /> : ""}

        <Titulo titulo={"LEITURA DE SENSORES"} />

        <SelectDropdown
          data={listaNomeConjuntos}
          onSelect={(selectedItem, index) => {
            setConjuntoselecionado(listaConjuntos[index]);
            //console.log(conjuntoSelecionado);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={style.btnModoColeta}
          buttonTextStyle={style.nomeColeta}
          renderDropdownIcon={(isOpened) => {
            setUpdateListaConjunto(isOpened);
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#444"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          defaultButtonText={"Selecione o conjunto"}
        />

        <CabecarioTabela />
        <Tabela dadosProntos={listSensores} />
        <BotaoColetar funcao={setSensores} />
        {/* <BotaoPararColeta /> */}
      </LinearGradient>
    </View>
  );
}
