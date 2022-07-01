import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { Order } from '../../const';
import { CallFilters } from '../../types/Calls';

const initialState: CallFilters = {
  date: [dayjs().subtract(3,'days').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
  inOut: undefined,
  order: Order.DESC
}

const FILTERS = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setInOut(state, action) {
      state.inOut = action.payload;
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const { setDate, setInOut, setOrder } = FILTERS.actions;
export const filtersReducer = FILTERS.reducer;
