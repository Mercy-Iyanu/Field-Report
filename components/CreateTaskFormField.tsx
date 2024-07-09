import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PriorityLevel from './PriorityLevel';
import StatusLevel from './StatusLevel';
import CustomButton from './CustomButton';
import DropdownMenu from './DropdownMenu';
import MemberDropdown from './MemberDropdown';
import TaskDetails from '@/app/pages/taskDetails';

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

interface Member {
  id: string;
  name: string;
  avatar: string;
}

export default function CreateTaskFormField() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('High Priority');
  const [status, setStatus] = useState('Pending');
  const [priorityModalVisible, setPriorityModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [principalMembers, setPrincipalMembers] = useState<Member[]>([]);
  const [coMembers, setCoMembers] = useState<Member[]>([]);
  const [showDetails, setShowDetails] = useState(false);

  const handleCreateTask = () => {
    if (!title || !description || !priority || !status) {
      alert('Please fill out all fields before creating the task.');
      return;
    }

    alert('Task successfully created.');
    setShowDetails(false);
  };

  const handleEditTask = () => {
    console.log('Editing task...');
  };

  const handleDeleteTask = () => {
    console.log('Deleting task...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.lightBg}>
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
          />

          <View style={styles.inputRow}>
            <DropdownMenu
              label="Task category"
              options={['Field Report', 'Others']}
              onSelect={(option) => console.log('Selected category:', option)}
            />

            <MemberDropdown
              teamMembers={[
                { id: '1', name: 'Ronke Ugoju', avatar: 'https://via.placeholder.com/40' },
                { id: '2', name: 'Itunu Babatope', avatar: 'https://via.placeholder.com/40' },
                { id: '3', name: 'Koya Kasoro', avatar: 'https://via.placeholder.com/40' },
                { id: '4', name: 'Isaac Tope', avatar: 'https://via.placeholder.com/40' },
              ]}
              onAddMembers={(principal: Member[], co: Member[]) => {
                setPrincipalMembers(principal);
                setCoMembers(co);
              }}
            />
          </View>
        </View>
      </View>

      <CustomButton title="Create Task" onPress={handleCreateTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    marginTop: 33,
  },
  lightBg: {
    backgroundColor: '#232533',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
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
    marginBottom: 16,
    fontSize: 24,
  },
  descriptionInput: {
    color: '#fff',
    marginBottom: 16,
    fontSize: 12,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
