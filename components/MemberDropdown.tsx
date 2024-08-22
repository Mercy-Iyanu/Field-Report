import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Image, StyleSheet } from 'react-native';

interface Member {
  id: string;
  name: string;
  avatar: string;
}

interface MemberDropdownProps {
  teamMembers: Member[];
  onAddMembers: (principalMembers: Member[], coMembers: Member[]) => void;
}

const MemberDropdown = ({ teamMembers, onAddMembers }: MemberDropdownProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [principalMembers, setPrincipalMembers] = useState<Member[]>([]);
  const [coMembers, setCoMembers] = useState<Member[]>([]);

  const handleToggleMember = (member: Member, isPrincipal: boolean) => {
    if (isPrincipal) {
      const isSelected = principalMembers.some((m) => m.id === member.id);
      if (isSelected) {
        setPrincipalMembers(principalMembers.filter((m) => m.id !== member.id));
      } else {
        setPrincipalMembers([...principalMembers, member]);
      }
    } else {
      const isSelected = coMembers.some((m) => m.id === member.id);
      if (isSelected) {
        setCoMembers(coMembers.filter((m) => m.id !== member.id));
      } else {
        setCoMembers([...coMembers, member]);
      }
    }
  };

  const handleAddMembers = () => {
    onAddMembers(principalMembers, coMembers);
    setModalVisible(false);
  };

  const renderMember = ({ item }: { item: Member }, isPrincipal: boolean) => (
    <TouchableOpacity
      style={[
        styles.memberContainer,
        (isPrincipal
          ? principalMembers.some((m) => m.id === item.id)
          : coMembers.some((m) => m.id === item.id)) && styles.selectedMember,
      ]}
      onPress={() => handleToggleMember(item, isPrincipal)}
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
            <Text style={styles.sectionTitle}>Principal Task-Owner</Text>
            <FlatList
              data={teamMembers}
              renderItem={(item) => renderMember(item, true)}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContainer}
            />
            <Text style={styles.sectionTitle}>Co Task-Owners</Text>
            <FlatList
              data={teamMembers}
              renderItem={(item) => renderMember(item, false)}
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
    backgroundColor: '#161622',
  },
  selectedMember: {
    backgroundColor: '#E50000',
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
  addButton: {
    borderColor: '#E50000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default MemberDropdown;
