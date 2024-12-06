import { StyleSheet } from "react-native";
import { Color, Fonts } from "../utils";
import { moderateScale, verticalScale } from "../utils/Matrics";

const CommonStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    labelStyle: {
        fontSize: moderateScale(13),
        fontFamily: Fonts.Montserra_Medium,
        color: Color.textblack,
        marginVertical: verticalScale(10)
    }
});

export default CommonStyle;