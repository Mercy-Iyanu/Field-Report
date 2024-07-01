import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TaskDetailProps {
  title: string;
  description: string;
  priority: string;
  status: string;
}

const TaskDetails: React.FC<TaskDetailProps> = ({ title, description, priority, status }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{title}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{description}</Text>

      <Text style={styles.label}>Priority:</Text>
      <Text style={styles.value}>{priority}</Text>

      <Text style={styles.label}>Status:</Text>
      <Text style={styles.value}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2A3A',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  value: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 16,
  },
});

export default TaskDetails;