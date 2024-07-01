import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

interface PreviewListProps {
  title: string;
  description: string;
  onPress: () => void;
}

export default function PreviewList({ title, description, onPress }: PreviewListProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.activityItem}>
      <View>
        <Text style={styles.activityText}>{title}</Text>
        <Text style={styles.activityDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  activityItem: {
    backgroundColor: '#232533',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginBottom: 12,
  },
  activityText: {
    color: '#fff',
    fontSize: 15,
  },
  activityDescription: {
    color: '#CDCDE0',
    fontSize: 14,
  },
});