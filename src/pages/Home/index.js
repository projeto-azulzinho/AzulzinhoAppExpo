import React, { useEffect, useState} from "react";
import { View, ScrollView, StatusBar, Text} from "react-native";
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
import { listarConjuntos, deletarConjunto } from "../../controllers/ConjuntoController";
import { deletarSensoresConjunto } from "../../controllers/SensorConjuntoController";
import { CabecarioTabela } from "../../components/CabecarioTabela"
import { Tabela } from "../../components/Tabela"
import { BotaoColetar } from "../../components/BotaoColetar";
import { BotaoPararColeta } from "../../components/BotaoPararColeta";
import SelectDropdown from 'react-native-select-dropdown';

export default function Home({navigation}){

    const [conjuntoSelecionado, setConjuntoselecionado] = useState()
    const [updateListaConjunto, setUpdateListaConjunto] = useState(false)
    const [listaNomeConjuntos, setListaNomeCojuntos] = useState([])
    const [listaConjuntos, setListaCojuntos] = useState([])
    const [resultadoColeta, setResultadoColeta] = useState([])
    const {menuAtivo} = useSelector((state) => state.menuAtivo)
    const dispatch = useDispatch()

    const abrirFecharMenu = () => {
        dispatch(toggleMenu())
    }

    const resultadoSensores = (valores) => {
        setResultadoColeta(valores)
        console.log(resultadoColeta)
    }

    const removeConjunto = (conjunto, index) => {
        deletarSensoresConjunto(conjunto.id)
        deletarConjunto(conjunto.id)
        const novaLista = listaConjuntos
        novaLista.splice(index, 1)
        setListaCojuntos([...novaLista])
    }

    const editarCojunto = () => {
        navigation.navigate("Cadastro conjunto de sensores")
    }

    useEffect(() =>{
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
        listarConjuntos()
        .then(res => {
            const listaNomeConjunto = res.map(conjunto => conjunto.nomeConjunto.stringValue)
            const listaConjuntos = res.map(conjunto => conjunto)
            setListaNomeCojuntos(listaNomeConjunto)
            setListaCojuntos(listaConjuntos)
        })
    }, [updateListaConjunto])
    
    return(
        <View style={style.viewSize}>

            <LinearGradient style = {style.container}
                colors={['#063E56','#FFFFFF']} > 
                
                <StatusBar   
                    backgroundColor = "#063E56"
                    barStyle={"light-content"}
                /> 

                <Cabecario abrirFecharMenu={abrirFecharMenu}/>
                
                { menuAtivo ? ( <Menu navegar={navigation}/> ) : "" }
                
                <Titulo titulo={"LEITURA DE SENSORES"}/>

                <SelectDropdown
                    data={listaNomeConjuntos}
                    onSelect={(selectedItem, index) => {
                        setConjuntoselecionado(listaConjuntos[index])
                        console.log(conjuntoSelecionado)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    buttonStyle = {style.btnModoColeta}
                    buttonTextStyle = {style.nomeColeta}
                
                    renderDropdownIcon={isOpened => {
                        setUpdateListaConjunto(isOpened)
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                        }}
                    dropdownIconPosition={'right'}

                    defaultButtonText={'Selecione o conjunto'}
                />

                <CabecarioTabela />
                <Tabela resultado={resultadoColeta} conjunto={conjuntoSelecionado}/>
                <BotaoColetar funcao={resultadoSensores}/>
                {/* <BotaoPararColeta /> */}
                
             </LinearGradient>
        
        </View>
    );
}