import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define your stack param list
type RootStackParamList = {
  Root: undefined;
  TaskList: undefined;
  CreateTask: undefined;
};

// Define a type for the navigation prop
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
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Create Task" onPress={handleCreateTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 16,
  },
  label: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#2A2A3A',
    color: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
});
