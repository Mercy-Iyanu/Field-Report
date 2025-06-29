import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Notifications = {
  id: string;
  avatar: string;
  user: string;
  activity: string;
  time: string;
  title: string;
  read: boolean;
};

type NotificationsPageProps = {
  onClose: () => void;
};

const categories = ['All', 'Mentions', 'Task List', 'Activity Log'];

const notifications: { [key: string]: Notifications[] } = {
  all: [
    { 
      id: '1',
      avatar: '../../assets/images/avatar1.jpg', 
      user: 'Itunu Babatope', 
      activity: 'logged a field report', 
      time: '20 mins ago', 
      title: 'Call Mr. Amusan task submitted.',
      read: false
    },
    { 
      id: '2',
      avatar: '../../assets/images/avatar2.jpg', 
      user: 'Koya Kasoro', 
      activity: 'added a new task', 
      time: '2 hrs ago', 
      title: 'Schedule NDC training for SkyBlue Travels',
      read: false 
    },
    { 
      id: '3',
      avatar: '../../assets/images/avatar3.jpg', 
      user: 'Tosin Onalaja', 
      activity: 'has viewed your task', 
      time: '10 hrs ago', 
      title: 'Attend NANTA seminar.',
      read: true 
    },
    { 
      id: '4',
      avatar: '../../assets/images/avatar4.jpg', 
      user: '', 
      activity: 'Our new privacy update', 
      time: '15 hrs ago', 
      title: 'We’ve just updated our privacy policy. No action needed, just to let you know.',
      read: true 
    },
  ],
  mentions: [
    { 
      id: '5',
      avatar: '../../assets/images/avatar1.jpg', 
      user: 'User1', 
      activity: 'mentioned you in a comment', 
      time: '5 mins ago', 
      title: 'Check out the new report.',
      read: false 
    },
    { 
      id: '6',
      avatar: '../../assets/images/avatar3.jpg', 
      user: 'User2', 
      activity: 'mentioned you in a task', 
      time: '1 hr ago', 
      title: 'Review the latest proposal.',
      read: true 
    },
  ],
  taskList: [
    { 
      id: '7', 
      avatar: '../../assets/images/avatar4.jpg', 
      user: 'User3', 
      activity: 'assigned you a new task', 
      time: '30 mins ago', 
      title: 'Prepare for the upcoming meeting.',
      read: true 
    },
    { 
      id: '8', 
      avatar: '../../assets/images/avatar3.jpg', 
      user: 'User4', 
      activity: 'updated task priority', 
      time: '3 hrs ago', 
      title: 'Complete the project milestone.',
      read: false 
    },
  ],
  activityLog: [
    { 
      id: '9', 
      avatar: '../../assets/images/avatar1.jpg', 
      user: 'User5', 
      activity: 'logged a call', 
      time: '1 hr ago', 
      title: 'Review the client meeting notes.',
      read: false 
    },
    { 
      id: '10', 
      avatar: '../../assets/images/avatar4.jpg', 
      user: 'User6', 
      activity: 'reviewed your document', 
      time: '5 hrs ago', 
      title: 'Approve the new proposal.',
      read: true 
    },
  ],
};

const NotificationsPage: React.FC<NotificationsPageProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [readStatus, setReadStatus] = useState<'Read' | 'Unread' | null>(null);

  const renderNotifications = () => {
    const categoryKeyMap: { [key: string]: keyof typeof notifications } = {
      All: 'all',
      Mentions: 'mentions',
      'Task List': 'taskList',
      'Activity Log': 'activityLog',
    };

    const categoryKey = categoryKeyMap[selectedCategory] || 'all';
    let categoryNotifications = notifications[categoryKey];

    if (readStatus) {
      categoryNotifications = categoryNotifications.filter(notification =>
        readStatus === 'Read' ? notification.read : !notification.read
      );
    }

    return categoryNotifications;
  };

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.notificationBack}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
          <Text style={styles.headerTitle}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFilterModal}>
          <Ionicons name="filter-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.dropdown}>
        {categories.map(category => (
          <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)} style={styles.dropdownItem}>
            <Text style={selectedCategory === category ? styles.selectedCategory : styles.category}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={styles.content}>
        {renderNotifications().map(notification => (
          <TouchableOpacity key={notification.id} style={styles.notification}>
            <Image source={{ uri: notification.avatar }} style={styles.avatar} />
            <View style={styles.notificationText}>
              <Text style={styles.activity}>{notification.user} {notification.activity}</Text>
              <Text style={styles.time}>{notification.time}</Text>
              <Text style={styles.title}>{notification.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Filter Modal  */}
      <Modal
        visible={isFilterModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleFilterModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Notifications</Text>
            <TouchableOpacity onPress={() => { setReadStatus(null); toggleFilterModal(); }}>
              <Text style={styles.modalOption}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setReadStatus('Read'); toggleFilterModal(); }}>
              <Text style={styles.modalOption}>Read</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setReadStatus('Unread'); toggleFilterModal(); }}>
              <Text style={styles.modalOption}>Unread</Text>
            </TouchableOpacity>
            <Button title="Close" onPress={toggleFilterModal} />
          </View>
        </View>
      </Modal>
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
  notificationBack: {
    flexDirection: 'row',
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
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  category: {
    color: '#ccc',
    fontSize: 16,
  },
  selectedCategory: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 20,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  activity: {
    color: '#fff',
    fontSize: 16,
  },
  time: {
    color: '#ccc',
    fontSize: 12,
  },
  title: {
    color: '#ccc',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOption: {
    fontSize: 16,
    paddingVertical: 10,
  },
});

export default NotificationsPage;