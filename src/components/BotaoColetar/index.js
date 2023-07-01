import React, {useState} from "react"
import { Text, Pressable} from "react-native"
import style from "./style"
import { LinearGradient } from 'expo-linear-gradient';
import { criarMedicao } from "../../controllers/MedicaoController"
import { Medicao } from "../../models/MedicaoModel"

export const BotaoColetar = props => {
    
    const {funcao, result} = props


    const iniciarColeta = async () => {
        async function fetchData() {
            try {
              const response = await fetch('http://192.168.1.10:3000/leitura');
              const text = await response.text();
              funcao(text);
            } catch (error) {
              console.error(error);
            }
          }
          fetchData();

        if(result.length > 0) {
            const medicao = new Medicao(new Date(), result)
            criarMedicao(medicao)
        }
        console.log("aquiiiiiii")
    }


    return (
        <Pressable onPress={iniciarColeta}>
            <LinearGradient style = {style.btnShape}
                colors={['#184A5B','#5B5A1E']}
                start={{ x: 0, y: 0}}
                end={{x: 0.5, y: 0.5}}
            >
                <Text style = {style.btnText}> COLETAR DADOS </Text>              
            </LinearGradient>
        </Pressable>   
    )
}