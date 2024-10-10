import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TypeOfDropdown from './TypeOfDropdown';
import DatePicker from './DatePicker';
import TextField from './TextField';
import DropdownMenu from './DropdownMenu';
import CustomButton from './CustomButton';

const CelebrateFormField = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [textFieldValue, setTextFieldValue] = useState('');
  const [selectedMenuValue, setSelectedMenuValue] = useState('');

  const handleSubmit = () => {
    console.log('You just attempted to submit a celebration form.');
  };

  return (
    <View style={styles.container}>
      <TypeOfDropdown
        options={['Birthday', 'Anniversary', 'Graduation']}
        onSelect={setSelectedType}
      />
      <DatePicker onDateChange={setSelectedDate} />
      <TextField
        value={textFieldValue}
        placeholder="Enter your celebration message"
        label="Celebration Message"
        onChangeText={setTextFieldValue}
      />
      <DropdownMenu
        options={['Option 1', 'Option 2', 'Option 3']}
        selectedValue={selectedMenuValue}
        onSelect={setSelectedMenuValue}
        placeholder="Select an option"
      />
      <CustomButton title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#161622',
    borderRadius: 8,
  },
});

export default CelebrateFormField;
