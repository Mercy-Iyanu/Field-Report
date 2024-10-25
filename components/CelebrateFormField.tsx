import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextField from './TextField';
import DropdownMenu from './DropdownMenu';
import CustomButton from './CustomButton';
import RepeatEvent from './RepeatEvent';
import NotificationMessage from './NotificationMessage';

interface CelebrateFormFieldProps {
  options: string[];
  onSubmit: (text: string, option: string) => void;
}

export default function CelebrateFormField({ options, onSubmit }: CelebrateFormFieldProps) {
  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [repeat, setRepeat] = useState({ enabled: false, interval: 'Daily' });
  const [notification, setNotification] = useState({ message: '', isVisible: false, isSuccess: true });

  const handleTextChange = (input: string) => {
    setText(input);
    setNotification({ ...notification, isVisible: false });
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setNotification({ ...notification, isVisible: false });
  };

  const handleSubmit = () => {
    if (!text || !selectedOption) {
      setNotification({ message: 'Please fill out all fields before setting the reminder.', isVisible: true, isSuccess: false });
      return;
    }

    onSubmit(text, selectedOption);
    setText('');
    setNotification({ message: 'Reminder successfully set.', isVisible: true, isSuccess: true });
  };

  return (
    <View style={styles.formContainer}>
      <TextField
        value={text}
        placeholder="Occassion"
        label="Occassion"
        onChangeText={handleTextChange}
      />
      <DropdownMenu
        options={options}
        onSelect={handleOptionSelect}
      />
      <TextField
        value={text}
        placeholder="Celebrant's name"
        label="Celebrant's name"
        onChangeText={handleTextChange}
      />
      <RepeatEvent onRepeatChange={setRepeat} />
      <CustomButton title="Set reminder" onPress={handleSubmit} />
      <NotificationMessage 
        message={notification.message} 
        isVisible={notification.isVisible} 
        duration={3000} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
    zIndex: 1,
  },
  dropdownWrapper: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    zIndex: 2,
  },
});