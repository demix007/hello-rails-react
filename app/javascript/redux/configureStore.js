import { configureStore } from '@reduxjs/toolkit';
import { thunkMiddleware } from 'redux-thunk';
import messageReducer from './messageReducer';

const store = configureStore({
  reducer: messageReducer,
  ThunkMiddleware: [thunkMiddleware],
});

export default store;
