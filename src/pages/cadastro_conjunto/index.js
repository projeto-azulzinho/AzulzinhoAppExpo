import React from "react";
import { View, Text, TextInput, Button,   Image} from "react-native";
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';
const Navigation = require('react-native-navigation');


export default function Cadastro_conjunto(){
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
                        <Text style = {style.titulo}> Cadastro de conjunto de sensores </Text>
                    </View>
                    <View style = {style.espacamento}></View>
                    <Text> Configuração do Conjunto</Text>
                    <View style = {style.espacamento}></View>
                    <View style = {style.containerNomeSensor2}>
                        <TextInput style = {style.NomeSensor}> Nome do conjunto... </TextInput>
                    </View>
                    <View style = {style.espacamento3}></View>
                    <View style = {style.containerNomeSensor2}>
                        <TextInput style = {style.NomeSensor}> Selecione o modo de coleta de dados </TextInput>
                    </View>
                    <View style = {style.espacamento3}></View>
                    <View style = {style.containerSegundos}>
                        <TextInput> 12 </TextInput>
                        <View style = {style.containerSegundos2}>
                        <Text style = {style.segundos}> S </Text>
                        </View>
                    </View>
                    <View style = {style.espacamento}></View>
                    <View style = {style.divisoria}></View>
                    <View style = {style.espacamento}></View>
                    <Text> Seleção de Sensores</Text>
                    <View style = {style.espacamento}></View>
                    <View style = {style.botaoGrandeza}>
                        <Text title = "botaoGrandeza" style = {style.botao}> Adiciona Sensor </Text>
                    </View>

                    <View style = {style.espacamento}></View>
                    <View style = {style.containerNomeSensor}>                      
                            <Text style = {style.Sensores}> Sensor 1 </Text>
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