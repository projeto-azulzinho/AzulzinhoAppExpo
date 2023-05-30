import React, { useEffect, useState} from "react";
import { View, ScrollView, StatusBar, Text} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { Menu } from "../../components/menu";
import { Titulo } from "../../components/titulo";
import { BotaoAdicionar } from "../../components/botaoAdicionar";
import { Cabecario } from "../../components/cabecario";
import { ItemInformativo } from "../../components/itemInformativo";
import { toggleMenu } from "../../../redux/menu";
import { listarSensores, deletarSensor } from "../../../controllers/SensorController";
import { deletarSensorDeConjunto } from "../../../controllers/SensorConjuntoController";

export default function Conjunto_sensores({navigation}){

    const [listaSensores, setListaSensores] = useState([])
    const {menuAtivo} = useSelector((state) => state.menuAtivo)
    const dispatch = useDispatch()

    const abrirFecharMenu = () => {
        dispatch(toggleMenu())
    }

    const removeSensor = (sensor, index) => {
        deletarSensorDeConjunto(sensor.id)
        deletarSensor(sensor.id)
        const novaLista = listaSensores
        novaLista.splice(index, 1)
        setListaSensores([...novaLista])
    }

    const editarSensor = () => {
        navigation.navigate("Cadastro de sensores")
    }

    useEffect(() =>{
        listarSensores()
        .then(res => setListaSensores(res))
    }, [])
    
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
                
                <Titulo titulo={"SENSORES"}/>
 
                <BotaoAdicionar adicionarItem={() => navigation.navigate("Cadastro de sensores")} nomeBotao={"ADICIONAR SENSOR"}/>
                    
                <ScrollView style={style.scrollSelecionado}>
                {
                    listaSensores.map((sensor, index) => {
                        return (
                        <ItemInformativo item={sensor} itemNome={"nomeSensor"} index={index} removeItem={removeSensor} editarItem={editarSensor}/>
                    )})
                }
                </ScrollView>

             </LinearGradient>
        
        </View>
    );
}