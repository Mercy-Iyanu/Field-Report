// PreviewList.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Task {
  title: string;
  description: string;
  priority?: string;
  status?: string;
}

interface PreviewListProps {
  tasks: Task[];
  onPress: (task: Task) => void;
}

const PreviewList: React.FC<PreviewListProps> = ({ tasks, onPress }) => {
  return (
    <View>
      {tasks.map((task, index) => (
        <TouchableOpacity key={index} style={styles.taskItem} onPress={() => onPress(task)}>
          <Text style={styles.taskTitle}>{task.title}</Text>
          <Text style={styles.taskDescription}>{task.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#2A2A3A',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  taskTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDescription: {
    color: '#AAA',
    fontSize: 14,
  },
});

export default PreviewList;
