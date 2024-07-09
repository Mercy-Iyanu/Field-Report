import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import PriorityLevel from './PriorityLevel';
import StatusLevel from './StatusLevel';
import CustomButton from './CustomButton';
import DropdownMenu from './DropdownMenu';
import MemberDropdown from './MemberDropdown';

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

interface CreateTaskFormFieldProps {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onCreateTask: () => void;
}

export default function CreateTaskFormField({ setTitle, setDescription, onCreateTask }: CreateTaskFormFieldProps) {
  const [priority, setPriority] = React.useState('High Priority');
  const [status, setStatus] = React.useState('Pending');

  const handleCreateTask = () => {
    onCreateTask();
  };

  return (
    <View style={styles.container}>
      <View style={styles.lightBg}>
        <View style={styles.header}>
          <PriorityLevel
            options={options}
            currentOption={priority}
            onSelect={setPriority}
            modalVisible={false} // Set to false as it's not used in this component
            setModalVisible={() => {}} // Dummy function
          />
          <StatusLevel
            options={statusOptions}
            currentOption={status}
            onSelect={setStatus}
            modalVisible={false} // Set to false as it's not used in this component
            setModalVisible={() => {}} // Dummy function
          />
        </View>

        <View style={styles.content}>
          <TextInput
            style={styles.titleInput}
            placeholder="Add task title"
            placeholderTextColor="#888"
            onChangeText={setTitle} // Update title state
          />
          <TextInput
            style={styles.descriptionInput}
            placeholder="Add task description"
            placeholderTextColor="#888"
            onChangeText={setDescription} // Update description state
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
              onAddMembers={(principal: any[], co: any[]) => {}}
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
