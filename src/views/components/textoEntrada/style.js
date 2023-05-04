import { StyleSheet } from "react-native"
import { scale, moderateScale, verticalScale } from "../../utilits/scaling"

export default StyleSheet.create(
    {
        textoEntrada: {
            backgroundColor: '#FFFFFF',
            paddingHorizontal: moderateScale(16),
            paddingVertical: moderateScale(8),
            borderRadius: moderateScale(10),
            borderColor: '#000000',
            borderWidth: moderateScale(2),
            marginBottom: moderateScale(8)
        }
        
    }
)
