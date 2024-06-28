import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PriorityLevel from './PriorityLevel';
import StatusLevel from './StatusLevel';
import CustomButton from './CustomButton';
import DropdownMenu from './DropdownMenu';
import MemberAvatar from './MemberAvatar'; 

const options = [
  { id: '1', label: 'High Priority' },
  { id: '2', label: 'Medium Priority' },
  { id: '3', label: 'Low Priority' },
];

const statusOptions = [
  { id: '1', label: 'Pending' },
  { id: '2', label: 'In Progress' },
  { id: '3', label: 'Completed' },
];

export default function CreateTaskFormField() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('High Priority');
  const [status, setStatus] = useState('Pending');
  const [priorityModalVisible, setPriorityModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  const handleCreateTask = () => {
    console.log('Task created:', title, description, priority, status);
  };

  
  const avatars = [
    'https://via.placeholder.com/40',
    'https://via.placeholder.com/40',
    'https://via.placeholder.com/40',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PriorityLevel
          options={options}
          currentOption={priority}
          onSelect={setPriority}
          modalVisible={priorityModalVisible}
          setModalVisible={setPriorityModalVisible}
        />
        <StatusLevel
          options={statusOptions}
          currentOption={status}
          onSelect={setStatus}
          modalVisible={statusModalVisible}
          setModalVisible={setStatusModalVisible}
        />
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.titleInput}
          placeholder="Add task title"
          placeholderTextColor="#888"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.descriptionInput}
          placeholder="Add task description"
          placeholderTextColor="#888"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <DropdownMenu
          label="Task category"
          options={['Field Report', 'Others']}
          onSelect={(option) => console.log('Selected category:', option)} // Handle selection logic
        />

        {/* Use the MemberAvatar component */}
        <MemberAvatar avatars={avatars} />
      </View>

      <CustomButton title="Create Task" onPress={handleCreateTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    marginTop: 20,
  },
  titleInput: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 16,
    fontSize: 18,
  },
  descriptionInput: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 16,
    fontSize: 16,
    height: 100,
  },
});