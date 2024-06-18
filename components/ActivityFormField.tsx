import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextField from './TextField';
import DropdownMenu from './DropdownMenu';
import DatePicker from './DatePicker';
import CustomButton from './CustomButton';
import PriorityLevel from './PriorityLevel';
import Indicator from './Indicator';

export default function ActivityFormField() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [dropdownOption, setDropdownOption] = useState('');
  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState('');

  const handleTextChange1 = (text: string) => setText1(text);
  const handleTextChange2 = (text: string) => setText2(text);
  const handleTextChange3 = (text: string) => setText3(text);
  const handleTextChange4 = (text: string) => setText4(text);
  const handleTextChange5 = (text: string) => setText5(text);
  const handleTextChange6 = (text: string) => setText6(text);
  const handleDropdownSelect = (option: string) => setDropdownOption(option);
  const handleDateChange = (selectedDate: Date) => setDate(selectedDate);
  const handleStatusSelect = (level: string) => setStatus(level);

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log('Form submitted with values:', {
      text1, text2, text3, text4, text5, text6, dropdownOption, date, status
    });
  };

  return (
    <View style={styles.container}>
      <TextField value={text1} placeholder="Title" label="Title" onChangeText={handleTextChange1} />
      <DropdownMenu options={['Search agency name', 'Dee Travels', 'InterGuide Air', 'Tifa Travels']} onSelect={handleDropdownSelect} />
      <TextField value={text2} placeholder="Agency category" label="Agency Category"  onChangeText={handleTextChange2} />
      <TextField value={text3} placeholder="Contact person" label="Contact Person"  onChangeText={handleTextChange3} />
      <TextField value={text4} placeholder="Description" label="Description" onChangeText={handleTextChange4} />
      <TextField value={text5} placeholder="Your view" label="Your View" onChangeText={handleTextChange5} />
      <TextField value={text6} placeholder="Next action step" label="Next Action Step" onChangeText={handleTextChange6} />
      <Indicator onSelect={handleStatusSelect} />
      <CustomButton title="Log Report" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 16,
  }
});
