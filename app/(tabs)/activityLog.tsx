import ActivityFormField from '@/components/ActivityFormField';
import TypeOfDropdown from '@/components/TypeOfDropdown';
import { Link } from 'expo-router';
import React, {useState} from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default function ActivityLogPage() {
  const [selectedOption, setSelectedOption] = useState('Birthday');
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Activity Log</Text>
      <View style={styles.dropdownDateContainer}>
        <TypeOfDropdown
          options={['Birthday', 'Wedding Anniversary', 'Agency Anniversary']}
          onSelect={handleOptionSelect}
        />
      </View>  
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
  dropdownDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});
