import {createContext} from 'react';
import type {ReactReduxContextValue, TypedUseSelectorHook} from 'react-redux';
import {createSelectorHook} from 'react-redux';

import type {ModuleIdentifier} from '../core';
import {getViewModel} from './';
import type {ViewModelClass} from './base/classes/ViewModel';
import type {RootState} from './store';

/**
 * Special context to use with `useSelector` hook.
 */
export const reactiveContext = createContext<ReactReduxContextValue>(
  null as any,
);

const useAppSelector: TypedUseSelectorHook<RootState> =
  createSelectorHook(reactiveContext);

/**
 * Hook to get data from view model.
 * To connect view model to component.
 */
export const useDataViewModel = <T = any>(mID: ModuleIdentifier) => {
  const viewModel = getViewModel<ViewModelClass>(mID);
  useAppSelector(state => state.viewModels[viewModel.key]);
  return viewModel.data as T;
};
