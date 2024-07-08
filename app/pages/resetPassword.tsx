import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ResetPasswordModalProps = {
  onClose: () => void;
};

export default function ResetPasswordModal({ onClose }: ResetPasswordModalProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reconfirmNewPassword, setReconfirmNewPassword] = useState('');

  const handleResetPassword = () => {
    // Logic to reset the password
    onClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reset Password</Text>
        <View /> {/* This empty View is used for alignment */}
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Current Password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Reconfirm New Password"
          value={reconfirmNewPassword}
          onChangeText={setReconfirmNewPassword}
          secureTextEntry
        />

        <Button title="Reset Password" onPress={handleResetPassword} />
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
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
});
