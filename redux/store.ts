// /redux/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import fieldReportsReducer from './slices/fieldReportsSlice';

const rootReducer = combineReducers({
  tasks: taskReducer,
  fieldReports: fieldReportsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;