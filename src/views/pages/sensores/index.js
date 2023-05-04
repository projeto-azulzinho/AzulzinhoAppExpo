import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Image, ScrollView, Pressable} from "react-native";
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { listarSensores, deletarSensor } from "../../../controllers/SensorController";
import { Menu } from "../../components/menu";
const Navigation = require('react-native-navigation');


export default function Sensores({navigation}){
    const [listaSensores, setListaSensores] = useState([])
    const [ loading, setLoading] = useState(true)
    const [menuAtivo, setMenuAtivo] = useState(false)

    const handleCadastrarSensor = () => {
        navigation.navigate('Cadastro de sensores')
        console.log("chegou aqui")
    }
    const deleteSensor = (id) => {
        deletarSensor(id)
        .then(res => console.log(res))

        listarSensores()
        .then(resp => setListaSensores(resp))
    }

    const updateSensor = (sensor) => {
        navigation.navigate('Cadastro de sensores', {sensor: sensor})
    }

    const abrirFecharMenu = () => {
        setMenuAtivo(!menuAtivo)
    }

    useEffect(() => {
        listarSensores()
        .then(resp => {
            setListaSensores(resp)
            setLoading(false)
        })
    }, [])

    return(
        <View>          
            <LinearGradient style = {style.container}
             colors={['#063E56','#FFFFFF']}>

                <View style = {style.containerBarra}>
                   <Image style = {style.caixa} source = {require('../../../../assets/balao-de-ar-quente.png')}/>             
                   <Pressable onPress={abrirFecharMenu}>
                        <Image style = {style.caixa} source = {require('../../../../assets/barra-de-menu.png')}/>             
                    </Pressable>
                </View>

                { menuAtivo ? ( <Menu navegar={navigation}/> ) : "" }

                <View style = {style.containerTitulo}>
                    <View style = {style.containerTitulo2}>
                        <Text style = {style.titulo}> Sensores </Text>
                    </View>

                    <View style = {style.espacamento}></View>
                    <View style = {style.botaoGrandeza} >
                        <Text title = "teste" style = {style.botao} onPress={handleCadastrarSensor}> Adiciona Sensor </Text>
                    </View>

                    <View style = {style.espacamento}></View>

                    <ScrollView style = {style.scroll}>
                        {    
                            listaSensores.map((sensor) => {
                                return (
                                <View style = {style.containerNomeSensor} key={sensor.id}>                      
                                    <Text style = {style.Sensores} onPress={() => updateSensor(sensor)}>{sensor.nomeSensor.stringValue}</Text>
                                    <Pressable onPress={() => deleteSensor(sensor.id)}>
                                        <Image style = {style.caixa} source = {require('../../../../assets/botao-x.png')}/>             
                                    </Pressable>
                                </View>
                            )})
                        }
                    </ScrollView>
                             
                </View>
                
                

             </LinearGradient>
        
        </View>
    );
}