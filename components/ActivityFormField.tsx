import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TypeOfDropdown from './TypeOfDropdown';
import StatusLevel from './StatusLevel';
import TextField from './TextField';
import PriorityLevel from './PriorityLevel';
import CustomButton from './CustomButton';

export default function ActivityFormField() {
  const [selectedType, setSelectedType] = useState('Select Type');
  const [selectedStatus, setSelectedStatus] = useState('Pending');
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('Low Priority');
  const [priorityModalVisible, setPriorityModalVisible] = useState(false);

  const textFieldValues = Array(6).fill('');
  const [inputValues, setInputValues] = useState(textFieldValues);

  const handleTextChange = (text: string, index: number) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = text;
    setInputValues(updatedValues);
  };

  const handleFormSubmit = () => {
    // Perform form submission actions
    console.log('Form Submitted', { selectedType, selectedStatus, selectedPriority, inputValues });
  };

  return (
    <View style={styles.container}>
      {/* Type of Dropdown */}
      <Text style={styles.label}>Type of Task</Text>
      <TypeOfDropdown options={['Field Report', 'Inspection', 'Audit']} onSelect={setSelectedType} />

      {/* Status Level */}
      <Text style={styles.label}>Status</Text>
      <StatusLevel
        options={[
          { id: '1', label: 'Pending' },
          { id: '2', label: 'In Progress' },
          { id: '3', label: 'Completed' },
        ]}
        currentOption={selectedStatus}
        onSelect={setSelectedStatus}
        modalVisible={statusModalVisible}
        setModalVisible={setStatusModalVisible}
      />

      {/* Text Fields (6 fields) */}
      {inputValues.map((value, index) => (
        <TextField
          key={index}
          value={value}
          placeholder={`Enter value ${index + 1}`}
          label={`Field ${index + 1}`}
          onChangeText={(text) => handleTextChange(text, index)}
        />
      ))}

      {/* Priority Level */}
      <Text style={styles.label}>Priority Level</Text>
      <PriorityLevel
        options={[
          { id: '1', label: 'Low Priority' },
          { id: '2', label: 'Medium Priority' },
          { id: '3', label: 'High Priority' },
        ]}
        currentOption={selectedPriority}
        onSelect={setSelectedPriority}
        modalVisible={priorityModalVisible}
        setModalVisible={setPriorityModalVisible}
      />

      {/* Submit Button */}
      <CustomButton title="Submit" onPress={handleFormSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1E1E2D',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
  },
});