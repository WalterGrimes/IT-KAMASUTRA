import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendlistReducer from './friendlist-reducer';
import authReducer from './auth-reducer';

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendlistPage: friendlistReducer,
    auth: authReducer,
  },
});

export default store;
