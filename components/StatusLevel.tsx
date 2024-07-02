import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Modal, FlatList, View } from 'react-native';

interface StatusLevelProps {
  options: { id: string; label: string }[];
  currentOption: string;
  onSelect: (option: string) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  isDisabled?: boolean;
}

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'Pending':
      return { backgroundColor: '#ff4040', color: '#fff' };
    case 'In Progress':
      return { backgroundColor: '#ffbf00', color: '#000' };
    case 'Completed':
      return { backgroundColor: '#00aaff', color: '#fff' };
    default:
      return { backgroundColor: 'transparent', color: '#fff' };
  }
};

const StatusLevel: React.FC<StatusLevelProps> = ({ options, currentOption, onSelect, modalVisible, setModalVisible }) => {
  const renderOption = ({ item }: { item: { id: string; label: string } }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        onSelect(item.label);
        setModalVisible(false);
      }}
    >
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const { backgroundColor, color } = getStatusStyles(currentOption);

  return (
    <>
      <TouchableOpacity
        style={[styles.statusContainer, { backgroundColor }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[styles.statusText, { color }]}>{currentOption}</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View>
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
              renderItem={renderOption}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  statusText: {
    fontSize: 10,
  },
  // modalBackground: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  // },
  modalContainer: {
    backgroundColor: '#161622',
    padding: 20,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  option: {
    backgroundColor: '#1E1E2D',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default StatusLevel;