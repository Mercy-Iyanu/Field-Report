import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, FlatList } from 'react-native';

interface PriorityLevelProps {
  options: { id: string; label: string }[];
  currentOption: string;
  onSelect: (option: string) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  isDisabled?: boolean;
}

const getIndicatorColor = (priority: string) => {
  switch (priority) {
    case 'High Priority':
      return '#ff4040';
    case 'Medium Priority':
      return '#ffbf00';
    case 'Low Priority':
      return '#00aaff';
    default:
      return '#fff';
  }
};

const PriorityLevel: React.FC<PriorityLevelProps> = ({ options, currentOption, onSelect, modalVisible, setModalVisible }) => {
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
      <TouchableOpacity style={styles.priorityContainer} onPress={() => setModalVisible(true)}>
        <View style={[styles.indicator, { backgroundColor: getIndicatorColor(currentOption) }]} />
        <Text style={styles.priorityText}>{currentOption}</Text>
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
  priorityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  priorityText: {
    color: '#fff',
    fontSize: 10,
  },
  modalContainer: {
    backgroundColor: '#161622',
    padding: 20,
  },
  option: {
    backgroundColor: '#1E1E2D',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default PriorityLevel;
