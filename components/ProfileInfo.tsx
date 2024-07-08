import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileInfo() {

    const profilePic = require('../assets/images/profilepic.jpg');
  return (
    <View style={styles.container}>
      <Image
        source={profilePic}
        style={styles.profileImage  }
        resizeMode="contain"
      />
      <Text style={styles.name}>Tosin Onalaja</Text>
      <Text style={styles.email}>oluwatosinonalaja@sabreng.com</Text>
      <Text style={styles.title}>Account Management</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 16,
    color: '#ccc',
  },
  title: {
    fontSize: 15,
    color: '#e50000'
  }
});
