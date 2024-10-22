import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type HistoryModalProps = {
  onClose: () => void;
};

export default function HistoryModal({onClose}: HistoryModalProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onClose} style={styles.header}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
          <Text style={styles.headerTitle}>History</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 16,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});