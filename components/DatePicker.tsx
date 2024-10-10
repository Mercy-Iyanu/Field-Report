import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  onDateChange: (date: Date) => void;
  initialDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({ onDateChange, initialDate }) => {
  const [date, setDate] = useState(initialDate || new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    onDateChange(currentDate);
  };

  return (
    <View style={styles.container}>
      <Button title="Select Date" onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={styles.dateText}>{`Selected Date: ${date.toLocaleDateString()}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  dateText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
  },
});

export default DatePicker;
