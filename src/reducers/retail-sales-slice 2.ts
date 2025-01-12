import { createSlice } from '@reduxjs/toolkit';
import stacklineData from '../../public/stackline_frontend_assessment_data_2021.json'
import { StacklineData } from '../constants/types';

const initialState: StacklineData = stacklineData;
const salesSlice = createSlice({ 
  name: 'sales',
  initialState,
  reducers: {},
});

export default salesSlice.reducer;