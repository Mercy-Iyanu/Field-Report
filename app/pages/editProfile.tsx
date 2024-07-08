import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

type EditProfileModalProps = {
  onClose: () => void;
};

export default function EditProfileModal({ onClose }: EditProfileModalProps) {
  const [fullName, setFullName] = useState('Tosin Onalaja');
  const [username, setUsername] = useState('tosinonalaja');
  const [department, setDepartment] = useState('Account Management');
  const [phone, setPhone] = useState('123-456-7890');
  const [profilePic, setProfilePic] = useState(require('../../assets/images/profilepic.jpg'));

  const handleSaveChanges = () => {
    // Logic to save changes
    onClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View /> {/* This empty View is used for alignment */}
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.imageContainer}>
        <Image
            source={profilePic}
            style={styles.profileImage}
            resizeMode="contain"
        />
          <Ionicons name="camera" size={24} color="white" style={styles.cameraIcon} />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Fullname"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={department}
            style={styles.picker}
            onValueChange={(itemValue) => setDepartment(itemValue)}
          >
            <Picker.Item label="Account Management" value="Account Management" />
            <Picker.Item label="HR" value="HR" />
            <Picker.Item label="Engineering" value="Engineering" />
            <Picker.Item label="Sales" value="Sales" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Phone no"
          value={phone}
          onChangeText={setPhone}
        />

        <Button title="Save Changes" onPress={handleSaveChanges} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    padding: 16,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    color: '#fff',
  },
});
