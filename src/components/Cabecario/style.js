import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils/scaling";

export default StyleSheet.create({
  containerBarra: {
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: 300,
    marginBottom: moderateScale(32),
  },
});
