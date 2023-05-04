import { StyleSheet } from "react-native"
import { scale, moderateScale, verticalScale } from "../../utilits/scaling"


export default StyleSheet.create(
    {
        btnForma: {
            borderRadius: moderateScale(10),
            backgroundColor: "#fff",
            paddingVertical: moderateScale(12)
        }, 
        
        btnTexto: {
            color: '#000000',
            fontWeight: "bold",
            textAlign: "center"
        },

        btnBorda: {
            borderRadius: moderateScale(12),
            padding: moderateScale(4),
            marginBottom: moderateScale(24)
        }, 
    }
)
