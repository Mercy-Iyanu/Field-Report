import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type PrivacyAndSecurityModalProps = {
  onClose: () => void;
};

export default function PrivacyAndSecurityModal({ onClose }: PrivacyAndSecurityModalProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy and Security</Text>
        <View /> {/* This empty View is used for alignment */}
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <Text style={styles.text}>Manage your privacy settings here.</Text>
        
        {/* Add more sections as needed */}
        
        <Text style={styles.sectionTitle}>Security</Text>
        <Text style={styles.text}>Manage your security settings here.</Text>
        
        {/* Add more sections as needed */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 16,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 20,
  },
});
