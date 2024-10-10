// HomeScreen.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Colors } from '@/constants/Colors';
import { RootState } from '../../redux/store';
import { Calendar } from 'react-native-calendars';
import { View, RefreshControl, Text, Image, ScrollView, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import PreviewList from '@/components/PreviewList';
import Search from '@/components/Search';
import TaskDetails from '../pages/taskDetails';

export default function HomeScreen() {
  // const darkMode = useSelector((state) => state.theme.darkMode);
  // const colors = darkMode ? Colors.dark : Colors.light;
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [selectedDate, setSelectedDate] = useState('');

  interface DateObject {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
  }

  const onDayPress = (day: DateObject) => {
    setSelectedDate(day.dateString);
  };

  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const logo = require('../../assets/images/logo.png');

  const handleSearchChange = (text: string) => setSearchQuery(text);

  const handlePreviewListPress = (task: any) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedTask(null);
  };

  const handleEditTask = () => {
    // Logic to edit task
  };

  const handleDeleteTask = () => {
    // Logic to delete task
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>Tosin Onalaja</Text>
        </View>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>

      <Search placeholder="Looking for something?" onChangeText={handleSearchChange} />

      <View style={styles.dateContainer}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: { 
              selected: true, 
              marked: true, 
              selectedColor: '#E50000',
              dotColor: '#E50000' },
          }}
          theme={{
            calendarBackground: '#161622',
            dayTextColor: '#ffffff',
            textSectionTitleColor: '#ffffff',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#E50000',
            arrowColor: '#E50000',
            dayContainerStyle: {
              paddingHorizontal: 10,
            },
          }}
        />
      </View>

      <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesTitle}>Your task for today</Text>
        <PreviewList tasks={tasks} onPress={handlePreviewListPress} />
      </View>

      {/* {selectedTask && (
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={handleModalClose}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TaskDetails
                title={selectedTask.title}
                description={selectedTask.description}
                priority={selectedTask.priority}
                status={selectedTask.status}
                category={selectedTask.categoryS}
                principalMembers={[]}
                coMembers={[]}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                onClose={handleModalClose}
              />
            </View>
          </View>
        </Modal>
      )} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 16,
    paddingTop: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    color: '#fff',
    fontSize: 14,
  },
  username: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  logo: {
    width: 50,
    height: 50,
  },

  selectedDateText: {
    marginTop: 20,
    fontSize: 18,
  },

  dateContainer: {
    flex: 1,
    backgroundColor: '#161622',
    alignItems: 'center',
    justifyContent: 'center',
  },

  activitiesContainer: {
    marginBottom: 16,
  },
  activitiesTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginTop: 12,
    marginBottom: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#2A2A3A',
    padding: 16,
    borderRadius: 8,
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
