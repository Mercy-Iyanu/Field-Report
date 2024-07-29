// /redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import fieldReportsReducer from './slices/fieldReportsSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    fieldReports: fieldReportsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;