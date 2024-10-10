import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CelebrateFormField from '@/components/CelebrateFormField';

export default function CelebratePage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>New Anniversary</Text>
      <View style={styles.dropdownDateContainer}>
      </View>
      <CelebrateFormField />
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
  dropdownDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});