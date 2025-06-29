import React, { useState } from 'react';
import 
  { 
    View, 
    StyleSheet, 
    Alert 
  } from 'react-native';
import TextField from './TextField';
import DropdownMenu from './DropdownMenu';
import CustomButton from './CustomButton';
import StatusLevel from './StatusLevel';
import PriorityLevel from './PriorityLevel';
// import { DocumentPickerResponse } from 'react-native-document-picker';

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

interface ActivityFormFieldProps {
  onAddReport: (report: any) => void;
}

export default function ActivityFormField({ onAddReport }: ActivityFormFieldProps) {

  const [reportData, setReportData] = useState({
    title: '',
    agencyName: '',
    agencyCategory: '',
    contactPerson: '',
    description: '',
    yourView: '',
    nextActionStep: '',
    priorityLevel: '',
    status: '',
    attachment: '',
  });
   
  const [text1, setText1] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [agencyCategory, setAgencyCategory] = useState('');
  const [status, setStatus] = useState<string>('Pending');
  const [priority, setPriority] = useState<string>('High Priority');
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [priorityModalVisible, setPriorityModalVisible] = useState(false);

  const handleTextChange1 = (text: string) => setText1(text);
  const handleTextChange3 = (text: string) => setText3(text);
  const handleTextChange4 = (text: string) => setText4(text);
  const handleTextChange5 = (text: string) => setText5(text);
  const handleTextChange6 = (text: string) => setText6(text);
  const handleAgencyNameSelect = (option: string) => setAgencyName(option);
  const handleAgencyCategorySelect = (option: string) => setAgencyCategory(option);
  const handleStatusSelect = (selectedStatus: string) => setStatus(selectedStatus);
  const handlePrioritySelect = (selectedPriority: string) => setPriority(selectedPriority);

  // const handleFileSelect = (response: DocumentPickerResponse[]) => {
  //   setReportData((prevData) => ({
  //     ...prevData,
  //     attachment: response[0].uri,
  //   }));
  // };

  const handleSubmit = () => {
    if (!text1 || !agencyName || !agencyCategory || !text3 || !text4 || !text5 || !text6) {
      alert('Please fill out all fields before logging the report.');
      return;
    }
    const newReport = {
      title: text1,
      agencyName,
      agencyCategory,
      contactPerson: text3,
      description: text4,
      yourView: text5,
      nextActionStep: text6,
      priorityLevel: priority,
      status,
      attachment: reportData.attachment,
    };

    onAddReport(newReport);

    setText1('');
    setAgencyName('');
    setAgencyCategory('');
    setText3('');
    setText4('');
    setText5('');
    setText6('');
    setPriority('High Priority');
    setStatus('Pending');
    setReportData({ ...reportData, attachment: '' });

    alert('Report successfully logged.');
  };

  return (
    <View style={styles.container}>
      <TextField value={text1} placeholder="Title" label="Title" onChangeText={handleTextChange1} />
      <DropdownMenu 
        options={['Dee Travels', 'InterGuide Air', 'Tifa Travels']} 
        onSelect={handleAgencyNameSelect} 
      />
      <DropdownMenu 
        options={agencyCategories} 
        onSelect={handleAgencyCategorySelect}
      />
      <TextField value={text3} placeholder="Contact person" label="Contact Person" onChangeText={handleTextChange3} />
      <TextField value={text4} placeholder="Description" label="Description" onChangeText={handleTextChange4} />
      <TextField value={text5} placeholder="Your view" label="Your View" onChangeText={ handleTextChange5} />
      <TextField value={text6} placeholder="Next action step" label="Next Action Step" onChangeText={handleTextChange6} />
      
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
      {/* <DocumentPickerComponent onFileSelect={handleFileSelect} /> */}

      <CustomButton title="Log Report" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    marginBottom: 40

  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});