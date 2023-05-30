import { StyleSheet } from "react-native"
import { scale, moderateScale, verticalScale } from "../../utilits/scaling"

export default StyleSheet.create(
    {
        btnText: {
            color: '#FFFFFF',
            textAlign: "center",
            fontWeight: "bold"
        },
        
        btnShape: {
            borderRadius: moderateScale(10),
            paddingVertical: moderateScale(12),
            marginBottom: moderateScale(8)
        }, 
    }
)