import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "../../utils/scaling";

export default StyleSheet.create({
  viewSize: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(32),
    paddingTop: moderateScale(24),
    paddingBottom: moderateScale(32),
  },
  scrollSelecionado: {
    marginBottom: moderateScale(24),
  },
  btnModoColeta: {
    backgroundColor: "#FFFFFF",
    borderRadius: moderateScale(10),
    borderColor: "#000000",
    borderWidth: moderateScale(2),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(16),
    width: "100%",
    marginBottom: moderateScale(8),
  },
  nomeColeta: {
    color: "black",
    fontSize: moderateScale(14),
  },
  seta: {
    height: moderateScale(15),
    width: moderateScale(15),
  },
  line: {
    borderBottomColor: "#000",
    borderBottomWidth: moderateScale(1),
    marginBottom: moderateScale(24),
    marginTop: moderateScale(16),
  },

  tempoContainer: {
    flexDirection: "row",
    marginBottom: moderateScale(8),
  },
  tempo: {
    backgroundColor: "#ffff",
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    borderColor: "#000000",
    borderWidth: moderateScale(2),
    width: "20%",
  },
  unidadeTempo: {
    backgroundColor: "#013850",
    paddingHorizontal: moderateScale(8),
    justifyContent: "center",
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(-15),
  },
  textoUnidadeTempo: {
    fontSize: moderateScale(16),
    color: "#fff",
  },
});
