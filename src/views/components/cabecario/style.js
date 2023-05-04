import { StyleSheet } from "react-native"
import { scale, moderateScale, verticalScale } from "../../utilits/scaling"

export default StyleSheet.create(
    {
        containerBarra: {
                justifyContent: "space-between",
                flexDirection: "row",
                zIndex: 300,
                marginBottom: moderateScale(32),
        },
    }
)
