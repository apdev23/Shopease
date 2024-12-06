import { StyleSheet } from "react-native";
import { Color } from "../utils";
import { horizontalScale, verticalScale } from "../utils/Matrics";

const HeaderStyle = StyleSheet.create({
    headerContainer: {
        backgroundColor: Color.primaryColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: verticalScale(10)
    },
    rightHeaderBoxStyle: {
        position: 'absolute',
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    titleStyle: {
        fontSize: 14,
        fontWeight: '700',
        color: Color.textWhite
    },
    notificationBoxStyle: {
        marginRight: horizontalScale(5)
    },
    menu: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 9999,
    },
    menuItem: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuItemTextStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: Color.textblack,
        paddingRight: 10,
    }
});

export default HeaderStyle;