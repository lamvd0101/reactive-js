import {configureStore} from '@reduxjs/toolkit';

import reducer from './reducer';

/**
 * Redux store
 */
export const store = configureStore({
  reducer,
  devTools: {
    name: 'REACTIVE',
    maxAge: 100,
  },
});

/**
 * Type of root state
 */
export type RootState = ReturnType<typeof store.getState>;
/**
 * Type of dispatch
 */
export type AppDispatch = typeof store.dispatch;
