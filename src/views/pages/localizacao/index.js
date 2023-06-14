import React, { useEffect, useState, useRef } from "react";
import { View, ScrollView, StatusBar, Text, StyleSheet, Animated } from "react-native";
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
import MapView, { Marker, Polyline } from 'react-native-maps';

export default function Conjunto_sensores({navigation}) {
  const { menuAtivo } = useSelector((state) => state.menuAtivo);
  const dispatch = useDispatch();
  const [latitude, setLatitude] = useState(-21.249025429569166);	
  const [longitude, setLongitude] = useState(-50.31402426874828);
  const [markerCoords, setMarkerCoords] = useState([]);
  const markerAnimation = useRef(new Animated.Value(0)).current;

  function handleRegionChanged(region) {
    setLatitude(region.latitude);
    setLongitude(region.longitude);
    setMarkerCoords((prevCoords) => [...prevCoords, region]);
  }

  const abrirFecharMenu = () => {
    dispatch(toggleMenu());
  }

  useEffect(() => {

  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(markerAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(markerAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={style.viewSize}>
      <LinearGradient style={style.container} colors={['#063E56','#FFFFFF']}>
        <StatusBar backgroundColor="#063E56" barStyle="light-content" />
        <Cabecario abrirFecharMenu={abrirFecharMenu} />
        { menuAtivo ? <Menu navegar={navigation} /> : "" }
        <Titulo titulo={"LOCALIZAÇÃO"} />
        <MapView
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={false}
          toolbarEnabled={false}
          onRegionChangeComplete={handleRegionChanged}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003
          }}
        >
          <Polyline
            coordinates={markerCoords}
            strokeColor="blue"
            strokeWidth={3}
          />
          <Marker.Animated
            coordinate={{ latitude, longitude }}
            image={require('../../../../assets/balao2.png')} // Altere o caminho para a sua imagem
            style={{
              transform: [{ scale: markerAnimation }],
            }}
          />
        </MapView>
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
  },
});