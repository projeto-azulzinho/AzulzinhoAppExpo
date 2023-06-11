import React, { useEffect, useState} from "react";
import { View, ScrollView, StatusBar, Text, StyleSheet} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { Menu } from "../../components/menu";
import { Titulo } from "../../components/titulo";
import { BotaoAdicionar } from "../../components/botaoAdicionar";
import { Cabecario } from "../../components/cabecario";
import { ItemInformativo } from "../../components/itemInformativo";
import { toggleMenu } from "../../../redux/menu";
import { listarSensores, deletarSensor } from "../../../controllers/SensorController";
import { deletarSensorDeConjunto } from "../../../controllers/SensorConjuntoController";
import MapView from 'react-native-maps';

export default function Conjunto_sensores({navigation}){

    const {menuAtivo} = useSelector((state) => state.menuAtivo)
    const dispatch = useDispatch()
    const [latitude, setLatitude] = useState(-21.249025429569166);	
    const [longitude, setLongitude] = useState(-50.31402426874828);
  
    function handleRegionChanged(region) {
        setLatitude(region.latitude);
        setLongitude(region.longitude);
      }
    
    const abrirFecharMenu = () => {
        dispatch(toggleMenu())
    }

    useEffect(() =>{

    }, [])
    
    return(
        <View style={style.viewSize}>

            <LinearGradient style = {style.container}
                colors={['#063E56','#FFFFFF']} > 
                
                <StatusBar   
                    backgroundColor = "#063E56"
                    barStyle={"light-content"}
                /> 

                <Cabecario abrirFecharMenu={abrirFecharMenu}/>
                
                { menuAtivo ? ( <Menu navegar={navigation}/> ) : "" }
                
                <Titulo titulo={"LOCALIZAÇÃO"}/>                
                     <MapView style = {styles.map}
                         showsUserLocation={true}		//destacando a localização do usuário no mapa
                         showsMyLocationButton={false} 	//ocultando o botão que move o mapa para a localização do usuário
                         toolbarEnabled={false}	//ocultando opções do google maps ao clicar em objetos do mapa
                         onRegionChangeComplete={handleRegionChanged}  //mudar localização se estiver em movimento
                         initialRegion={{
                            latitude,	//posição inicial do mapa
                            longitude,	//posição inicial do mapa
                            latitudeDelta: 0.003,  	//determina o zoom do mapa
                            longitudeDelta: 0.003
                         }} />            
             </LinearGradient>
        
        </View>
        
    );


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '50%',
    }
  });