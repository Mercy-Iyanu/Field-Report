import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, RefreshControl, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

import ProfileInfo from '@/components/ProfileInfo';
import SettingsSection from '@/components/SettingsSection';
import CustomButton from '@/components/CustomButton';
import LogoutConfirmationModal from '@/components/LogOut';

import EditProfileModal from '../pages/editProfile';
import ResetPasswordModal from '../pages/resetPassword';
import PrivacyAndSecurityModal from '../pages/privacySecurity';
import NotificationsModal from '../pages/notifications';

export default function ProfilePage() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [editProfileVisible, setEditProfileVisible] = useState(false);
  const [resetPasswordVisible, setResetPasswordVisible] = useState(false);
  const [privacyAndSecurityVisible, setPrivacyAndSecurityVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const colorScheme = useColorScheme();
  // const colors = Colors[colorScheme ?? 'light'];
  const colors = darkMode ? Colors.dark : Colors.light;

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    setLogoutModalVisible(true);
  };

  const confirmLogout = () => {
    console.log('Logged out successfully');
    setLogoutModalVisible(false);
  };

  const handleEditProfile = () => {
    setEditProfileVisible(true);
  };

  const handleResetPassword = () => {
    setResetPasswordVisible(true);
  };

  const handlePrivacyAndSecurity = () => {
    setPrivacyAndSecurityVisible(true);
  };

  const handleNotifications = () => {
    setNotificationsVisible(true);
  };

  const handleFormSubmit = () => {
    // Perform form submission actions
    console.log('You attempted to delete your account.');
  };

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>Profile</Text>
          <View style={styles.icons}>
            
            <TouchableOpacity onPress={handleDarkModeToggle}>
              <Ionicons name={darkMode ? 'sunny' : 'moon'} size={24} color={colors.text} style={styles.icon} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={24} color={colors.text} style={styles.logOutIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <ProfileInfo />
        <SettingsSection onEditProfile={handleEditProfile} onResetPassword={handleResetPassword} onPrivacyAndSecurity={handlePrivacyAndSecurity} onNotifications={handleNotifications} />
        <CustomButton title="Delete Account" onPress={handleFormSubmit} />
      </View>
      <View>
        <Modal visible={editProfileVisible} animationType="slide">
          <EditProfileModal onClose={() => setEditProfileVisible(false)} />
        </Modal>
        <Modal visible={resetPasswordVisible} animationType="slide">
          <ResetPasswordModal onClose={() => setResetPasswordVisible(false)} />
        </Modal>
        <Modal visible={privacyAndSecurityVisible} animationType="slide">
          <PrivacyAndSecurityModal onClose={() => setPrivacyAndSecurityVisible(false)} />
        </Modal>
        <Modal visible={notificationsVisible} animationType="slide">
          <NotificationsModal onClose={() => setNotificationsVisible(false)} />
        </Modal>
      </View>
      <LogoutConfirmationModal
        visible={logoutModalVisible}
        onConfirm={confirmLogout}
        onCancel={() => setLogoutModalVisible(false)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#161622',
    paddingTop: 28,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  logOutIcon: {
    marginLeft: 16,
    color: '#E50000'
  }
});