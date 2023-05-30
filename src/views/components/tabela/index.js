import React from "react";
import { View, Text } from "react-native"
import style from "./style"
import { FlatList } from "react-native-gesture-handler";

export const Tabela = props => {   
    const dado = {
        valores: [{"nome": "Temperatura", "valor": "28", "grandeza": "°C"},
                    {"nome": "Umidade", "valor": "75", "grandeza": "%"},
                    {"nome": "Pressao", "valor": "50", "grandeza": "Bar"}]
    }
    const info = [dado]

    return (
        <FlatList
            data={info}
            renderItem={({item, index}) => {
                return <View style={style.conjuntoDados}>{
                    item.valores.map(valor => {
                        return (
                            <View style={style.dado}>
                                <Text style={style.value}>{valor.nome}</Text>
                                <Text style={style.value}>{valor.valor}</Text>
                                <Text style={style.value}>{valor.grandeza}</Text>
                            </View>
                        )
                    })
                }</View>
            }}
            keyExtractor={item => item}
            horizontal={true}
            style={style.list}
            contentContainerStyle={style.contentLista}
        />
    )
}