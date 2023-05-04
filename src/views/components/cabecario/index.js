import React from "react"
import { Pressable , View, Image} from "react-native"
import style from "./style"


export const Cabecario = props => {
    
    const { abrirFecharMenu } = props

    return (
        <View style = {style.containerBarra}>
            <Image source = {require('../../../../assets/balao-de-ar-quente.png')}/>             
            <Pressable onPress={abrirFecharMenu}>
                <Image  source = {require('../../../../assets/barra-de-menu.png')}/>             
            </Pressable>
        </View>
    )
}