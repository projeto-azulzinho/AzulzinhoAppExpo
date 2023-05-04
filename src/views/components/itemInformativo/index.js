import React from "react"
import { View, Text, Pressable, Image } from "react-native"
import style from "./style"


export const ItemInformativo = props => {
    
    const { item, itemNome ,removeItem, index, editarItem } = props


    if(editarItem == undefined)
        return (
            <View style = {style.itemForma} key={item.id}>                      
                <Text style = {style.itemTexto}>{item[itemNome].stringValue}</Text>
                <Pressable onPress={() => removeItem(item, index)}>
                    <Image source = {require('../../../../assets/botao-x.png')}/>             
                </Pressable>
            </View>
        )
    else
        return (
            <View style = {style.itemForma} key={item.id}>                      
                <Text style = {style.itemTexto} onPress={editarItem}>{item[itemNome].stringValue}</Text>
                <Pressable onPress={() => removeItem(item, index)}>
                    <Image source = {require('../../../../assets/botao-x.png')}/>             
                </Pressable>
            </View>
        )
}