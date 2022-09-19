import { configureStore } from '@reduxjs/toolkit';

import sidebarToggleSlice from './sidebarToggle';
import AuthSlice from './Auth/AuthSlice';
import UserDataSlice from './User/UserData';


const store = configureStore({
  reducer: { sidebarToggle: sidebarToggleSlice, AuthReducer: AuthSlice, UserData: UserDataSlice},
});

export default store;