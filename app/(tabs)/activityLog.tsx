import React, { useState, useCallback } from 'react';
import { Text, View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ActivityFormField from '@/components/ActivityFormField';
import OtherFormField from '@/components/OtherFormField';
import TypeOfDropdown from '@/components/TypeOfDropdown';

export default function ActivityLogPage() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  console.log('Task details:', tasks)

  const [refreshing, setRefreshing] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Field Report');  // Default to 'Field Report'
  const [reports, setReports] = useState<any[]>([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);  // Update selected option
  };

  const addReport = (report: any) => {
    setReports([...reports, report]);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Text style={styles.pageTitle}>Activity Log</Text>
      <View style={styles.dropdownDateContainer}>
        <TypeOfDropdown
          options={['Field Report', 'Others']}
          onSelect={handleOptionSelect}  // Handle selection changes
        />
      </View>

      {/* Conditionally render ActivityFormField or OtherFormField */}
      {selectedOption === 'Field Report' ? (
        <ActivityFormField onAddReport={addReport} />
      ) : (
        <OtherFormField onAddReport={addReport} />
      )}
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