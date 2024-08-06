// fieldReportsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FieldReport {
  taskCategory: string;
  priorityLevel: string;
  title: string;
  agencyName: string;
  agencyCategory: string;
  contactPerson: string;
  description: string;
  yourView: string;
  nextActionStep: string;
  status: string;
  attachment: string;
  statusReply: string;
}

interface FieldReportsState {
  fieldReports: FieldReport[];
}

const initialState: FieldReportsState = {
  fieldReports: [],
};

const fieldReportsSlice = createSlice({
  name: 'fieldReports',
  initialState,
  reducers: {
    addFieldReport: (state, action: PayloadAction<FieldReport>) => {
      state.fieldReports.push(action.payload);
    },
    updateFieldReport: (state, action: PayloadAction<{ index: number; report: FieldReport }>) => {
      state.fieldReports[action.payload.index] = action.payload.report;
    },
    setFieldReports: (state, action: PayloadAction<FieldReport[]>) => {
      state.fieldReports = action.payload;
    },
  },
});

export const { addFieldReport, updateFieldReport, setFieldReports } = fieldReportsSlice.actions;
export default fieldReportsSlice.reducer;