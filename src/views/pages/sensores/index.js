import React from "react";
import { View, Text, TextInput, Button,   Image} from "react-native";
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';



export default function Sensores(){
    return(
        <View>
            
            <LinearGradient style = {style.container}
             colors={['#063E56','#FFFFFF']}>

                <View style = {style.containerBarra}>
                   <Image style = {style.caixa} source = {require('../../../../assets/balao-de-ar-quente.png')}/>             
                   <Image style = {style.caixa} source = {require('../../../../assets/barra-de-menu.png')}/>             

                </View>

                <View style = {style.containerTitulo}>
                    <View style = {style.containerTitulo2}>
                        <Text style = {style.titulo}> Sensores </Text>
                    </View>

                    <View style = {style.espacamento}></View>
                    <View style = {style.botaoGrandeza}>
                        <Text title = "teste" style = {style.botao}> Adiciona Sensor </Text>
                    </View>

                    <View style = {style.espacamento}></View>
                    <View style = {style.containerNomeSensor}>                      
                            <Text style = {style.Sensores}> Sensor 1 </Text>
                            <Image style = {style.caixa} source = {require('../../../../assets/botao-x.png')}/>             
                    </View>
                             
                </View>
                
                

             </LinearGradient>
            
        </View>
    );
}