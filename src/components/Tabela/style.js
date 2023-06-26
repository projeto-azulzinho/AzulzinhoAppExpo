import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "../../utils/scaling";

export default StyleSheet.create({
  item: {
    color: "#fff",
    borderRightWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: moderateScale(32),
    fontWeight: "bold",
  },

  ultimoItem: {
    color: "#fff",
    paddingHorizontal: moderateScale(32),
    fontWeight: "bold",
  },

  cabecarioContainer: {
    backgroundColor: "#013850",
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
  },

  list: {
    borderRadius: moderateScale(10),
    backgroundColor: "#fff",
    marginBottom: moderateScale(16),
    padding: moderateScale(16),
  },

  contentLista: {
    width: "100%",
    flexDirection: "column",
  },

  dado: {
    flexDirection: "row",
  },

  conjuntoDados: {
    borderBottomWidth: 1,
    width: "100%",
    paddingBottom: moderateScale(8),
  },

  value: {
    flexGrow: 1,
    width: moderateScale(16),
    textAlign: "center",
    paddingVertical: moderateScale(8),
  },
});
