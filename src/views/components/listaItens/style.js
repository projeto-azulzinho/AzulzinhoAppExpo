import { StyleSheet } from "react-native"
import { scale, moderateScale, verticalScale } from "../../utilits/scaling"

export default StyleSheet.create(
    {
        selecaoContainer: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 100,
            padding: moderateScale(32),
            justifyContent: "center"
        },

        selecionaCabecario: {
            padding: moderateScale(16),
            backgroundColor: "#e5e5e5"
        },
    
        SensoresCabecarioTexto: {
            fontSize: moderateScale(24),
            fontWeight: 'bold',
            color: "black",
            textAlign: 'center'
        },

        scroll: {
            width: "100%",
        },
    
        scrollSize: {
            height: "30%"
        },

        selecionaItem: {
            backgroundColor: '#FFFFFF',
            paddingVertical: moderateScale(12),
            paddingHorizontal: moderateScale(12), 
            borderBottomWidth: moderateScale(1),
        },
    
        SelecionaNomeItem: {
            color: 'black',
            textAlign: 'center'
        },
    
    
    }
)
