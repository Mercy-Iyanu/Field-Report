import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Tabs: undefined;
  CreateTask: undefined;
};

export type CreateTaskPageProps = NativeStackScreenProps<RootStackParamList, 'CreateTask'>;
