import { configureStore } from "@reduxjs/toolkit";
import conversorSlice from '../features/conversor/conversorSlice.js';

export const store = configureStore({
  reducer: {
    conversor: conversorSlice
  }
})