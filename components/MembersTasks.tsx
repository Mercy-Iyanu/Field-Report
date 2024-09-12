import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MembersTasksProps {
  options: string[];
  onSelect: (option: string) => void;
}

export default function MembersTasks({ options, onSelect  }: MembersTasksProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
    onSelect(option);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={() => setShowOptions(!showOptions)} style={styles.dropdownHeader}>
        {/* <Image source={{ uri: avatarUri }} style={styles.avatar} /> */}
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
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    backgroundColor: '#161622',
    borderRadius: 8,
    marginVertical: 17,
    borderColor: '#3B3B3E',
    borderWidth: 1,
    position: 'relative', 
    zIndex: 1,
  },
  dropdownHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  dropdownOptions: {
    backgroundColor: '#161622',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 3,
    borderRadius: 8,
  },
  dropdownOption: {
    padding: 10,
    // borderBottomColor: '#3B3B3E',
    // borderBottomWidth: 1,
  },
  dropdownText: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});