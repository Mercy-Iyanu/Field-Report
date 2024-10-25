import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  fontSize?: number;
}

export default function CustomButton({
  title,
  onPress,
  backgroundColor = '#E50000',
  textColor = '#FFFFFF',
  paddingVertical = 10,
  paddingHorizontal = 10,
  borderRadius = 8,
  fontSize = 16,
}: CustomButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor,
          paddingVertical,
          paddingHorizontal,
          borderRadius,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor, fontSize }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontWeight: '500',
  },
});