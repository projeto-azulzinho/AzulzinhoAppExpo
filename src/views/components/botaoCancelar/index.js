import React from "react"
import {Text, Pressable, Image } from "react-native"
import style from "./style"
import { LinearGradient } from 'expo-linear-gradient';

export const BotaoCancelar = props => {
    
    const { telaAnterior } = props

    return (
        <Pressable onPress={telaAnterior}>
            <LinearGradient style = {style.btnShape}
                colors={['#184A5B', '#543C2E' ,'#4F0909']}
                start={{ x: 0, y: 0}}
                end={{x: 0.6, y: 0.6}}
            >
                <Text style = {style.btnText}> CANCELAR </Text>              
            </LinearGradient>
        </Pressable>   
    )
}