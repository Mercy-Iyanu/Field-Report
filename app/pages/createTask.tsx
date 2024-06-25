import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types'; // Ensure this path is correct

type CreateTaskPageProps = NativeStackScreenProps<RootStackParamList, 'CreateTask'>;

export default function CreateTaskPage({ navigation }: CreateTaskPageProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTask = () => {
    // Handle task creation logic
    console.log('Task created:', title, description);
    navigation.goBack(); // Navigate back to the task list page
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.priorityContainer}>
          <Text style={styles.priorityText}>High Priority</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Pending</Text>
        </View>
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
    backgroundColor: '#2A2A3A',
    color: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 18,
  },
  descriptionInput: {
    backgroundColor: '#2A2A3A',
    color: '#fff',
    borderRadius: 8,
    padding: 16,
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
});
