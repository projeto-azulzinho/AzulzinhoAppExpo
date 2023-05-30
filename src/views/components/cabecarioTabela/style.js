import { StyleSheet } from "react-native"
import { scale, moderateScale, verticalScale } from "../../utilits/scaling"
import { QueryFieldFilterConstraint } from "firebase/firestore/lite"

export default StyleSheet.create(
    {
        item: {
            color: "#fff",
            borderRightWidth: 1,
            borderColor: "#fff",
            paddingHorizontal: moderateScale(32),
            fontWeight: "bold",
            fontSize: moderateScale(10)
        },

        ultimoItem: {
            color: "#fff",
            paddingHorizontal: moderateScale(32),
            fontWeight: "bold",
            fontSize: moderateScale(10)
        },

        cabecarioContainer: {
            backgroundColor: "#013850",
            padding: moderateScale(8),
            borderRadius: moderateScale(10),
            marginBottom: moderateScale(16),
            marginTop: moderateScale(16)
        },

        list: {
            flex: 1,
            justifyContent: "center"
        }

    }
)
