import { createSlice } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

const initialTheme = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: initialTheme },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
