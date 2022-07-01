import { configureStore } from '@reduxjs/toolkit';
import { callsApi } from './callsApi';
import { filtersReducer } from './slices/filters'

export const store = configureStore({
  reducer: {
    [callsApi.reducerPath]: callsApi.reducer,
    filters: filtersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(callsApi.middleware),
});
