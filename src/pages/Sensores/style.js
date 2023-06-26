import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils/scaling";

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
});
