import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface PriorityLevelProps {
  onSelect: (level: string) => void;
}

export default function PriorityLevel({ onSelect }: PriorityLevelProps) {
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);

  const handleSelect = (level: string) => {
    setSelectedPriority(level);
    onSelect(level);
  };

  return (
    <View style={styles.container}>
      <Text style= {styles.priorityTitle}>Priority level:</Text>
      <TouchableOpacity
        style={[styles.priorityButton, selectedPriority === 'High' && styles.selectedHigh]}
        onPress={() => handleSelect('High')}
      >
        <Text style={styles.priorityText}>High</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.priorityButton, selectedPriority === 'Mid' && styles.selectedMid]}
        onPress={() => handleSelect('Mid')}
      >
        <Text style={styles.priorityText}>Mid</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.priorityButton, selectedPriority === 'Low' && styles.selectedLow]}
        onPress={() => handleSelect('Low')}
      >
        <Text style={styles.priorityText}>Low</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  priorityTitle: {
    color: '#fff',
  },
  priorityButton: {
    flex: 1, 
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  selectedHigh: {
    backgroundColor: '#FF4C4C',
  },
  selectedMid: {
    backgroundColor: '#FFA500',
  },
  selectedLow: {
    backgroundColor: '#4CAF50',
  },
  priorityText: {
    color: '#fff',
    fontSize: 16,
  },
});
