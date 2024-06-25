import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabLayout from './app/(tabs)/_layout';
import CreateTaskPage from './app/pages/createTask';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Tabs" 
            component={TabLayout} 
            options={{ headerShown: false }} 
        />
        <Stack.Screen 
            name="CreateTask" 
            component={CreateTaskPage} 
            options={{ title: 'Create Task' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
