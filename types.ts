// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Tabs: undefined;
  TaskList: undefined;
  CreateTask: undefined;
};

export type CreateTaskPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTask'>;
  route: RouteProp<RootStackParamList, 'CreateTask'>;
};
