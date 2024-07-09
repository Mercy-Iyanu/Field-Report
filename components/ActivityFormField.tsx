import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import TextField from './TextField';
import DropdownMenu from './DropdownMenu';
import CustomButton from './CustomButton';
import StatusLevel from './StatusLevel';
import PriorityLevel from './PriorityLevel';
import DocumentPickerComponent from './DocumentPicker';
import { DocumentPickerResponse } from 'react-native-document-picker';

const statusOptions = [
  { id: '1', label: 'Pending' },
  { id: '2', label: 'In Progress' },
  { id: '3', label: 'Completed' },
];

const priorityOptions = [
  { id: '1', label: 'High Priority' },
  { id: '2', label: 'Medium Priority' },
  { id: '3', label: 'Low Priority' },
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
  const [status, setStatus] = useState<string>('Pending');
  const [priority, setPriority] = useState<string>('High');
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [priorityModalVisible, setPriorityModalVisible] = useState(false);
  const [fileResponse, setFileResponse] = useState<DocumentPickerResponse[] | null>(null);

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
      text1, agencyName, agencyCategory, text3, text4, text5, text6, status, priority, fileResponse
    });
  };

  const handleFileSelect = (response: DocumentPickerResponse[]) => {
    setFileResponse(response);
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

      <DocumentPickerComponent onFileSelect={handleFileSelect} />
      {fileResponse && fileResponse.length > 0 && (
        <View style={styles.fileContainer}>
          <Text style={styles.fileName}>File Name: {fileResponse[0].name}</Text>
          <Text style={styles.fileType}>File Type: {fileResponse[0].type}</Text>
          <Text style={styles.fileSize}>File Size: {fileResponse[0].size} bytes</Text>
          {fileResponse[0].type.startsWith('image/') && (
            <Image
              source={{ uri: fileResponse[0].uri }}
              style={styles.image}
              resizeMode="contain"
            />
          )}
        </View>
      )}

      <View style={styles.rowContainer}>
        <StatusLevel
          options={statusOptions}
          currentOption={status}
          onSelect={handleStatusSelect}
          modalVisible={statusModalVisible}
          setModalVisible={setStatusModalVisible}
        />

        <PriorityLevel
          options={priorityOptions}
          currentOption={priority}
          onSelect={handlePrioritySelect}
          modalVisible={priorityModalVisible}
          setModalVisible={setPriorityModalVisible}
        />
      </View>

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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  fileContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  fileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fileType: {
    fontSize: 14,
    color: '#666',
  },
  fileSize: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});
