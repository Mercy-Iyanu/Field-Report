import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo icons
import PriorityLevel from '@/components/PriorityLevel';
import StatusLevel from '@/components/StatusLevel';
import CustomButton from '@/components/CustomButton';

interface Member {
  id: string;
  name: string;
  avatar: string;
}

interface TaskDetailsProps {
  title: string;
  description: string;
  priority: string;
  status: string;
  principalMembers: Member[];
  coMembers: Member[];
  onEditTask: () => void;
  onDeleteTask: () => void;
}

const TaskDetails = ({
  title,
  description,
  priority,
  status,
  principalMembers,
  coMembers,
  onEditTask,
  onDeleteTask,
}: TaskDetailsProps) => {
  const renderMember = ({ item }: { item: Member }) => (
    <View style={styles.memberContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.memberName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Cancel pressed')}>
          <Ionicons name="close-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Task Detail</Text>
        <View /> 
      </View>

      <View style={styles.content}>
        <Text style={styles.titleInput}>{title}</Text>
        <Text style={styles.descriptionInput}>{description}</Text>

        <Text style={styles.label}>Principal Members:</Text>
        <FlatList
          data={principalMembers}
          renderItem={renderMember}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.label}>Co Members:</Text>
        <FlatList
          data={coMembers}
          renderItem={renderMember}
          keyExtractor={(item) => item.id}
        />

        {/* Edit Task Button */}
        <CustomButton title="Edit Task" onPress={onEditTask} />

        {/* Delete Task Button */}
        <CustomButton title="Delete Task" onPress={onDeleteTask} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 16,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 20,
  },
  titleInput: {
    color: '#fff',
    marginBottom: 16,
    fontSize: 24,
  },
  descriptionInput: {
    color: '#fff',
    marginBottom: 16,
    fontSize: 12,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  memberName: {
    color: '#fff',
    fontSize: 12,
  },
});

export default TaskDetails;
