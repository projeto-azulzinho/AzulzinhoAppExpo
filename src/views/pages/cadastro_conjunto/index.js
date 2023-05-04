import React, { useEffect, useState, Fragment} from "react";
import { View, ScrollView, StatusBar, Text} from "react-native";
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { listarSensores } from "../../../controllers/SensorController";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import { Menu } from "../../components/menu";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../../redux/menu";
import { BotaoSalvar } from "../../components/botaoSalvar";
import { Conjunto } from "../../../models/ConjuntoModel";
import { SensorConjunto } from "../../../models/SensorConjuntoModel";
import { criarConjunto } from "../../../controllers/ConjuntoController";
import { criarSensorConjunto } from "../../../controllers/SensorConjuntoController";
import { TextoEntrada } from "../../components/textoEntrada";
import { Titulo } from "../../components/titulo";
import { BotaoAdicionar } from "../../components/botaoAdicionar";
import { Cabecario } from "../../components/cabecario";
import { ItemInformativo } from "../../components/itemInformativo";
import { ListaItens } from "../../components/listaItens";
import { TextInput } from "react-native-gesture-handler";
import { BotaoCancelar } from "../../components/botaoCancelar";

export default function Cadastro_conjunto({navigation}){
    const [ativo, setAtivo] = useState(false)
    const [listaSensores, setListaSensores] = useState([])
    const [sensoresSelecionados, setSensoresSelecionados] = useState([])
    const modosColeta = ['Automatico', 'Manual']
    const [nomeConjunto, setNomeConjunto] = useState()
    const [modoColeta, setModoColeta] = useState()
    const [tempoColeta, setTempoColeta] = useState()

    const {menuAtivo} = useSelector((state) => state.menuAtivo)
    const dispatch = useDispatch()

    const apresentaSensores = () => {
        setAtivo(true)
    }

    const sairDaSelecaoSensor = () => {
        setAtivo(false)
    }

    const selecionarSensor = (sensor, index) => {
        const novaListaSensres = listaSensores
        novaListaSensres.splice(index, 1)
        setListaSensores([...novaListaSensres])
        setSensoresSelecionados([...sensoresSelecionados, sensor])
        setAtivo(false)
    }

    const removeSensor = (sensor, index) => {
        const novaListaSelecionados = sensoresSelecionados
        novaListaSelecionados.splice(index, 1)
        setSensoresSelecionados([...novaListaSelecionados])
        setListaSensores([...listaSensores, sensor])
    }

    const abrirFecharMenu = () => {
        dispatch(toggleMenu())
    }

    const telaAnterior = () => {
        console.log("tela anterior")
        navigation.goBack()
    }

    useEffect(() =>{
        listarSensores()
        .then(resp => {
            setListaSensores(resp)
        })

        setSensoresSelecionados([])
        setAtivo(false)
        setListaSensores([])
        setModoColeta()
        setNomeConjunto("")
        setTempoColeta()
    }, [])
    
    return(
        <View style={style.viewSize}>
            
            { ativo ? (<ListaItens listaItens={listaSensores} tituloLista={"Sensores"} sairDaSelecao={sairDaSelecaoSensor} selecionarItem={selecionarSensor} nomeItem={"nomeSensor"}/>) : "" }
            
 
            <LinearGradient style = {style.container}
                colors={['#063E56','#FFFFFF']} > 
                
                <StatusBar   
                    backgroundColor = "#063E56"
                    barStyle={"light-content"}
                /> 

                <Cabecario abrirFecharMenu={abrirFecharMenu}/>
                
                { menuAtivo ? ( <Menu navegar={navigation}/> ) : "" }
                
                <Titulo titulo={"CADASTRO DE CONJUNTO DE SENSORES"}/>
                
                <TextoEntrada mudarNomeConjunto={setNomeConjunto} placeholderValue={"Nome do conjunto..."}  inputValue={nomeConjunto}/>
                    

                <SelectDropdown
                    data={modosColeta}
                    onSelect={(selectedItem, index) => {
                        setModoColeta(index)
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
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                        }}
                    dropdownIconPosition={'right'}

                    defaultButtonText={'Selecione o modo de coleta'}
                />

                {modoColeta == 0 ? (
                    <View style={style.tempoContainer}>
                        <TextInput style={style.tempo} placeholder="1.0" onChangeText={setTempoColeta} value={tempoColeta}></TextInput>
                        <View style={style.unidadeTempo}>
                            <Text style={style.textoUnidadeTempo}>S</Text>
                        </View>
                    </View>
                ):""}
                    
                <View style={style.line}></View>
                
                <BotaoAdicionar apresentaItens={apresentaSensores} nomeBotao={"ADICIONAR SENSOR"}/>
                
                    
                <ScrollView style={style.scrollSelecionado}>
                {
                    sensoresSelecionados.map((sensor, index) => {
                        return (
                        <ItemInformativo item={sensor}  itemNome={"nomeSensor"} index={index} removeItem={removeSensor}/>
                    )})
                }
                </ScrollView>
                        

                < BotaoSalvar funcao1={criarConjunto} dados1={[nomeConjunto, modoColeta, tempoColeta]} Modal1={Conjunto}
                              funcao2={criarSensorConjunto} dados2={sensoresSelecionados} Modal2={SensorConjunto}/>      
            
                < BotaoCancelar telaAnterior={telaAnterior} />

             </LinearGradient>
        
        </View>
    );
}