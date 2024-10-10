import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Animated, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import PriorityLevel from '@/components/PriorityLevel';
import StatusLevel from '@/components/StatusLevel';
import DropdownMenu from '@/components/DropdownMenu';

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
  category: string;
  principalMembers: Member[];
  coMembers: Member[];
  onEditTask: () => void;
  onDeleteTask: () => void;
  onClose: () => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  title,
  description,
  priority,
  status,
  category,
  principalMembers,
  coMembers,
  onEditTask,
  onDeleteTask,
  onClose,
}) => {
  const slideAnim = useRef(new Animated.Value(300)).current;

  const [currentPriority, setCurrentPriority] = useState<string>('High Priority');
  const [currentStatus, setCurrentStatus] = useState<string>('Pending');
  const [currentCategory, setCurrentCategory] = useState(category);
  const [modalVisible, setModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderMember = ({ item }: { item: Member }) => (
    <View style={styles.memberContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.memberName}>{item.name}</Text>
    </View>
  );

  return (
    <Modal transparent animationType="none" visible={true} onRequestClose={onClose}>
      <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }] }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Task Details</Text>
        </View>
        <View style={styles.lightBg}>
          <View style={styles.Levelheader}>
            <PriorityLevel
              options={[
                { id: '1', label: 'High Priority' },
                { id: '2', label: 'Medium Priority' },
                { id: '3', label: 'Low Priority' },
              ]}
              currentOption={currentPriority} 
              onSelect={setCurrentPriority}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />

            <StatusLevel
              options={[
                { id: '1', label: 'Pending' },
                { id: '2', label: 'In Progress' },
                { id: '3', label: 'Completed' },
              ]}
              currentOption={currentStatus}
              onSelect={setCurrentStatus}
              modalVisible={statusModalVisible}
              setModalVisible={setStatusModalVisible}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.titleInput}>{title}</Text>
            <Text style={styles.descriptionInput}>{description}</Text>
            <DropdownMenu
              options={['Field Report', 'Others']}
              onSelect={setCurrentCategory}
            />

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
          </View>
        </View>
        <CustomButton title="Update Task" onPress={onEditTask} />
        <CustomButton title="Delete Task" onPress={onDeleteTask} />
      </Animated.View>
    </Modal>
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
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightBg: {
    backgroundColor: '#232533',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  Levelheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
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