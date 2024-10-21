import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Colors } from '@/constants/Colors';
import { RootState } from '../../redux/store';
import { View, RefreshControl, Text, Image, ScrollView, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import PreviewList from '@/components/PreviewList';
import Search from '@/components/Search';
import TaskDetails from '../pages/taskDetails';

export default function HomeScreen() {
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

  // Get today's date for highlighting
  const today = new Date().toISOString().split('T')[0];

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

      {/* <Search placeholder="Looking for something?" onChangeText={handleSearchChange} /> */}

      <View style={styles.dateContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {Array.from({ length: 30 }, (_, i) => {
            const day = new Date();
            day.setDate(day.getDate() + i);
            const dateString = day.toISOString().split('T')[0];
            return (
              <TouchableOpacity
                key={dateString}
                onPress={() => onDayPress({ 
                  dateString,
                  day: day.getDate(),
                  month: day.getMonth() + 1,
                  year: day.getFullYear(),
                  timestamp: day.getTime(),
                })}
                style={[
                  styles.dateButton,
                  dateString === today ? styles.todayButton : {},
                  selectedDate === dateString ? styles.selectedDateButton : {},
                ]}
              >
                <Text style={[
                  styles.dateText,
                  dateString === today ? styles.todayText : {},
                  selectedDate === dateString ? styles.selectedDateText : {},
                ]}>
                  {day.getDate()}
                </Text>
                <Text style={styles.monthText}>
                  {day.toLocaleString('default', { month: 'short' })}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesTitle}>Tasks for the day</Text>
        <PreviewList tasks={tasks} onPress={handlePreviewListPress} />
      </View>

      {selectedTask && (
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
      )}
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
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginBottom: 10,
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
  dateButton: {
    backgroundColor: '#2A2A3A',
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // transition: '0.3s',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  todayButton: {
    backgroundColor: '#E50000', // Distinct style for today's date
    shadowColor: '#E50000',
    elevation: 5,
  },
  selectedDateButton: {
    backgroundColor: '#E50000',
    shadowColor: '#E50000',
    elevation: 5,
  },
  dateText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  todayText: {
    color: '#ffffff',
    textDecorationLine: 'underline', // Distinctive style for today's date
  },
  selectedDateText: {
    color: '#ffffff',
  },
  monthText: {
    color: '#ccc',
    fontSize: 14,
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
