import PreviewList from '@/components/PreviewList';
import Search from '@/components/Search';
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateNavigator from '@/components/DateNavigator';
import MembersTasks from '@/components/MembersTasks';

const handlePreviewListPress = (list: any) => {
  console.log("List pressed:", list);
}
const previewLists = [
  {title: 'Attend seminar', description: 'Posted at 9am'},
  {title: 'Call Mr. Amusan', description: 'Posted at 8:45 am'},
  {title: 'Schedule meeting with Dele travels', description: 'Posted at 1pm'}
]

export default function TaskListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('2024-06-11');
  const [selectedFilter, setSelectedFilter] = useState('My tasks');

  const handleSearchChange = (text: string) => setSearchQuery(text);
  const handleDateNext = () => setSelectedDate(new Date().toISOString().split('T')[0]);
  const handleDatePrevious = () => setSelectedDate(new Date().toISOString().split('T')[0]);
  const handleFilterSelect = (option: string) => setSelectedFilter(option);

  const handleAddTask = () => {
    console.log("Add task button pressed");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>
      <Text style={styles.pageTitle}>Task List</Text>
      <Search placeholder="Search for a task" onChangeText={handleSearchChange} />
      <DateNavigator date={selectedDate} onNext={handleDateNext} onPrevious={handleDatePrevious} />
      <MembersTasks options={['My tasks', 'Itunu Babatope', 'Koya Kasoro', 'Isaac Tope']} onSelect={handleFilterSelect} />
      <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesTitle}>My tasks</Text>
        {previewLists.map ((list, index) => (
          <PreviewList 
            key={index}
            title={list.title}
            description={list.description}
            onPress={() => handlePreviewListPress(list)}
          />
        ))}
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Ionicons name="add-circle" size={30} color="#FFF" />
      </TouchableOpacity>
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
  }
});