import React from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';
import { Color } from '../utils';
import { CommonStyle } from '../styles';

interface InputFieldProps extends TextInputProps {
    label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChangeText, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={CommonStyle.labelStyle}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={'gray'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        color: Color.textblack
    },

});

export default InputField;
