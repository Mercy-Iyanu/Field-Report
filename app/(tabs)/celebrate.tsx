import DatePicker from '@/components/DatePicker';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CelebrateFormField from '@/components/CelebrateFormField';
import TypeOfDropdown from '@/components/TypeOfDropdown';

export default function CelebratePage() {
  const [selectedOption, setSelectedOption] = useState('Birthday');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleFormSubmit = (text: string, option: string) => {
    console.log('Form submitted with:', text, option);
    // Form submission logic goes here if needed
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>New Anniversary</Text>
      <View style={styles.dropdownDateContainer}>
        <TypeOfDropdown
          options={['Birthday', 'Wedding Anniversary', 'Agency Anniversary']}
          onSelect={handleOptionSelect}
        />
        <DatePicker onDateChange={handleDateChange} />
      </View>
      <CelebrateFormField
        options={['Search agency name', 'Dee Travels', 'InterGuide Air', 'Tifa Travels']}
        onSubmit={handleFormSubmit}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  pageTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 26,
  },
  dropdownDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});
