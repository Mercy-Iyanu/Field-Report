import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextField from './TextField';
import DropdownMenu from './DropdownMenu';
import CustomButton from './CustomButton';
import Indicator from './Indicator';

const statusOptions = [
  { label: 'Pending', color: '#E50000', icon: 'alert-circle' },
  { label: 'Ongoing', color: '#00C853', icon: 'checkmark-circle' },
  { label: 'Completed', color: '#000000', icon: 'checkmark-done-circle' },
];

const priorityOptions = [
  { label: 'High', color: '#E50000', icon: 'alert-circle' },
  { label: 'Mid', color: '#FFD700', icon: 'alert-circle' },
  { label: 'Low', color: '#00C853', icon: 'alert-circle' },
];

const agencyCategories = [
  'Category A (Premium)',
  'Category B (Opportunity)',
  'Category C (Virtual)',
];

export default function ActivityFormField() {
  const [text1, setText1] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [agencyCategory, setAgencyCategory] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [priority, setPriority] = useState<string | null>(null);

  const handleTextChange1 = (text: string) => setText1(text);
  const handleTextChange3 = (text: string) => setText3(text);
  const handleTextChange4 = (text: string) => setText4(text);
  const handleTextChange5 = (text: string) => setText5(text);
  const handleTextChange6 = (text: string) => setText6(text);
  const handleAgencyNameSelect = (option: string) => setAgencyName(option);
  const handleAgencyCategorySelect = (option: string) => setAgencyCategory(option);
  const handleStatusSelect = (selectedStatus: string) => setStatus(selectedStatus);
  const handlePrioritySelect = (selectedPriority: string) => setPriority(selectedPriority);

  const handleSubmit = () => {
    console.log('Form submitted with values:', {
      text1, agencyName, agencyCategory, text3, text4, text5, text6, status, priority
    });
  };

  return (
    <View style={styles.container}>
      <TextField value={text1} placeholder="Title" label="Title" onChangeText={handleTextChange1} />
      <DropdownMenu label="Agency's name" options={['Search agency name', 'Dee Travels', 'InterGuide Air', 'Tifa Travels']} onSelect={handleAgencyNameSelect} />
      <DropdownMenu label="Agency Category" options={agencyCategories} onSelect={handleAgencyCategorySelect} />
      <TextField value={text3} placeholder="Contact person" label="Contact Person" onChangeText={handleTextChange3} />
      <TextField value={text4} placeholder="Description" label="Description" onChangeText={handleTextChange4} />
      <TextField value={text5} placeholder="Your view" label="Your View" onChangeText={handleTextChange5} />
      <TextField value={text6} placeholder="Next action step" label="Next Action Step" onChangeText={handleTextChange6} />
      <Indicator 
        options={statusOptions}
        onSelect={() => {}}
        label="Status"
        disabled={true}
        defaultValue="Pending" 
      />
      <Indicator 
        options={priorityOptions}
        onSelect={() => {}}
        label="Priority level"
        disabled={true}
        defaultValue="High"
      />
      <CustomButton title="Log Report" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    paddingTop: 0,
  },
});
