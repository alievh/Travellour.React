import { createSlice } from '@reduxjs/toolkit';

const initialSidebarToggle = { isActive: true };

const sidebarToggleSlice = createSlice({
  name: 'sidebarToggle',
  initialState: initialSidebarToggle,
  reducers: {
    toggleSidebar(state: any) {
      state.isActive = !state.isActive;
    },
  },
});

export const sidebarToggleAction = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;