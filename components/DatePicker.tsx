import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  onDateChange: (date: Date) => void;
}

export default function DatePicker({ onDateChange }: DatePickerProps) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [buttonTitle, setButtonTitle] = useState('');

  useEffect(() => {
    setButtonTitle(formatDate(date));
  }, [date]);

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
    onDateChange(currentDate);
  };

  return (
    <View>
      <Button onPress={() => setShow(true)} title={buttonTitle || "Select Date"} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});