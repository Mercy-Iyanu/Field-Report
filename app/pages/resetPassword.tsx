import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PasswordField from '@/components/PasswordField';
import CustomButton from '@/components/CustomButton';

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
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reset Password</Text>
      </View>

      <View style={styles.content}>
        <PasswordField
          value={currentPassword}
          placeholder="Current Password"
          label="Current Password"
          onChangeText={setCurrentPassword}
        />
        <PasswordField
          value={newPassword}
          placeholder="New Password"
          label="New Password"
          onChangeText={setNewPassword}
        />
        <PasswordField
          value={reconfirmNewPassword}
          placeholder="Reconfirm New Password"
          label="Reconfirm New Password"
          onChangeText={setReconfirmNewPassword}
        />

        <CustomButton title="Reset Password" onPress={handleResetPassword} />
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
});
