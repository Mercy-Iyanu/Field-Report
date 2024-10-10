import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DateNavigatorProps {
  date: string;
  onNext: () => void;
  onPrevious: () => void;
}

export default function DateNavigator({ date, onNext, onPrevious }: DateNavigatorProps) {
  return (
    <View style={styles.navigatorContainer}>
      <TouchableOpacity onPress={onPrevious} style={styles.iconButton}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.dateText}>{date}</Text>
      <TouchableOpacity onPress={onNext} style={styles.iconButton}>
        <Ionicons name="chevron-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
  },
  iconButton: {
    padding: 5,
  }
});