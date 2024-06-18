import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Status = 'Pending' | 'Ongoing' | 'Completed';
type StatusOption = { label: Status; color: string; icon: 'alert-circle' | 'checkmark-circle' | 'checkmark-done-circle' };

const statuses: StatusOption[] = [
  { label: 'Pending', color: '#E50000', icon: 'alert-circle' },
  { label: 'Ongoing', color: '#00C853', icon: 'checkmark-circle' },
  { label: 'Completed', color: '#000000', icon: 'checkmark-done-circle' },
];

export default function Indicator({ onSelect }: { onSelect: (status: Status) => void }) {
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (status: Status) => {
    setSelectedStatus(status);
    onSelect(status);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.dropdownButtonText}>
          {selectedStatus ? selectedStatus : 'Select Status'}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#fff" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={statuses}
              keyExtractor={(item) => item.label}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.statusItem}
                  onPress={() => handleSelect(item.label)}
                >
                  <Ionicons name={item.icon} size={20} color={item.color} style={styles.icon} />
                  <Text style={styles.statusText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2A2A3A',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 58,
    borderRadius: 8,
  },
  dropdownButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#161622',
    borderRadius: 8,
    padding: 16,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: '#2A2A3A',
  },
  icon: {
    marginRight: 10,
  },
  statusText: {
    color: '#fff',
    fontSize: 16,
  },
});
