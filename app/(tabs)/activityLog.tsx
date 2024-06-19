import ActivityFormField from '@/components/ActivityFormField';
import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function ActivityLogPage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Activity Log</Text>
      <ActivityFormField 

      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  pageTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 26,
  },
});
