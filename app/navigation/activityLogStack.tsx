import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityLogPage from '../(tabs)/activityLog';

const Stack = createNativeStackNavigator();

export default function ActivityLogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ActivityLog" component={ActivityLogPage} />
    </Stack.Navigator>
  );
}
