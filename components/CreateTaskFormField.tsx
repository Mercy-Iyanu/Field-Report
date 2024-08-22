import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import CustomButton from './CustomButton';
import DropdownMenu from './DropdownMenu';
import MemberDropdown from './MemberDropdown';
import PriorityLevel from './PriorityLevel';
import StatusLevel from './StatusLevel';

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

interface CreateTaskFormFieldProps {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onCreateTask: () => void;
}

export default function CreateTaskFormField({
  setTitle,
  setDescription,
  onCreateTask,
}: CreateTaskFormFieldProps) {
  const [priority, setPriority] = useState<string>('High Priority');
  const [status, setStatus] = useState<string>('Pending');
  const [priorityModalVisible, setPriorityModalVisible] = useState<boolean>(false);
  const [statusModalVisible, setStatusModalVisible] = useState<boolean>(false);
  const [principalMembers, setPrincipalMembers] = useState<Member[]>([]);
  const [coMembers, setCoMembers] = useState<Member[]>([]);

  const handleCreateTask = () => {
    onCreateTask();
  };

  const handleAddMembers = (principal: Member[], co: Member[]) => {
    setPrincipalMembers(principal);
    setCoMembers(co);
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
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.descriptionInput}
            placeholder="Add task description"
            placeholderTextColor="#888"
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
              onAddMembers={handleAddMembers} // Update selected members
            />
          </View>

          {/* Display Selected Members */}
          <View style={styles.selectedMembersContainer}>
            <Text style={styles.sectionTitle}>Principal Members:</Text>
            {principalMembers.length > 0 ? (
              principalMembers.map((member) => (
                <Text key={member.id} style={styles.memberName}>{member.name}</Text>
              ))
            ) : (
              <Text style={styles.noMembersText}>No principal members selected</Text>
            )}

            <Text style={styles.sectionTitle}>Co-Members:</Text>
            {coMembers.length > 0 ? (
              coMembers.map((member) => (
                <Text key={member.id} style={styles.memberName}>{member.name}</Text>
              ))
            ) : (
              <Text style={styles.noMembersText}>No co-members selected</Text>
            )}
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
  selectedMembersContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  memberName: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 4,
  },
  noMembersText: {
    color: '#888',
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 8,
  },
});
