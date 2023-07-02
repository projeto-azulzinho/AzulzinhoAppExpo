import React from "react";
import styles from "./style";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function ButtomSave({ handlePress }) {
  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <LinearGradient
          style={styles.containerSalvar}
          colors={["#184A5B", "#5B5A1E"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.textSalvar}> SALVAR </Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
}
