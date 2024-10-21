import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MembersTasksProps {
  options: string[];
  onSelect: (option: string) => void;
}

export default function MembersTasks({ options, onSelect }: MembersTasksProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setShowModal(false);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowModal(true)} style={styles.dropdownHeader}>
        <Text style={styles.dropdownText}>{selectedOption}</Text>
        <Ionicons name="chevron-down" size={20} color="#fff" style={styles.icon} />
      </TouchableOpacity>

      {/* Modal to show task options */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalOptionsContainer}>
            {options.map((option, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelect(option)} style={styles.modalOption}>
                <Text style={styles.modalOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginTop: 20
  },
  dropdownHeader: {
    backgroundColor: '#161622',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#3B3B3E',
    borderWidth: 1,
  },
  dropdownText: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1E1E2D',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    maxHeight: '50%',
  },
  modalOptionsContainer: {
    paddingHorizontal: 20,
  },
  modalOption: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  modalOptionText: {
    color: '#fff',
    fontSize: 18,
  },
});