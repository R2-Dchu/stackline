import { createSlice } from '@reduxjs/toolkit';
import stacklineData from '../stackline_frontend_assessment_data_2021.json'
import { StacklineData } from '../constants/types';

const initialState: StacklineData = stacklineData;

const salesSlice = createSlice({ 
  name: 'sales',
  initialState,
  reducers: {
    updateSales: (state, action) => {
      const { newState, actionType } = action.payload;
      if (actionType === 'update') {
        return {...state, sales: newState.sales};
      }
    }
  },
});

export const { updateSales } = salesSlice.actions;
export default salesSlice.reducer;
