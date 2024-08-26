import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TypeOfDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

export default function TypeOfDropdown({ options, onSelect }: TypeOfDropdownProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
    setModalVisible(false);
    onSelect(option);
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.dropdownHeader}>
        <Text style={styles.dropdownText}>{selectedOption}</Text>
        <Ionicons name={showOptions ? 'chevron-up' : 'chevron-down'} size={20} color="#fff" style={styles.icon} />
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelect(option)}
                style={styles.dropdownOption}
              >
                <Text style={styles.dropdownText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  dropdownHeader: {
    backgroundColor: '#161622',
    borderRadius: 8,
    marginVertical: 17,
    marginBottom: 26,
    borderColor: '#3B3B3E',
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#1E1E2D',
    borderRadius: 10,
    padding: 20,
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownText: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});
