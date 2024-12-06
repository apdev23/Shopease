import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { CommonStyle } from '../styles'; 
import { Color, Fonts } from '../utils';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Matrics';

interface SelectBoxProps {
    label: string;
    selectedValue: string | null;
    onValueChange: (value: string) => void;
    items: { label: string; value: string }[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ label, selectedValue, onValueChange, items }) => {
    return (
        <View style={styles.container}>
            <Text style={CommonStyle.labelStyle}>{label}</Text>
            <Dropdown
                style={styles.dropdown}
                data={items}
                labelField="label"
                valueField="value"
                placeholder="Select an option"
                value={selectedValue}
                onChange={item => onValueChange(item.value)}
                textStyle={styles.textStyle}
                selectedTextStyle={styles.selectedTextStyle} 
                placeholderStyle={styles.placeholderStyle} 
                itemTextStyle={styles.itemTextStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: verticalScale(15),
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: horizontalScale(10),
        borderRadius: moderateScale(5),
    },
    textStyle: {
        color: Color.primaryColor,
        fontSize: moderateScale(16),
        fontFamily: Fonts.Montserrat_Regular
    },
    selectedTextStyle: {
        color: Color.primaryColor,
        fontSize: moderateScale(16),
        fontFamily: Fonts.Montserrat_Regular
    },
    placeholderStyle: {
        color: '#999',
        fontFamily: Fonts.Montserrat_Regular
    },
    itemTextStyle: {
        color: Color.textblack,
        fontSize: moderateScale(16),
        fontFamily: Fonts.Montserrat_Regular
    },
});

export default SelectBox;
