import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Modal, FlatList } from 'react-native';

interface StatusLevelProps {
  options: { id: string; label: string }[];
  currentOption: string;
  onSelect: (option: string) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const StatusLevel: React.FC<StatusLevelProps> = ({ options, currentOption, onSelect, modalVisible, setModalVisible }) => {
  const renderOption = ({ item }: { item: { id: string; label: string } }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        onSelect(item.label);
        setModalVisible(false);
      }}
    >
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <TouchableOpacity style={styles.statusContainer} onPress={() => setModalVisible(true)}>
        <Text style={styles.statusText}>{currentOption}</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <FlatList
          data={options}
          renderItem={renderOption}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.modalContainer}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    borderWidth: 1,
    borderColor: '#ff4040',
    borderRadius: 10,
    padding: 5,
  },
  statusText: {
    color: '#ff4040',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  option: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#000',
  },
});

export default StatusLevel;
