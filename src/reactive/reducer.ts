import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {randomKey} from '../utils/key';

const REACTIVE_SLICE_NAME = `reactive-js-${randomKey()}`;

type ReactiveState = {
  /**
   * Map to save view model as a key
   */
  viewModels: {[key: string]: string};
};

const initialState: ReactiveState = {
  /**
   * Caching
   * RAF
   * Redux not support map
   */
  viewModels: {},
};

export const reactiveSlice = createSlice({
  name: REACTIVE_SLICE_NAME,
  initialState,
  reducers: {
    setViewModelKey: (state, action: PayloadAction<string>) => {
      state.viewModels[action.payload] = randomKey();
    },
    removeViewModelKey: (state, action: PayloadAction<string>) => {
      delete state.viewModels[action.payload];
    },
  },
});

export const {setViewModelKey, removeViewModelKey} = reactiveSlice.actions;

export default reactiveSlice.reducer;
