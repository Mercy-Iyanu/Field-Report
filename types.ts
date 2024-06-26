// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Tabs: undefined;
  Root: undefined;
  TaskList: undefined;
  CreateTask: { onCreateTask: (title: string, description: string, priority: string, status: string, category: string) => void };
};

export type CreateTaskPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTask'>;
  route: RouteProp<RootStackParamList, 'CreateTask'>;
};
