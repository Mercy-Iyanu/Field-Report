import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  onDateChange: (date: Date) => void;
}

export default function DatePicker({ onDateChange }: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [show, setShow] = useState(false);

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onDateChange(currentDate as Date);
  };

  return (
    <View style={styles.container}>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      {date ? (
        <Text style={styles.dateText}>{formatDate(date)}</Text>
      ) : (
        <Button onPress={() => setShow(true)} title="Select Date" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    marginVertical: 10,
  },
});