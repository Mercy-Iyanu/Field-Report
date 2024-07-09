import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type PrivacyAndSecurityModalProps = {
  onClose: () => void;
};

export default function PrivacyAndSecurityModal({ onClose }: PrivacyAndSecurityModalProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy and Security</Text>
        <View /> {/* This empty View is used for alignment */}
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <Text style={styles.text}>
          Your privacy is important to us. Here you can manage your privacy settings to control how your data is used and shared.
        </Text>
        <Text style={styles.subSectionTitle}>Data Collection</Text>
        <Text style={styles.text}>
          We collect data to improve your experience. You can choose what data to share.
        </Text>
        <Text style={styles.subSectionTitle}>Data Sharing</Text>
        <Text style={styles.text}>
          We share data with third parties only with your consent. Review and manage your data sharing settings.
        </Text>
        <Text style={styles.subSectionTitle}>Data Deletion</Text>
        <Text style={styles.text}>
          You can request to delete your data at any time. Go to your account settings to manage data deletion.
        </Text>

        <Text style={styles.sectionTitle}>Security</Text>
        <Text style={styles.text}>
          Protecting your data is our top priority. Here you can manage your security settings to ensure your account is secure.
        </Text>
        <Text style={styles.subSectionTitle}>Two-Factor Authentication</Text>
        <Text style={styles.text}>
          Add an extra layer of security to your account by enabling two-factor authentication.
        </Text>
        <Text style={styles.subSectionTitle}>Password Management</Text>
        <Text style={styles.text}>
          Update your password regularly to keep your account secure. Use a strong, unique password for your account.
        </Text>
        <Text style={styles.subSectionTitle}>Account Activity</Text>
        <Text style={styles.text}>
          Review your recent account activity to detect any unauthorized access. Report any suspicious activity immediately.
        </Text>

        {/* Add more sections as needed */}
      </ScrollView>
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
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subSectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 20,
  },
});
