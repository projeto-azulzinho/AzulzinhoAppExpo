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
});
