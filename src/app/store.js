import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/app';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
