import { StyleSheet, Dimensions } from 'react-native';
import { scale, moderateScale, verticalScale } from "../../utilits/scaling"

const window = Dimensions.get('screen');

export default StyleSheet.create({
    bgMenu: {
        height: window.height, 
        width: window.width,
        position: "absolute",
        zIndex: 100,
        backgroundColor: "#013850",
        padding: moderateScale(32),
    },

    list: {
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },

    items: {
        padding: moderateScale(16)
    },

    itemText: {
        color: "#fff",
        fontSize: moderateScale(16),
        fontWeight: 600
    }
})