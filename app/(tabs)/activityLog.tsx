import React, { useState, useCallback } from 'react';
import { Text, View, ScrollView, StyleSheet, RefreshControl, TouchableOpacity } from 'react-native';
import ActivityFormField from '@/components/ActivityFormField';
import TypeOfDropdown from '@/components/TypeOfDropdown';
import FieldReportHistoryModal from '../pages/fieldReportHistory';

export default function ActivityLogPage() {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Birthday');
  const [modalVisible, setModalVisible] = useState(false);
  const [reports, setReports] = useState<any[]>([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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
          options={['Birthday', 'Wedding Anniversary', 'Agency Anniversary']}
          onSelect={handleOptionSelect}
        />
        <TouchableOpacity onPress={openModal}>
          <Text style={styles.viewReportLink}>View Report History</Text>
        </TouchableOpacity>
      </View>
      <ActivityFormField onAddReport={addReport} />
      <FieldReportHistoryModal visible={modalVisible} onClose={closeModal} reports={reports} />
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
  viewReportLink: {
    color: '#3B3B3E',
    fontSize: 16,
  },
});
