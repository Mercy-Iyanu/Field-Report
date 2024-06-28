import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import PriorityLevel from './PriorityLevel';
import StatusLevel from './StatusLevel';
import CustomButton from './CustomButton';

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
});
