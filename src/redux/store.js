import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './contacts/contacts-slice';
import { filterSlice } from 'redux/filter/filterSlice';


const store = configureStore({
  reducer: {
    contacts: counterSlice.reducer,
    filter: filterSlice.reducer,
  },
   
});
export { store };
