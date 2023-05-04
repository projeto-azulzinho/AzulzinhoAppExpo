import React from "react"
import { View, Text } from "react-native"
import style from "./style"


export const Titulo = props => {
    
    const { titulo } = props

    return (
        <View style = {style.containerTitulo}>
            <Text style = {style.titulo}> {titulo} </Text>
        </View>
    )
}