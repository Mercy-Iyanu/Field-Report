import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Image, StyleSheet } from 'react-native';

interface Member {
  id: string;
  name: string;
  avatar: string;
}

interface MemberDropdownProps {
  teamMembers: Member[];
  onAddMembers: (selectedMembers: Member[]) => void;
}

const MemberDropdown = ({ teamMembers, onAddMembers }: MemberDropdownProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<Member[]>([]);

  const handleToggleMember = (member: Member) => {
    const isSelected = selectedMembers.some((m) => m.id === member.id);
    if (isSelected) {
      setSelectedMembers(selectedMembers.filter((m) => m.id !== member.id));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const handleAddMembers = () => {
    onAddMembers(selectedMembers);
    setModalVisible(false);
  };

  const renderMember = ({ item }: { item: Member }) => (
    <TouchableOpacity
      style={[styles.memberContainer, selectedMembers.some((m) => m.id === item.id) && styles.selectedMember]}
      onPress={() => handleToggleMember(item)}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.memberName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.addMembersLink}>Add members</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={teamMembers}
              renderItem={renderMember}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContainer}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddMembers}>
              <Text style={styles.addButtonText}>Add Members</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  addMembersLink: {
    color: '#1E90FF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#1E1E2D',
    borderRadius: 10,
    padding: 20,
  },
  listContainer: {
    marginBottom: 20,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#2A2A3A',
  },
  selectedMember: {
    backgroundColor: '#1E90FF',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  memberName: {
    color: '#fff',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MemberDropdown;
