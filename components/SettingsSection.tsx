import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SettingItem = {
  title: string;
  description: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  onPress: () => void;
};

export default function SettingsSection() {
  const settings: SettingItem[] = [
    { title: 'Edit Profile', description: 'Change your profile information', icon: 'person-circle-outline', onPress: () => {} },
    { title: 'Reset Password', description: 'Change your account password', icon: 'key-outline', onPress: () => {} },
    { title: 'Notifications', description: 'Manage your notification preferences', icon: 'notifications-outline', onPress: () => {} },
    { title: 'Privacy and Security', description: 'Adjust your privacy settings', icon: 'lock-closed-outline', onPress: () => {} },
  ];

  return (
    <View style={styles.container}>
      {settings.map((setting, index) => (
        <TouchableOpacity key={index} style={styles.settingItem} onPress={setting.onPress}>
          <Ionicons name={setting.icon} size={20} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.settingText}>{setting.title}</Text>
            <Text style={styles.settingDescription}>{setting.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  settingText: {
    fontSize: 16,
    color: '#fff',
  },
  settingDescription: {
    fontSize: 12,
    color: '#ccc',
  },
});
