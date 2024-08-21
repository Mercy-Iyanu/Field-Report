// src/store/notificationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
    id: string;
    message: string;
    timestamp: Date;
    type: 'TaskCreated' | 'TaskCompleted' | 'ReportLogged';
}

const initialState: Notification[] = [];

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.push(action.payload);
    },
    clearNotifications: state => {
      return [];
    },
  },
});

export const { addNotification, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
