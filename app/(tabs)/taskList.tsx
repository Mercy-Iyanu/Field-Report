import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from '../../redux/slices/taskSlice';
import { RootState } from '../../redux/store';
import { Ionicons } from '@expo/vector-icons';
import DateNavigatorContainer from '@/components/DateNavigatorContainer';
import MembersTasks from '@/components/MembersTasks';
import CreateTaskModal from '../pages/createTask';
import PreviewList from '@/components/PreviewList';
import Search from '@/components/Search';
import TaskDetails from '../pages/taskDetails';

export default function TaskListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedFilter, setSelectedFilter] = useState('My tasks');
  const [isModalVisible, setModalVisible] = useState(false);
  
  const dispatch = useDispatch();

  const [taskModalVisible, setTaskModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleSearchChange = (text: string) => setSearchQuery(text);

  // Functions to navigate between dates
  const handleDateNext = () => setSelectedDate(new Date().toISOString().split('T')[0]);
  const handleDatePrevious = () => setSelectedDate(new Date().toISOString().split('T')[0]);

  const handleFilterSelect = (option: string) => setSelectedFilter(option);

  const handlePreviewListPress = (task: any) => {
    setSelectedTask(task);
    setTaskModalVisible(true);
  };

  const handleAddTask = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleTaskCreated = (task: any) => {
    dispatch(addTask(task));
    handleCloseModal();
  };

  const handleDeleteTask = (taskId: string) => {
    if (selectedTask) {
      dispatch(deleteTask(selectedTask.id));
      setTaskModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        <Text style={styles.pageTitle}>Task List</Text>
        <Search 
          placeholder="Search for a task" 
          onChangeText={handleSearchChange} 
        />
        <DateNavigatorContainer />
        <MembersTasks 
          options={['My tasks', 'Itunu Babatope', 'Koya Kasoro', 'Isaac Tope']} 
          onSelect={handleFilterSelect} 
        />
        <View style={styles.activitiesContainer}>
          <Text style={styles.activitiesTitle}>My tasks</Text>
          <PreviewList 
            tasks={tasks} 
            onPress={handlePreviewListPress} 
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Ionicons name="add-circle" size={30} color="#FFF" />
      </TouchableOpacity>
      <CreateTaskModal 
        isVisible={isModalVisible} 
        onClose={handleCloseModal} 
        onTaskCreated={handleTaskCreated} 
      />
      
      {selectedTask && (
        <Modal animationType="slide" transparent={true} visible={taskModalVisible} onRequestClose={() => setTaskModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TaskDetails
                title={selectedTask.title}
                description={selectedTask.description}
                priority={selectedTask.priority || 'N/A'}
                status={selectedTask.status || 'N/A'}
                category={''}
                principalMembers={selectedTask.principalMembers || []}
                coMembers={selectedTask.coMembers || []}
                onEditTask={() => console.log("Edit task")}
                onDeleteTask={() => handleDeleteTask(selectedTask.id)}
                onClose={() => setTaskModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  pageTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 26,
  },
  activitiesContainer: {
    marginBottom: 16,
  },
  activitiesTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#E50000',
    opacity: 0.9,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
});
