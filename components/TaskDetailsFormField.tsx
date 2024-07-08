import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import PriorityLevel from './PriorityLevel';
import StatusLevel from './StatusLevel';

interface Member {
  id: string;
  name: string;
  avatar: string;
}

interface TaskDetailsFormFieldProps {
  title: string;
  description: string;
  priority: string;
  status: string;
  taskCategory: string;
  principalMembers: Member[];
  coMembers: Member[];
}

const TaskDetailsFormField = ({
  title,
  description,
  priority,
  status,
  taskCategory,
  principalMembers,
  coMembers,
}: TaskDetailsFormFieldProps) => {
  const renderMember = ({ item }: { item: Member }) => (
    <View style={styles.memberContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.memberName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PriorityLevel options={[]} currentOption={priority} onSelect={() => {}} modalVisible={false} setModalVisible={() => {}} />
        <StatusLevel options={[]} currentOption={status} onSelect={() => {}} modalVisible={false} setModalVisible={() => {}} />
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.titleInput}
          placeholder="Task Title"
          placeholderTextColor="#888"
          value={title}
          editable={false}
        />
        <TextInput
          style={styles.descriptionInput}
          placeholder="Task Description"
          placeholderTextColor="#888"
          value={description}
          editable={false}
        />

        <View style={styles.inputRow}>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownLabel}>Task category</Text>
            <View style={styles.disabledDropdown}>
              <Text style={styles.dropdownText}>{taskCategory}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.label}>Principal Members:</Text>
        <FlatList
          data={principalMembers}
          renderItem={renderMember}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.label}>Co Members:</Text>
        <FlatList
          data={coMembers}
          renderItem={renderMember}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232533',
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 150,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    marginTop: 20,
  },
  titleInput: {
    color: '#fff',
    marginBottom: 16,
    fontSize: 24,
  },
  descriptionInput: {
    color: '#fff',
    marginBottom: 16,
    fontSize: 12,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dropdownContainer: {
    flex: 1,
  },
  dropdownLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  disabledDropdown: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
  },
  dropdownText: {
    color: '#fff',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  memberName: {
    color: '#fff',
    fontSize: 12,
  },
});

export default TaskDetailsFormField;