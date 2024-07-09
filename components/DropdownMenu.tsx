import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DropdownMenuProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

export default function DropdownMenu({ label, options, onSelect }: DropdownMenuProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={() => setShowOptions(!showOptions)} style={styles.dropdownHeader}>
          <Text style={styles.dropdownText}>{selectedOption}</Text>
          <Ionicons name={showOptions ? 'chevron-up' : 'chevron-down'} size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        {showOptions && (
          <View style={styles.dropdownOptions}>
            {options.map((option, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelect(option)} style={styles.dropdownOption}>
                <Text style={styles.dropdownText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginBottom: 16,
    zIndex: 2, // Ensures the container has a higher zIndex
  },
  label: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 8,
  },
  dropdownContainer: {
    position: 'relative',
    backgroundColor: '#1E1E2D',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  dropdownOptions: {
    position: 'absolute',
    top: 58,
    left: 0,
    right: 0,
    backgroundColor: '#161622',
    zIndex: 3, // Ensure the dropdown options have a higher zIndex
    borderRadius: 8,
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    color: '#cecece',
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});