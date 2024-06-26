import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabLayout from './app/(tabs)/_layout';
import CreateTaskPage from './app/pages/createTask';
import TaskListPage from './app/(tabs)/taskList';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const handleCreateTask = (title: string, description: string, priority: string, status: string, category: string) => {
    console.log('Task created:', title, description, priority, status, category);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen 
          name="TaskList" 
          component={TaskListPage} 
        />
        <Stack.Screen 
          name="CreateTask">
          {props => <CreateTaskPage {...props} onCreateTask={handleCreateTask} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
