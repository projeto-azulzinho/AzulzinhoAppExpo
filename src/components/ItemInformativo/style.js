import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "../../utils/scaling";

export default StyleSheet.create({
  itemForma: {
    backgroundColor: "#FFFFFF",
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(12),
    borderColor: "#000000",
    borderWidth: moderateScale(2),
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: moderateScale(8),
    gap: moderateScale(16),
  },

  itemTexto: {
    color: "#000000",
    flex: 1,
  },
});
