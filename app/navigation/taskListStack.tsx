import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListPage from '../(tabs)/taskList';
import CreateTaskPage from '../pages/createTask';
import { RootStackParamList } from '../../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function TaskListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TaskList" component={TaskListPage} />
      <Stack.Screen name="CreateTask" component={CreateTaskPage} />
    </Stack.Navigator>
  );
}
