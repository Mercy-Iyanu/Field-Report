import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <TouchableOpacity style={styles.button} onPress={toggleDarkMode}>
      <Text style={styles.buttonText}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ThemeSwitcher;
