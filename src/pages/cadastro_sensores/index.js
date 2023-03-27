import React from "react";
import { View, Text, TextInput, Button,   Image} from "react-native";
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';
const Navigation = require('react-native-navigation');


export default function Cadastro_sensores(){
    return(
        <View>
            
            <LinearGradient style = {style.container}
             colors={['#063E56','#FFFFFF']}>

                <View style = {style.containerBarra}>
                   <Image style = {style.caixa} source = {require('../../../assets/balao-de-ar-quente.png')}/>             
                   <Image style = {style.caixa} source = {require('../../../assets/barra-de-menu.png')}/>             

                </View>

                <View style = {style.containerTitulo}>
                    <View style = {style.containerTitulo2}>
                        <Text style = {style.titulo}> Cadastro de sensores </Text>
                    </View>
                    <View style = {style.espacamento}></View>

                    <View style = {style.containerNomeSensor2}>
                        <TextInput style = {style.NomeSensor}> Nome do sensor... </TextInput>
                    </View>
                    <View style = {style.espacamento}></View>
                    <View style = {style.botaoGrandeza}>
                        <Text title = "teste" style = {style.botao}> Adiciona Sensor </Text>
                    </View>

                    <View style = {style.espacamento}></View>
                    <View style = {style.containerNomeSensor}>                      
                            <Text style = {style.Sensores}> Celsius </Text>
                            <Image style = {style.caixa} source = {require('../../../assets/botao-x.png')}/>             
                    </View>
                    <View style = {style.espacamento2}></View>
                        <LinearGradient style = {style.containerSalvar}
                         colors={['#184A5B','#5B5A1E']}>
                            <Text style = {style.botao2}> SALVAR </Text>    
                        </LinearGradient>          
                            
                </View>
                
                

             </LinearGradient>
            
        </View>
    );
}