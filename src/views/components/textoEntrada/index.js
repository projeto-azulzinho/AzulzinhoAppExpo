import React from "react"
import { View, FlatList, Text, Pressable, Image, TextInput } from "react-native"
import style from "./style"
import { useDispatch, useSelector } from "react-redux"
import { LinearGradient } from 'expo-linear-gradient';

export const TextoEntrada = props => {
    
    const { mudarNomeConjunto, placeholderValue, inputValue } = props

    return (
        <View style = {style.textoEntrada}>
            <TextInput onChangeText={mudarNomeConjunto} placeholder={placeholderValue} value={inputValue}></TextInput>
        </View>
    )
}