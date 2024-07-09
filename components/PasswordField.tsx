import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PasswordFieldProps {
  value: string;
  placeholder: string;
  label: string;
  onChangeText: (text: string) => void;
}

export default function PasswordField({ value, placeholder, label, onChangeText }: PasswordFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const labelPosition = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(labelPosition, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const labelStyle = {
    position: 'absolute' as 'absolute',
    left: 14,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [22, -10],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#fff'],
    }),
    backgroundColor: '#1E1E2D',
    paddingHorizontal: 4,
    zIndex: 1,
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#8e8e93"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setSecureText(!secureText)}
      >
        <Ionicons
          name={secureText ? 'eye-off' : 'eye'}
          size={20}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    position: 'relative',
  },
  input: {
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 8,
    height: 58,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#1E1E2D',
    paddingRight: 40, // Add space for the icon
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 18,
  },
});