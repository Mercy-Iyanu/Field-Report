import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RepeatEvent() {
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Repeat Event</Text>
        {/* <Switch /> */}
      </View>
      {/* <DropdownMenu /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
});