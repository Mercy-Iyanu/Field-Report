import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment'; // We use moment.js to handle date manipulation

export default function DateNavigator() {
  const [currentDate, setCurrentDate] = useState(moment());

  // Function to handle moving to the previous day
  const handlePrevious = () => {
    setCurrentDate(prevDate => moment(prevDate).subtract(1, 'days'));
  };

  // Function to handle moving to the next day
  const handleNext = () => {
    setCurrentDate(prevDate => moment(prevDate).add(1, 'days'));
  };

  return (
    <View style={styles.container}>
      {/* Previous Button */}
      <TouchableOpacity style={styles.navButton} onPress={handlePrevious}>
        <Text style={styles.navText}>{'<'}</Text>
      </TouchableOpacity>

      {/* Display Current Date */}
      <Text style={styles.dateText}>{currentDate.format('MMMM Do, YYYY')}</Text>

      {/* Next Button */}
      <TouchableOpacity style={styles.navButton} onPress={handleNext}>
        <Text style={styles.navText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#1E1E2D',
    borderRadius: 8,
  },
  navButton: {
    padding: 10,
    backgroundColor: '#E50000',
    borderRadius: 8,
  },
  navText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
