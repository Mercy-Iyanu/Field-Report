import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PriorityLevel from './PriorityLevel';
import StatusLevel from './StatusLevel';
import CustomButton from './CustomButton';
import DropdownMenu from './DropdownMenu';
import MemberDropdown from './MemberDropdown'; // Import the MemberDropdown component

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

  // Mock avatars data for demonstration
  const avatars = [
    'https://www.canva.com/design/DAGJttY6Ll4/LjQD0ymU3AsZLx41L76Wjw/view?utm_content=DAGJttY6Ll4&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    'https://www.canva.com/design/DAGJttY6Ll4/LjQD0ymU3AsZLx41L76Wjw/view?utm_content=DAGJttY6Ll4&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    'https://www.canva.com/design/DAGJttY6Ll4/LjQD0ymU3AsZLx41L76Wjw/view?utm_content=DAGJttY6Ll4&utm_campaign=designshare&utm_medium=link&utm_source=editor',
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
        />

        <View 
          style={styles.inputRow}
        >
          <DropdownMenu
            label="Task category"
            options={['Field Report', 'Others']}
            onSelect={(option) => console.log('Selected category:', option)} // Handle selection logic
          />

          {/* Add MemberDropdown component */}
          <MemberDropdown
            teamMembers={[
              { id: '1', name: 'John Doe', avatar: 'https://www.canva.com/design/DAGJttY6Ll4/LjQD0ymU3AsZLx41L76Wjw/view?utm_content=DAGJttY6Ll4&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
              { id: '2', name: 'Jane Smith', avatar: 'https://www.canva.com/design/DAGJttY6Ll4/LjQD0ymU3AsZLx41L76Wjw/view?utm_content=DAGJttY6Ll4&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
              { id: '3', name: 'Mike Johnson', avatar: 'https://www.canva.com/design/DAGJttY6Ll4/LjQD0ymU3AsZLx41L76Wjw/view?utm_content=DAGJttY6Ll4&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
            ]}
            onAddMembers={(selectedMembers) => console.log('Selected members:', selectedMembers)}
          />
        </View>
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
    marginTop: 20,
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