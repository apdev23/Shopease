import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CommonStyle } from '../styles';
import { Color } from '../utils';

interface DatePickerFieldProps {
    label: string;
    value: Date | null;
    setDate: (date: Date) => void;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ label, value, setDate }) => {
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || value;
        setShow(false);
        setDate(currentDate);
    };

    return (
        <View style={{ marginBottom: 15 }}>
            <Text style={CommonStyle.labelStyle}>{label}</Text>
            <Button color={Color.secondaryColor} onPress={() => setShow(true)} title={value ? value.toDateString() : 'Select Date'} />
            {show && (
                <DateTimePicker
                    value={value || new Date()}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default DatePickerField;
