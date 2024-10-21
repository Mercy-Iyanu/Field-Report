import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateNavigator from './DateNavigator';

export default function DateNavigatorContainer() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextDate = () => {
    setCurrentDate(prevDate => {
      const nextDate = new Date(prevDate);
      nextDate.setDate(prevDate.getDate() + 1);
      return nextDate;
    });
  };

  // Function to handle moving to the previous date
  const handlePreviousDate = () => {
    setCurrentDate(prevDate => {
      const previousDate = new Date(prevDate);
      previousDate.setDate(prevDate.getDate() - 1);
      return previousDate;
    });
  };

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <View style={styles.container}>
      <DateNavigator
        date={formatDate(currentDate)}
        onNext={handleNextDate}
        onPrevious={handlePreviousDate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
