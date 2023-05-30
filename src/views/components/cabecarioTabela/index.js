import React from "react";
import { View, Text } from "react-native"
import style from "./style"
import { FlatList } from "react-native-gesture-handler";

export const CabecarioTabela = props => {   
    const colunas = ['Nome', 'Valor', 'Grandeza']

    return (
        <View style={style.cabecarioContainer}>
            <FlatList
                data={colunas}
                renderItem={({item, index}) => {
                    if(index != colunas.length-1)
                        return <Text style={style.item}>{item}</Text>
                    else
                        return <Text style={style.ultimoItem}>{item}</Text>
                }}
                keyExtractor={item => item}
                horizontal={true}
                contentContainerStyle={style.list}
            />
        </View>
    )
}