import React, { useEffect, useState, Fragment} from "react";
import { View, ScrollView, StatusBar, Text} from "react-native";
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { listarGrandezas } from '../../../controllers/GrandezaController'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import { Menu } from "../../components/menu";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../../redux/menu";
import { BotaoSalvar } from "../../components/botaoSalvar";
import { Sensor } from "../../../models/SensorModel";
import { GrandezaSensor } from "../../../models/GrandezaSensorModel"
import { criarSensor } from "../../../controllers/SensorController";
import { criarGrandezaSensor } from "../../../controllers/GrandezaSensorController";
import { TextoEntrada } from "../../components/textoEntrada";
import { Titulo } from "../../components/titulo";
import { BotaoAdicionar } from "../../components/botaoAdicionar";
import { Cabecario } from "../../components/cabecario";
import { ItemInformativo } from "../../components/itemInformativo";
import { ListaItens } from "../../components/listaItens";
import { BotaoCancelar } from "../../components/botaoCancelar";

export default function Cadastro_sensores({navigation}){
    const [ativo, setAtivo] = useState(false)
    const [listaGrandezas, setListaGrandezas] = useState([])
    const [grandezasSelecionadas, setGrandezasSelecionadas] = useState([])
    const [nomeSensor, setNomeSensor] = useState()


    const {menuAtivo} = useSelector((state) => state.menuAtivo)
    const dispatch = useDispatch()

    const apresentaGrandezas = () => {
        setAtivo(true)
    }

    const sairDaSelecaoGrandezas = () => {
        setAtivo(false)
    }

    const selecionarGrandezas = (grandeza, index) => {
        const novaListaGrandeza = listaGrandezas
        novaListaGrandeza.splice(index, 1)
        setListaGrandezas([...novaListaGrandeza])
        setGrandezasSelecionadas([...grandezasSelecionadas, grandeza])
        setAtivo(false)
    }

    const removeGrandeza = (grandeza, index) => {
        const novaListaSelecionados = grandezasSelecionadas
        novaListaSelecionados.splice(index, 1)
        setGrandezasSelecionadas([...novaListaSelecionados])
        setListaGrandezas([...listaGrandezas, grandeza])
    }

    const abrirFecharMenu = () => {
        dispatch(toggleMenu())
    }

    const telaAnterior = () => {
        console.log("tela anterior")
        navigation.goBack()
    }

    useEffect(() =>{
        listarGrandezas()
        .then(resp => {
            setListaGrandezas(resp)
        })

        setGrandezasSelecionadas([])
        setAtivo(false)
        setListaGrandezas([])
        setNomeSensor("")
    }, [])
    
    return(
        <View style={style.viewSize}>
            
            { ativo ? (<ListaItens listaItens={listaGrandezas} tituloLista={"Grandezas"} sairDaSelecao={sairDaSelecaoGrandezas} selecionarItem={selecionarGrandezas} nomeItem={"nomeGrandeza"}/>) : "" }
            
 
            <LinearGradient style = {style.container}
                colors={['#063E56','#FFFFFF']} > 
                
                <StatusBar   
                    backgroundColor = "#063E56"
                    barStyle={"light-content"}
                /> 

                <Cabecario abrirFecharMenu={abrirFecharMenu}/>
                
                { menuAtivo ? ( <Menu navegar={navigation}/> ) : "" }
                
                <Titulo titulo={"CADASTRO DE SENSORES"}/>
                
                <TextoEntrada mudarNomeConjunto={setNomeSensor} placeholderValue={"Nome do sensor..."}  inputValue={nomeSensor}/>
                    
                <View style={style.line}></View>
                
                <BotaoAdicionar apresentaItens={apresentaGrandezas} nomeBotao={"ADICIONAR GRANDEZA"}/>
                    
                <ScrollView style={style.scrollSelecionado}>
                {
                    grandezasSelecionadas.map((grandeza, index) => {
                        return (
                        <ItemInformativo item={grandeza} itemNome={"nomeGrandeza"} index={index} removeItem={removeGrandeza}/>
                    )})
                }
                </ScrollView>
                        

                < BotaoSalvar funcao1={criarSensor} dados1={[nomeSensor]} Modal1={Sensor}
                              funcao2={criarGrandezaSensor} dados2={grandezasSelecionadas} Modal2={GrandezaSensor}/>      
            
                < BotaoCancelar telaAnterior={telaAnterior} />

             </LinearGradient>
        
        </View>
    );
}