import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CreateTaskFormField from '@/components/CreateTaskFormField';

interface CreateTaskModalProps {
  isVisible: boolean;
  onClose: () => void;
  onTaskCreated: (task: any) => void; 
}

export default function CreateTaskModal({ isVisible, onClose, onTaskCreated }: CreateTaskModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTask = () => {
    if (!title || !description) {
      alert('Please fill out all fields before creating the task.');
      return;
    }

    const newTask = { title, description };
    onTaskCreated(newTask);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="chevron-back-outline" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Create Task</Text>
          </View>
          <CreateTaskFormField
            setTitle={setTitle}
            setDescription={setDescription}
            onCreateTask={handleCreateTask}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#161622',
    paddingTop: 35,
    padding: 20,
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
});
