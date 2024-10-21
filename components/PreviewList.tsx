import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

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
  const noTasksImage = require('../assets/images/no-task-yet.png');

  if (tasks.length === 0) {
    // Render an image and message when no tasks are available
    return (
      <View style={styles.emptyContainer}>
        <Image source={noTasksImage} style={styles.emptyImage} />
        <Text style={styles.emptyText}>No tasks yet.</Text>
      </View>
    );
  }

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
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyImage: {
    width: '100%',
    marginBottom: 10,
  },
  emptyText: {
    color: '#AAA',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default PreviewList;
