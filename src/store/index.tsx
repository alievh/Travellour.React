import { configureStore } from '@reduxjs/toolkit';

import sidebarToggleSlice from './sidebarToggle';


const store = configureStore({
  reducer: { sidebarToggle: sidebarToggleSlice },
});

export default store;