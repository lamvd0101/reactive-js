/**
 * === DESCRIPTION ===
 * Because ReactJS automatically re-renders components when their props or state changes,
 * So, maybe we spend a lot of re-render components. We cannot remember to control it for every components.
 *
 * === SOLUTION ===
 * We will build a solution to manually control the re-rendering of components.
 * Use MVVM pattern to control the re-rendering of components. Include:
 * 1. Model: business data
 * 2. View: component
 * 3. ViewModel: reactive (view data, controller, redux)
 * Note: ViewModel is a singleton class. View and ViewModel are 1:1 relationship.
 * ViewModel is a controller of View. ViewModel is a reactive data of View.
 * Model is a business data of ViewModel. ViewModel includes model and view data.
 *
 * === HOW IT WORKS ===
 * We will save ViewModel to a redux store same as a key. The View only renders when we trigger change the key.
 * And get view data from ViewModel.
 *
 * === HOW TO USE ===
 * 1. Create a view controller class
 * 2. Add @viewModel('name') decorator to the class
 */

import React from 'react';
import {Provider} from 'react-redux';

import {getModule, ModuleIdentifier} from '../core';
import {ViewModelClass} from './base/classes/ViewModel';
import {viewModel} from './base/decorators';
import {reactiveContext, useDataViewModel} from './hooks';
import {store} from './store';

/**
 * Reactive Component
 */
function ReactReactive(props: {children: React.ReactNode}) {
  return (
    <Provider store={store} context={reactiveContext}>
      {props.children}
    </Provider>
  );
}

export {
  getModule as getViewModel,
  ModuleIdentifier,
  ReactReactive,
  useDataViewModel,
  viewModel,
  ViewModelClass,
};
