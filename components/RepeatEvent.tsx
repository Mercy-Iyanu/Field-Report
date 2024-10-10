import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import DropdownMenu from './DropdownMenu';

const repeatOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

export default function RepeatEvent({ onRepeatChange }: { onRepeatChange: (repeat: { enabled: boolean, interval: string }) => void }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(repeatOptions[0]);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onRepeatChange({ enabled: !isEnabled, interval: selectedOption });
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onRepeatChange({ enabled: isEnabled, interval: option });
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Repeat Event</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {isEnabled && (
        <DropdownMenu
          options={repeatOptions}
          onSelect={handleOptionSelect}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  dropdownWrapper: {
    position: 'absolute',
    top: 50,
    zIndex: 1,  
    width: '100%',
  },
});