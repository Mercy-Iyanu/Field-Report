import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextField from './TextField';
import DropdownMenu from './DropdownMenu';
import CustomButton from './CustomButton';
import RepeatEvent from './RepeatEvent';

interface CelebrateFormFieldProps {
  options: string[];
  onSubmit: (text: string, option: string) => void;
}

export default function CelebrateFormField({ options, onSubmit }: CelebrateFormFieldProps) {
  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [repeat, setRepeat] = useState({ enabled: false, interval: 'Daily' });

  const handleTextChange = (input: string) => {
    setText(input);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onSubmit(text, selectedOption);
    setText('');
  };

  return (
    <View style={styles.formContainer}>
      <TextField
        value={text}
        placeholder="Celebrant's name"
        label="Celebrant's name" 
        onChangeText={handleTextChange}
      />
      <DropdownMenu options={options} onSelect={handleOptionSelect} />
      <RepeatEvent onRepeatChange={setRepeat} />
      <CustomButton title="Set reminder" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
  },
});