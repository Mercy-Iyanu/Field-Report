import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types'; // Ensure this path is correct

type CreateTaskPageProps = NativeStackScreenProps<RootStackParamList, 'CreateTask'>;

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

export default function CreateTaskPage({ navigation }: CreateTaskPageProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priorityModalVisible, setPriorityModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [priority, setPriority] = useState('High Priority');
  const [status, setStatus] = useState('Pending');

  const handleCreateTask = () => {
    // Handle task creation logic
    console.log('Task created:', title, description, priority, status);
    navigation.goBack(); // Navigate back to the task list page
  };

  const renderOption = ({ item }: { item: { id: string, label: string } }, setOption: (option: string) => void, setVisible: (visible: boolean) => void) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        setOption(item.label);
        setVisible(false);
      }}
    >
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.priorityContainer} onPress={() => setPriorityModalVisible(true)}>
          <Text style={styles.priorityText}>{priority}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusContainer} onPress={() => setStatusModalVisible(true)}>
          <Text style={styles.statusText}>{status}</Text>
        </TouchableOpacity>
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

        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Task category</Text>
          <Ionicons name="chevron-down" size={20} color="#fff" />
        </TouchableOpacity>

        <View style={styles.membersContainer}>
          {/* Replace with actual member avatars */}
          <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.memberAvatar} />
          <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.memberAvatar} />
          <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.memberAvatar} />
        </View>
      </View>

      <TouchableOpacity style={styles.createButton} onPress={handleCreateTask}>
        <Text style={styles.createButtonText}>Create Task</Text>
      </TouchableOpacity>

      <Modal visible={priorityModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={options}
            renderItem={(item) => renderOption(item, setPriority, setPriorityModalVisible)}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>

      <Modal visible={statusModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={statusOptions}
            renderItem={(item) => renderOption(item, setStatus, setStatusModalVisible)}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>
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
  priorityContainer: {
    backgroundColor: '#ff4040',
    borderRadius: 10,
    padding: 5,
  },
  priorityText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusContainer: {
    borderWidth: 1,
    borderColor: '#ff4040',
    borderRadius: 10,
    padding: 5,
  },
  statusText: {
    color: '#ff4040',
    fontSize: 14,
    fontWeight: 'bold',
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
  categoryButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2A2A3A',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: '50%',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  membersContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  memberAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  createButton: {
    backgroundColor: '#E50000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  option: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#000',
  },
});
