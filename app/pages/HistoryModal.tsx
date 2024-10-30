import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

type Notification = {
  id: string;
  user: string;
  activity: string;
  time: string;
  title: string;
  read: boolean;
};

type HistoryModalProps = {
  onClose: () => void;
};

const fieldReports: Notification[] = [
  {
    id: '1',
    user: 'Itunu Babatope',
    activity: 'logged a field report',
    time: '20 mins ago',
    title: 'Call Mr. Amusan task submitted.',
    read: false,
  },
  {
    id: '2',
    user: 'Koya Kasoro',
    activity: 'added a new task',
    time: '2 hrs ago',
    title: 'Schedule NDC training for SkyBlue Travels',
    read: false,
  },
];

const anniversaryReports: Notification[] = [
  {
    id: '3',
    user: 'Tosin Onalaja',
    activity: 'celebrated work anniversary',
    time: '10 hrs ago',
    title: 'Congratulations on your anniversary!',
    read: true,
  },
];

const HistoryModal: React.FC<HistoryModalProps> = ({ onClose }) => {
  const [selectedTab, setSelectedTab] = useState<'Field Reports' | 'Anniversary'>('Field Reports');
  const [fadeAnim] = useState(new Animated.Value(1));

  const renderNotifications = () => {
    const data = selectedTab === 'Field Reports' ? fieldReports : anniversaryReports;
    return data.map((notification) => (
      <TouchableOpacity key={notification.id} style={[styles.notificationCard, !notification.read && styles.unreadNotification]}>
        <View style={styles.notificationHeader}>
          <MaterialIcons
            name={selectedTab === 'Field Reports' ? 'work-outline' : 'celebration'}
            size={24}
            color={selectedTab === 'Field Reports' ? '#4CAF50' : '#FF9800'}
          />
          <View style={styles.notificationTextContainer}>
            <Text style={styles.activity}>{notification.user} {notification.activity}</Text>
            <Text style={styles.time}>{notification.time}</Text>
          </View>
          {!notification.read && <View style={styles.unreadDot} />}
        </View>
        <Text style={styles.title}>{notification.title}</Text>
      </TouchableOpacity>
    ));
  };

  const switchTab = (tab: 'Field Reports' | 'Anniversary') => {
    if (tab !== selectedTab) {
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
      ]).start();
      setSelectedTab(tab);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.notificationBack}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
          <Text style={styles.headerTitle}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabs}>
        {['Field Reports', 'Anniversary'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => switchTab(tab as 'Field Reports' | 'Anniversary')}
            style={styles.tabButton}
          >
            <Text style={selectedTab === tab ? styles.selectedTab : styles.tab}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content with Fade Animation */}
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <ScrollView>{renderNotifications()}</ScrollView>
      </Animated.View>
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
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
  },
  tab: {
    color: '#ccc',
    fontSize: 16,
  },
  selectedTab: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 20,
  },
  notificationCard: {
    backgroundColor: '#222233',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  unreadNotification: {
    borderColor: '#4CAF50',
    borderWidth: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  notificationTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  activity: {
    color: '#fff',
    fontSize: 16,
  },
  time: {
    color: '#aaa',
    fontSize: 12,
  },
  title: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
});

export default HistoryModal;
