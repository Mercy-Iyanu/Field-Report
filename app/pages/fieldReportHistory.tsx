import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from '@/components/DatePicker';
import TypeOfDropdown from '@/components/TypeOfDropdown';
import CustomButton from '@/components/CustomButton';

const statusOptions = ['Pending', 'In Progress', 'Done'];
const satisfactionOptions = ['Satisfied', 'Not Satisfied'];

interface Report {
  title: string;
  agencyName: string;
  agencyCategory: string;
  contactPerson: string;
  description: string;
  yourView: string;
  nextActionStep: string;
  priorityLevel: string;
  status: string;
  attachment: string;
}

interface FieldReportHistoryModalProps {
  visible: boolean;
  onClose: () => void;
  reports: Report[];
}

export default function FieldReportHistoryModal({ visible, onClose, reports }: FieldReportHistoryModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedType, setSelectedType] = useState('');
  const [statusFilters, setStatusFilters] = useState<string[]>([]);

  const handleExport = () => {
    // Logic for exporting the data
    alert('Export functionality to be implemented');
  };

  const handleStatusChange = (index: number, value: string) => {
    const updatedStatus = [...statusFilters];
    updatedStatus[index] = value;
    setStatusFilters(updatedStatus);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.title}>Field Report History</Text>
          </View>

          <ScrollView style={styles.container}>
            <View style={styles.filterContainer}>
              <DatePicker onDateChange={setSelectedDate} />
              <TypeOfDropdown options={['All', 'Category 1', 'Category 2']} onSelect={setSelectedType} />
            </View>

            <FlatList
              data={reports} // Change from fieldReports to reports
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>{index + 1}</Text>
                  <Text style={styles.tableCell}>{item.priorityLevel}</Text>
                  <Text style={styles.tableCell}>{item.title}</Text>
                  <Text style={styles.tableCell}>{item.agencyName}</Text>
                  <Text style={styles.tableCell}>{item.agencyCategory}</Text>
                  <Text style={styles.tableCell}>{item.contactPerson}</Text>
                  <Text style={styles.tableCell}>{item.description}</Text>
                  <Text style={styles.tableCell}>{item.yourView}</Text>
                  <Text style={styles.tableCell}>{item.nextActionStep}</Text>
                  <Text style={styles.tableCell}>{item.status}</Text>
                  <Text style={styles.tableCell}>{item.attachment}</Text>
                </View>
              )}
              ListHeaderComponent={() => (
                <View style={styles.tableHeader}>
                  {['S/N', 'Priority Level', 'Title', 'Agency Name', 'Agency Category', 'Contact Person', 'Description', 'Your View', 'Next Action Step', 'Status', 'Attachment'].map((header, index) => (
                    <Text key={index} style={styles.tableHeaderCell}>{header}</Text>
                  ))}
                </View>
              )}
            />

            <View style={styles.exportButtonContainer}>
              <CustomButton title="Export" onPress={handleExport} />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '90%',
    backgroundColor: '#161622',
    borderRadius: 10,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#3B3B3E',
    paddingVertical: 10,
  },
  tableHeaderCell: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#3B3B3E',
    paddingVertical: 10,
  },
  tableCell: {
    color: '#fff',
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
  },
  exportButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
