import { StyleSheet } from "react-native";
import { Color, Fonts } from "../utils";
import { horizontalScale, moderateScale, verticalScale } from "../utils/Matrics";

const HomeScreenStyle = StyleSheet.create({
    listContainer: {
        padding: moderateScale(10),
    },
    itemContainer: {
        marginBottom: verticalScale(15),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: moderateScale(10),
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    itemDisContainer: {
        flex: 1
    },

    image: {
        width: moderateScale(80),
        height: verticalScale(80),
        marginRight: moderateScale(10)
    },
    title: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000000'
    },
    price: {
        fontSize: moderateScale(14),
        color: 'green',
        marginBottom: 5,
    },
    rating: {
        fontSize: 12,
        color: '#555',
    },
    addButtonStyle: {
        width: horizontalScale(50),
        height: verticalScale(25),
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(20),
        marginTop: verticalScale(5)
    },
    addTextStyle: {
        fontSize: moderateScale(15),
        color: '#ffffff'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: horizontalScale(60),
        backgroundColor: '#999999',
        borderRadius: moderateScale(30),
        marginTop: verticalScale(5)
    },
    quantityMinButton: {
        backgroundColor: 'red'
    },
    quantityButton: {
        width: moderateScale(20),
        height: verticalScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(10),
    },
    quantityPlusButton: {
        backgroundColor: 'green'
    },
    quantityTextButton: {
        fontSize: moderateScale(20),
        color: '#ffffff'
    }
});

export default HomeScreenStyle;