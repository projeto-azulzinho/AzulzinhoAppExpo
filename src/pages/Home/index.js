import React, { useEffect, useState } from "react";
import { View, ScrollView, StatusBar, Text, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from "react-redux";
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { Menu } from "../../components/Menu";
import { Titulo } from "../../components/Titulo";
import { BotaoAdicionar } from "../../components/BotaoAdicionar";
import { Cabecario } from "../../components/Cabecario";
import { ItemInformativo } from "../../components/ItemInformativo";
import { toggleMenu } from "../../redux/menu";
import { listarConjuntos, deletarConjunto, atualizarConjunto } from "../../controllers/ConjuntoController";
import { deletarSensoresConjunto } from "../../controllers/SensorConjuntoController";
import { CabecarioTabela } from "../../components/CabecarioTabela"
import { Tabela } from "../../components/Tabela"
import { BotaoColetar } from "../../components/BotaoColetar";
import { BotaoPararColeta } from "../../components/BotaoPararColeta";
import SelectDropdown from 'react-native-select-dropdown';

export default function Home({ navigation }) {
  const [conjuntoSelecionado, setConjuntoselecionado] = useState();
  const [listaNomeConjuntos, setListaNomeCojuntos] = useState([]);
  const [listaConjuntos, setListaCojuntos] = useState([]);
  const [resultadoColeta, setResultadoColeta] = useState([]);
  const [getData, setGetData] = useState(false)
  const { menuAtivo } = useSelector((state) => state.menuAtivo);
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();

  const abrirFecharMenu = () => {
    dispatch(toggleMenu());
  };

  const [dadosColetados, setDadosColetados] = useState([]);

  const resultadoSensores = (valores) => {
  
    setDadosColetados(valores);
  };

  const removeConjunto = (conjunto, index) => {
    deletarSensoresConjunto(conjunto.id);
    deletarConjunto(conjunto.id);
    const novaLista = listaConjuntos;
    novaLista.splice(index, 1);
    setListaCojuntos([...novaLista]);
  };

  const getDataTrue = () => {
    setGetData(true)
  }

  const getDataFalse = () => {
    setGetData(false)
  }

  const editarCojunto = () => {
    navigation.navigate("Cadastro conjunto de sensores");
  };

  useEffect(() => {
    listarConjuntos()
    .then( res => {
      const listaNomeConjunto = res.map(conjunto => conjunto.nomeConjunto.stringValue);
      setListaNomeCojuntos(listaNomeConjunto);
      setListaCojuntos(res);
    });
    console.log(conjuntoSelecionado?.id);
  }, [conjuntoSelecionado]);
  return (
    <View style={style.viewSize}>
      <LinearGradient style={style.container} colors={['#063E56', '#FFFFFF']}>
        <StatusBar
          backgroundColor="#063E56"
          barStyle="light-content"
        />

        <Cabecario abrirFecharMenu={abrirFecharMenu} onAbrirFecharMenu={abrirFecharMenu} />

        {menuAtivo ? <Menu navegar={navigation} /> : ""}

        <Titulo titulo={"LEITURA DE SENSORES"} />

        <SelectDropdown
          data={listaNomeConjuntos}
          onSelect={(selectedItem, index) => {
            setConjuntoselecionado(listaConjuntos[index]);
            console.log(conjuntoSelecionado);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            async function fetchData() {
              try {
                const response = await fetch('http://192.168.1.10:3000/leitura');
                const text = await response.text();
                setResultadoColeta(text)
              } catch (error) {
                console.error(error);
              }
            }
            fetchData();

            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={style.btnModoColeta}
          buttonTextStyle={style.nomeColeta}
          renderDropdownIcon={isOpened => {
            // setUpdateListaConjunto(isOpened); // Removi essa linha porque não parece ser necessária
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          defaultButtonText={'Selecione o conjunto'}
        />

        <CabecarioTabela />
        <Tabela 
          resultado={dadosColetados} 
          conjunto={conjuntoSelecionado} 
          getData={getData} 
          getDataFalse={getDataFalse}
          setResult={setResult}
          result={result}
        />

        <BotaoColetar funcao={resultadoSensores} getDataTrue={getDataTrue} result={result}/>
        {/* <BotaoPararColeta /> */}
      </LinearGradient>
    </View>
  );
}