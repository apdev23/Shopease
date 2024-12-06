import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CommonStyle } from '../styles';
import { Color } from '../utils';

interface TimePickerFieldProps {
    label: string;
    value: Date | null;
    setTime: (time: Date) => void;
}

const TimePickerField: React.FC<TimePickerFieldProps> = ({ label, value, setTime }) => {
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedTime: Date | undefined) => {
        const currentTime = selectedTime || value;
        setShow(false);
        setTime(currentTime);
    };

    return (
        <View style={{ marginBottom: 15 }}>
            <Text style={CommonStyle.labelStyle}>{label}</Text>
            <Button color={Color.secondaryColor} onPress={() => setShow(true)} title={value ? value.toTimeString().slice(0, 5) : 'Select Time'} />
            {show && (
                <DateTimePicker
                    value={value || new Date()}
                    mode="time"
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default TimePickerField;
