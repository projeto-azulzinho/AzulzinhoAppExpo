import { StyleSheet } from "react-native"
import { scale, moderateScale, verticalScale } from "../../utilits/scaling"

export default StyleSheet.create(
    {
        containerTitulo: {
            backgroundColor: '#013850',
            borderRadius: moderateScale(10),
            marginBottom: moderateScale(32),
            paddingVertical: moderateScale(16)
        }, 
    
        titulo: {
            textAlign: "center",
            color: '#FFFFFF',
            fontWeight: "bold",
            fontSize: 14
        }
        
    }
)
