import type {ModuleIdentifier} from '../../../core';
import {module} from '../../../core';
import type {ViewModelClass} from '../classes/ViewModel';
import type {ViewModel} from '../interfaces/ViewModel';

/**
 * Auto connect a view model class to the container when import the class
 */
export function viewModel(id: ModuleIdentifier) {
  return function (target: new (...args: never) => ViewModelClass) {
    module<ViewModel>(id, {type: 'singleton'})(target);
  };
}
