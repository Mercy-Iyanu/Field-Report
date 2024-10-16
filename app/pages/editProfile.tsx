import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextField from '@/components/TextField';
import CustomButton from '@/components/CustomButton';
import DropdownMenu from '@/components/DropdownMenu';
import * as ImagePicker from 'expo-image-picker';

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
    onClose();
  };

  const updateProfilePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.canceled) {
      setProfilePic({ uri: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            source={profilePic}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <Ionicons name="camera" size={24} color="white" style={styles.cameraIcon} onPress={updateProfilePicture} />
        </TouchableOpacity>

        <TextField
          value={fullName}
          placeholder="Fullname"
          label="Fullname"
          onChangeText={setFullName}
        />
        <TextField
          value={username}
          placeholder="Username"
          label="Username"
          onChangeText={setUsername}
        />
        <DropdownMenu
          options={['Account Management', 'Sales']}
          onSelect={setDepartment}
      />
        <TextField
          value={phone}
          placeholder="Phone no"
          label="Phone no"
          onChangeText={setPhone}
        />

        <CustomButton title="Save Changes" onPress={handleSaveChanges} />
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
    // justifyContent: 'space-between',
    // alignItems: 'center',
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
});