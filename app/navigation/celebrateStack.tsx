import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CelebratePage from '../(tabs)/celebrate';

const Stack = createNativeStackNavigator();

export default function CelebrateStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Celebrate" component={CelebratePage} />
    </Stack.Navigator>
  );
}
